import { Tabs } from 'expo-router';
import {ReactNode} from "react";

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
            backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
        }}
    >  
      <Tabs.Screen
        name="medals"
        options={{
          title: 'Medals',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'medal-sharp' : 'medal-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Find',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'locate-sharp' : 'locate-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
