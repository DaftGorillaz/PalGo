import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
export default function Medals() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.column2}>
						<View style={styles.column3}>
							<View style={styles.view2}>
								<Image
									source = {{uri: "https://placecats.com/300/200"}} 
									resizeMode = {"stretch"}
									style={styles.image2}
								/>
							</View>
							<View style={styles.view3}>
								<Text style={styles.text2}>
									{"Alejandro"}
								</Text>
							</View>
							<View style={styles.row2}>
								<View style={styles.box}>
								</View>
								<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text3}>
										{"Messi"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.column4}>
							<View style={styles.row3}>
								<View style={styles.column5}>
									<Text style={styles.text4}>
										{"3"}
									</Text>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9002cf15-42fc-4bef-9379-6a1ff8ee113c"}} 
										resizeMode = {"stretch"}
										style={styles.image3}
									/>
								</View>
								<Text style={styles.text5}>
									{"Medals"}
								</Text>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f83268d6-a0db-4994-be1a-4b595be0710a"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
							</View>
							<Text style={styles.text6}>
								{"You’ve Collected 1/10\nPal who likes Billie Ellish"}
							</Text>
							<View style={styles.view4}>
								<Text style={styles.text7}>
									{"Favorite Musician"}
								</Text>
							</View>
							<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
								<Text style={styles.text8}>
									{"BACK"}
								</Text>
							</TouchableOpacity>
							<View style={styles.view5}>
								<Text style={styles.text7}>
									{"Favorite Athlete"}
								</Text>
							</View>
							<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
								<Text style={styles.text8}>
									{"Next"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
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
	absoluteImage: {
		position: "absolute",
		top: 139,
		right: 102,
		left: 102,
		height: 183,
	},
	box: {
		width: 52,
		height: 33,
		backgroundColor: "#D6E1FF",
		borderColor: "#1088AE",
		borderRadius: 10,
		borderWidth: 1,
		marginRight: 109,
	},
	button: {
		backgroundColor: "#D6E1FF",
		borderColor: "#1088AE",
		borderRadius: 10,
		borderWidth: 1,
		padding: 8,
	},
	button2: {
		alignItems: "center",
		backgroundColor: "#006FFD",
		borderRadius: 12,
		paddingVertical: 6,
		marginBottom: 43,
		marginHorizontal: 9,
	},
	button3: {
		alignItems: "center",
		backgroundColor: "#006FFD",
		borderRadius: 12,
		paddingVertical: 6,
		marginHorizontal: 9,
	},
	column: {
		paddingTop: 14,
		paddingBottom: 28,
	},
	column2: {
		marginHorizontal: 22,
	},
	column3: {
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 31,
		marginBottom: 7,
		marginHorizontal: 1,
	},
	column4: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingTop: 68,
		paddingBottom: 11,
	},
	column5: {
		flex: 1,
		marginRight: 11,
	},
	image: {
		width: 72,
		height: 13,
	},
	image2: {
		borderRadius: 12,
		width: 80,
		height: 80,
	},
	image3: {
		height: 1,
	},
	image4: {
		width: 132,
		height: 1,
		marginTop: 37,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	row2: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginLeft: 74,
	},
	row3: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 8,
		marginHorizontal: 3,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#006FFD",
	},
	text: {
		color: "#111111",
		fontSize: 15,
		fontWeight: "bold",
		marginRight: 121,
	},
	text2: {
		color: "#070707",
		fontSize: 28,
		fontWeight: "bold",
	},
	text3: {
		color: "#1088AE",
		fontSize: 14,
		fontWeight: "bold",
	},
	text4: {
		color: "#006FFD",
		fontSize: 20,
		marginBottom: 9,
		marginLeft: 26,
	},
	text5: {
		color: "#ABA9A9",
		fontSize: 15,
		marginTop: 25,
		marginRight: 12,
	},
	text6: {
		color: "#000000",
		fontSize: 19,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 38,
		marginHorizontal: 5,
	},
	text7: {
		color: "#ABA9A9",
		fontSize: 15,
	},
	text8: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
	},
	view: {
		flex: 1,
		alignItems: "flex-end",
		paddingVertical: 2,
	},
	view2: {
		alignItems: "center",
		marginBottom: 10,
	},
	view3: {
		alignItems: "center",
		marginBottom: 21,
	},
	view4: {
		alignItems: "flex-end",
		marginBottom: 11,
	},
	view5: {
		alignItems: "flex-end",
		marginBottom: 97,
	},
});
