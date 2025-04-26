import React, { useState, useEffect, useRef } from 'react';
import { Platform, Image, FlatList, Dimensions, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import PagerView from 'react-native-pager-view';

import * as Device from 'expo-device';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_SPACING = width * 0.05;

const MOCK_USERS = [
  {
    id: '1',
    name: 'Mario',
    pronouns: 'She/Her',
    avatar: 'https://placecats.com/200/200',
    latOffset: 0.001,
    lonOffset: 0.001,
  },
  {
    id: '2',
    name: 'Luigi',
    pronouns: 'He/Him',
    avatar: 'https://placecats.com/201/201',
    latOffset: -0.001,
    lonOffset: 0.002
  },
  //...more users
];

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [mockUsers, setMockUsers] = useState<
    Array<{ id: string; name: string; latitude: number; longitude: number }>
  >([]);

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg("Location won’t work on Android emulator—try a real device.");
        return;
      }
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation(loc);

      // Optionally animate to region
      const { latitude, longitude } = loc.coords;
      const region: Region = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      mapRef.current?.animateToRegion(region, 1000);

      //Compute absolute coords for each mock user
      const users = MOCK_USERS.map(u => ({
        id: u.id,
        name: u.name,
        latitude: latitude + u.latOffset,
        longitude: longitude + u.lonOffset,
      }));
      setMockUsers(users);

    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Fetching your location…</Text>
      </View>
    );
  }

  const { latitude, longitude } = location.coords;

  
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        showsMyLocationButton
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="You are here"
          description={`Lat: ${latitude.toFixed(5)}, Lon: ${longitude.toFixed(5)}`}
        />
        {/* Markers for each mock user around you */}
        {mockUsers.map(u => (
          <Marker
            key={u.id}
            coordinate={{ latitude: u.latitude, longitude: u.longitude }}
            title={u.name}
            pinColor="purple"
          />
        ))}
      </MapView>
      <View style={styles.carousel}>
        <FlatList
          data={MOCK_USERS}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + CARD_SPACING}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: CARD_SPACING }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.pronouns}>{item.pronouns}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Catch-up?</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },

  card: {
    width: CARD_WIDTH,
    marginRight: CARD_SPACING,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    // shadow / elevation
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: '100%',
    height: CARD_WIDTH * 0.5,
    borderRadius: 8,
    marginBottom: 12,
  },

  pronouns: {
    fontSize: 12,
    color: '#777',
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#006FFD',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
