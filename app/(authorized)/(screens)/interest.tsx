import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, TextInput} from "react-native";

import { router } from "expo-router";

export default function UserInterest() {

    const [musician, setMusician] = useState('');
    const [athlete, setAthlete] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<Text style={styles.text2}>
						{"What do you like?"}
					</Text>
					<Text style={styles.text3}>
						{"So, you are a man of culture."}
					</Text>
					<View style={styles.column2}>
						<Text style={styles.text4}>
							{"Favorite Musician"}
						</Text>
						<View style={styles.box}>
                            <TextInput
                                value={musician}
                                onChangeText={setMusician}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="default"
                            /> 
						</View>
					</View>
					<View style={styles.column2}>
						<Text style={styles.text4}>
							{"Favorite Athlete"}
						</Text>
						<View style={styles.box}>
                            <TextInput
                            value={athlete}
                            onChangeText={setAthlete}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            />
						</View>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('/profilegen')}>
						<Text style={styles.text5}>
							{"Next"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		height: 48,
		borderColor: "#006FFD",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 14,
		paddingHorizontal: 16,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#006FFD",
		borderRadius: 12,
		paddingVertical: 7,
		marginHorizontal: 24,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 24,
		paddingBottom: 511,
		marginBottom: 1,
	},
	column2: {
		marginBottom: 13,
		marginHorizontal: 24,
	},
	image: {
		width: 68,
		height: 14,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FAFAFA",
		paddingVertical: 26,
		paddingHorizontal: 19,
	},
	scrollView: {
		flex: 1,
	},
	text: {
		color: "#1F2024",
		fontSize: 15,
		fontWeight: "bold",
		textAlign: "center",
		flex: 1,
	},
	text2: {
		color: "#1F2024",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
		marginLeft: 24,
	},
	text3: {
		color: "#71727A",
		fontSize: 12,
		marginBottom: 12,
		marginLeft: 24,
	},
	text4: {
		color: "#2E3036",
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 7,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
	},
});
