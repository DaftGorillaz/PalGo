import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { router } from "expo-router";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function PalCatched() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.view}>
						<Image
							source = {{uri: ""}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
					</View>
					<Text style={styles.text2}>
						{"Pal Catched!"}
					</Text>
					<Image
						source = {{uri: "https://placecats.com/200/200"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
					<View style={styles.column2}>
						<View style={styles.row2}>
							<Text style={styles.text3}>
								{"🐱"}
							</Text>
							<Text style={styles.text4}>
								{"PEACH"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
						<View style={styles.row3}>
							<Text style={styles.text5}>
								{"🌸"}
							</Text>
							<Text style={styles.text6}>
								{"INTJ"}
							</Text>
						</View>
						<View style={styles.box2}>
						</View>
						<View style={styles.row4}>
							<Text style={styles.text5}>
								{"🍪"}
							</Text>
							<Text style={styles.text6}>
								{"BILLIE ELLISH"}
							</Text>
						</View>
						<View style={styles.box3}>
						</View>
						<View style={styles.row5}>
							<Text style={styles.text5}>
								{"🍿"}
							</Text>
							<Text style={styles.text6}>
								{"LEBRON JAMES"}
							</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>router.back()}>
						<Text style={styles.text7}>
							{"NEXT"}
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
		height: 1,
		backgroundColor: "#EDE8E3",
		marginBottom: 16,
		marginHorizontal: 2,
	},
	box2: {
		height: 1,
		backgroundColor: "#EDE8E3",
		marginBottom: 18,
		marginHorizontal: 2,
	},
	box3: {
		height: 1,
		backgroundColor: "#EDE8E3",
		marginBottom: 14,
		marginHorizontal: 2,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#006FFD",
		borderRadius: 8,
		paddingVertical: 20,
		marginHorizontal: 20,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 37,
		paddingBottom: 58,
	},
	column2: {
		alignItems: "flex-start",
		backgroundColor: "#F4F3F6",
		borderColor: "#000000",
		borderRadius: 8,
		borderWidth: 1,
		paddingTop: 17,
		paddingBottom: 31,
		marginBottom: 31,
		marginHorizontal: 20,
	},
	image: {
		width: 68,
		height: 14,
	},
	image2: {
		width: 67,
		height: 71,
	},
	image3: {
		width: 161,
		height: 156,
		marginBottom: 44,
		marginLeft: 102,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FAFAFA",
		paddingVertical: 14,
		paddingHorizontal: 19,
		marginBottom: 2,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		marginLeft: 18,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 23,
		marginLeft: 20,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 21,
		marginLeft: 20,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
	},
	scrollView: {
		flex: 1,
	},
	text: {
		color: "#1F2024",
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 1,
	},
	text2: {
		color: "#191D63",
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 26,
		marginLeft: 114,
        alignContent: "center"
	},
	text3: {
		color: "#24272A",
		fontSize: 35,
		marginRight: 15,
	},
	text4: {
		color: "#060710",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 1,
	},
	text5: {
		color: "#2E3036",
		fontSize: 30,
		fontWeight: "bold",
		marginRight: 18,
	},
	text6: {
		color: "#060710",
		fontSize: 16,
		fontWeight: "bold",
	},
	text7: {
		color: "#F4F3F6",
		fontSize: 16,
		fontWeight: "bold",
	},
	view: {
		alignItems: "center",
		marginBottom: 12,
	},
});
