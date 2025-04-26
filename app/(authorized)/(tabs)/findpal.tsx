import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebef3ecc-da5f-413f-a246-3cd8e24cc356"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</View>
				<View >
					<View style={styles.view}>
						<View style={styles.row2}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43ef813d-b118-4843-9286-f535271ac453"}} 
								resizeMode = {"stretch"}
								style={styles.image2}
							/>
							<Text style={styles.text2}>
								{"Find Pal"}
							</Text>
							<View style={styles.box}>
							</View>
						</View>
					</View>
					<ImageBackground 
						source={{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f50116c7-3770-4d9c-99d2-4ebe65e99ab0"}} 
						resizeMode = {'stretch'}
						style={styles.column}
						>
						<View style={styles.row3}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32d382c3-deb5-4961-a067-090e40f38d25"}} 
								resizeMode = {"stretch"}
								style={styles.image3}
							/>
							<TextInput
								placeholder={"Search…"}
								value={textInput1}
								onChangeText={onChangeTextInput1}
								style={styles.input}
							/>
						</View>
						<View style={styles.row4}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b82743f-4304-4f59-bacc-8a7a6a8791d7"}} 
								resizeMode = {"stretch"}
								style={styles.image4}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ada4f79b-f31d-471d-9fc3-0501fa371fe2"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f7b66f1-159b-4699-8283-2d1aff5eefea"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<View style={styles.view2}>
							<View style={styles.row5}>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58db99b7-a69f-4c8f-8dd9-8b03285001af"}} 
									resizeMode = {"stretch"}
									style={styles.image7}
								/>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24ce9e39-ce9c-4a18-9ca2-99f2c82a22f0"}} 
									resizeMode = {"stretch"}
									style={styles.image8}
								/>
							</View>
						</View>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0efd7cc9-3d5e-4e31-b3d0-0e15a344e488"}} 
							resizeMode = {"stretch"}
							style={styles.image9}
						/>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85f65bdc-b04a-4343-91e6-b17c6757937c"}} 
							resizeMode = {"stretch"}
							style={styles.image10}
						/>
						<View style={styles.row6}>
							<View style={styles.row7}>
								<View style={styles.box2}>
								</View>
								<View style={styles.column2}>
									<Text style={styles.text3}>
										{"She/Her 🐱 "}
									</Text>
									<Text style={styles.text4}>
										{"It’s me, MARIO!"}
									</Text>
									<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
										<Text style={styles.text5}>
											{"Catch-up?"}
										</Text>
									</TouchableOpacity>
									<Text style={styles.text6}>
										{"🌸  🍪"}
									</Text>
								</View>
							</View>
							<View style={styles.view3}>
								<View style={styles.box3}>
								</View>
							</View>
						</View>
					</ImageBackground>
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
		width: 18,
		height: 13,
	},
	box2: {
		width: 90,
		height: 106,
		backgroundColor: "#D8D8D8",
		borderRadius: 10,
		marginLeft: 14,
		marginRight: 8,
	},
	box3: {
		width: 23,
		height: 106,
		backgroundColor: "#D8D8D8",
		borderRadius: 10,
	},
	button: {
		backgroundColor: "#006FFD",
		borderRadius: 12,
		paddingVertical: 10,
		paddingHorizontal: 31,
		marginBottom: 4,
	},
	column: {
		alignItems: "flex-start",
		paddingTop: 74,
		paddingBottom: 64,
	},
	column2: {
		alignItems: "flex-start",
		marginRight: 61,
	},
	image: {
		width: 68,
		height: 14,
	},
	image2: {
		width: 18,
		height: 13,
	},
	image3: {
		width: 15,
		height: 16,
		marginRight: 14,
	},
	image4: {
		width: 14,
		height: 14,
		marginRight: 196,
	},
	image5: {
		width: 14,
		height: 14,
	},
	image6: {
		width: 14,
		height: 14,
		marginBottom: 9,
		marginLeft: 186,
	},
	image7: {
		width: 14,
		height: 14,
		marginTop: 27,
		marginRight: 6,
	},
	image8: {
		width: 124,
		height: 124,
	},
	image9: {
		width: 14,
		height: 14,
		marginBottom: 26,
		marginLeft: 266,
	},
	image10: {
		width: 14,
		height: 14,
		marginBottom: 92,
		marginLeft: 96,
	},
	input: {
		color: "#C6C6C6",
		fontSize: 14,
		flex: 1,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FAFAFA",
		paddingVertical: 14,
		paddingHorizontal: 19,
		marginBottom: 1,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#006FFD",
		paddingVertical: 9,
		paddingHorizontal: 15,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 16,
		elevation: 16,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 18,
		marginBottom: 140,
		marginHorizontal: 14,
		shadowColor: "#0000001F",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 48,
		elevation: 48,
	},
	row4: {
		flexDirection: "row",
		marginBottom: 16,
		marginLeft: 96,
	},
	row5: {
		flexDirection: "row",
	},
	row6: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginHorizontal: 14,
	},
	row7: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		paddingVertical: 14,
		marginRight: 14,
		shadowColor: "#00000012",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 48,
		elevation: 48,
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
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	text3: {
		color: "#24272A",
		fontSize: 14,
		marginBottom: 7,
		marginLeft: 2,
	},
	text4: {
		color: "#77838F",
		fontSize: 12,
		marginBottom: 4,
		marginLeft: 2,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
	},
	text6: {
		color: "#2E3036",
		fontSize: 12,
		fontWeight: "bold",
		marginLeft: 4,
	},
	view: {
		backgroundColor: "#FFFFFF",
		paddingBottom: 744,
	},
	view2: {
		alignItems: "center",
		marginBottom: 13,
	},
	view3: {
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		paddingVertical: 14,
		paddingLeft: 14,
		shadowColor: "#00000012",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 48,
		elevation: 48,
	},
});
