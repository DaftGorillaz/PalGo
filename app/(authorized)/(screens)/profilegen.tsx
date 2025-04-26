import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { router } from 'expo-router';

export default function ProfileGenerated() {
    return(
        <SafeAreaView style={styles.container}>
            <View>
            <Text>
                {"Profile has been genereated!"}
            </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button2} onPress={()=>router.push('/profile')}>
                    <Text style={styles.text7}>
                        {"Next"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    	backgroundColor: "#FFFFFF",
    },
	button2: {
		alignItems: "center",
		backgroundColor: "#006FFD",
		borderRadius: 12,
		paddingVertical: 7,
		marginHorizontal: 24,
	},
    text7: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
	},
});