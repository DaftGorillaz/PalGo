import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";

export default function Quiz() {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<View >
				<View style={styles.column}>
					<View style={styles.view}>
						<Text style={styles.text2}>
							{"Do you know me?"}
						</Text>
					</View>
					<View style={styles.row2}>
						<View style={styles.view2}>
							<View style={styles.box}>
							</View>
						</View>
						<Text style={styles.text3}>
							{"1/3"}
						</Text>
					</View>
					<Text style={styles.text4}>
						{"What’s my Name?"}
					</Text>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a42552e-af5b-4882-9389-bb5b151bdcba"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<TextInput
							placeholder={"Mario"}
							value={textInput1}
							onChangeText={onChangeTextInput1}
							style={styles.input}
						/>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff848814-faae-46b1-8a1e-e1050547610a"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<TextInput
							placeholder={"Luigi"}
							value={textInput2}
							onChangeText={onChangeTextInput2}
							style={styles.input}
						/>
					</View>
					<View style={styles.row4}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecfbf151-ff59-45da-ba2c-3896f280a8f5"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<TextInput
							placeholder={"Peach"}
							value={textInput3}
							onChangeText={onChangeTextInput3}
							style={styles.input}
						/>
					</View>
					<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
						<Text style={styles.text5}>
							{"CONTINUE"}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		width: 100,
		height: 12,
		backgroundColor: "#006FFD",
		borderRadius: 16,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#747475",
		borderRadius: 8,
		paddingVertical: 20,
		marginHorizontal: 20,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 48,
		paddingBottom: 58,
	},
	image: {
		width: 68,
		height: 14,
	},
	image2: {
		width: 36,
		height: 36,
		marginRight: 16,
	},
	input: {
		color: "#060710",
		fontSize: 16,
		fontWeight: "bold",
		flex: 1,
		paddingVertical: 8,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FAFAFA",
		paddingVertical: 14,
		paddingHorizontal: 19,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 16,
		marginBottom: 40,
		marginHorizontal: 20,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F4F3F6",
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginBottom: 30,
		marginHorizontal: 20,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F4F3F6",
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginBottom: 147,
		marginHorizontal: 20,
	},
	text: {
		color: "#1F2024",
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 1,
	},
	text2: {
		color: "#000000",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 1,
	},
	text3: {
		color: "#757575",
		fontSize: 14,
		fontWeight: "bold",
	},
	text4: {
		color: "#191D63",
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 64,
		marginLeft: 20,
		width: 187,
	},
	text5: {
		color: "#EDE8E2",
		fontSize: 16,
		fontWeight: "bold",
	},
	view: {
		alignItems: "center",
		marginBottom: 32,
	},
	view2: {
		flex: 1,
		alignItems: "flex-start",
		backgroundColor: "#F4F3F6",
		borderRadius: 16,
		marginRight: 12,
	},
});
