import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<View style={styles.column2}>
						<View style={styles.view2}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55e2fcbe-b175-4f02-b29d-f96285432bec"}} 
								resizeMode = {"stretch"}
								style={styles.image2}
							/>
						</View>
						<View style={styles.view2}>
							<Text style={styles.text2}>
								{"Alejandro"}
							</Text>
						</View>
						<View style={styles.box}>
						</View>
						<View style={styles.view3}>
							<View style={styles.row2}>
								<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text3}>
										{"MBTI"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text3}>
										{"Billie Ellish"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.button2} onPress={()=>alert('Pressed!')}>
									<Text style={styles.text3}>
										{"Messi"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.column3}>
						<View style={styles.row3}>
							<View style={styles.column4}>
								<View style={styles.column5}>
									<Image
										source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c550d0b8-1e31-4da6-a912-2360298e9e95"}} 
										resizeMode = {"stretch"}
										style={styles.image3}
									/>
									<Text style={styles.text4}>
										{"0"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b04e45f3-0b2a-4853-b44a-d20f40e002f2"}} 
									resizeMode = {"stretch"}
									style={styles.image4}
								/>
							</View>
							<Text style={styles.text5}>
								{"Medals"}
							</Text>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac79ed6a-fa06-4d35-ac11-b22157ce5a5a"}} 
								resizeMode = {"stretch"}
								style={styles.image5}
							/>
						</View>
						<View style={styles.view4}>
							<Text style={styles.text6}>
								{"MBTI"}
							</Text>
						</View>
						<View style={styles.row4}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/199cf87a-bd2c-4f2c-97e1-9fb0c604742b"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4aa6e56a-c39d-4e53-b976-08412788ec75"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4af6f782-160f-4843-be57-adbc50ff86d0"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03863863-d0b2-4c31-b341-50904c684160"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c66937b4-5eb1-4cc4-a4f6-1b863224da27"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/721ab879-c740-4677-83df-1e88bcb65e1d"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/614f5d42-6acf-4ac6-9959-13a170f68d89"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/547e153d-1d37-4b46-a616-62b97f7fbb36"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
						</View>
						<View style={styles.row5}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb43f4a4-9715-492f-9d93-07f1d88391b7"}} 
								resizeMode = {"stretch"}
								style={styles.image6}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e396c825-0b5d-4065-b78e-b628483c705b"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f0d3c8c-f218-438c-9716-7716d16d4cf2"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f79418c6-daf2-4f41-8912-39485afb5943"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/922b1eaf-f1c7-4f4f-aad2-d9b4c4884393"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1da2f94-eaf4-4d16-9466-a80585d26f49"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31986a21-3cab-466d-bd59-b967eedbef13"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fd1d4e0-7d54-4f9c-9dac-47d0159b0014"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
						</View>
						<View style={styles.view4}>
							<Text style={styles.text7}>
								{"Favorite Musician"}
							</Text>
						</View>
						<View style={styles.row6}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6788f8cb-51bc-40e9-86bb-b8ffcb56f2ea"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d8e13bc-c7b7-4692-8b31-600083b7dae0"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3aa82302-6a79-4b25-8413-14f30fb22dda"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b225d40-c97b-4d41-bc03-4cc3e14ce967"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45113f20-ee2d-4096-9ce5-5493cd203e2d"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24fd6bc3-e6e9-42d2-aa77-04fbc9062a94"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82caf02f-5650-4f38-a35f-b6bbdbe1107c"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b7bbe6d-4a94-441c-8895-011454b3d23e"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
						</View>
						<View style={styles.view5}>
							<Text style={styles.text7}>
								{"Favorite Athlete"}
							</Text>
						</View>
						<View style={styles.row7}>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38a62084-c341-4ce7-84f9-f7db5bcaaa01"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28acb96a-50cb-4b15-84d8-2b6e56c5c23d"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74e07413-985f-4be7-99b2-f79bda77660d"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1ef7ee7-a147-4af4-b4ba-7af0e832115c"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb082ae1-90a8-4454-b2d6-3656d09381f0"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79c56b34-7e90-4e13-8eeb-80d5c3b6ebfb"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db090d27-3c1b-47ad-8f0d-531f9d79f3cc"}} 
								resizeMode = {"stretch"}
								style={styles.image7}
							/>
							<Image
								source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/264d5235-8e97-4776-9872-056418290050"}} 
								resizeMode = {"stretch"}
								style={styles.image8}
							/>
						</View>
						<TouchableOpacity style={styles.button3} onPress={()=>alert('Pressed!')}>
							<Text style={styles.text8}>
								{"Next"}
							</Text>
						</TouchableOpacity>
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
	box: {
		height: 1,
		marginBottom: 10,
	},
	button: {
		backgroundColor: "#D6E1FF",
		borderColor: "#1088AE",
		borderRadius: 10,
		borderWidth: 1,
		padding: 8,
		marginRight: 10,
	},
	button2: {
		backgroundColor: "#D6E1FF",
		borderColor: "#1088AE",
		borderRadius: 10,
		borderWidth: 1,
		padding: 8,
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
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingVertical: 31,
		marginBottom: 7,
		marginHorizontal: 23,
	},
	column3: {
		backgroundColor: "#FFFFFF",
		borderRadius: 12,
		paddingTop: 21,
		paddingBottom: 11,
		marginHorizontal: 22,
	},
	column4: {
		flex: 1,
		alignItems: "flex-start",
		marginRight: 11,
	},
	column5: {
		alignItems: "center",
		marginBottom: 9,
		marginLeft: 12,
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
		width: 45,
		height: 48,
	},
	image4: {
		height: 1,
	},
	image5: {
		width: 132,
		height: 1,
		marginTop: 84,
	},
	image6: {
		width: 29,
		height: 29,
		marginRight: 13,
	},
	image7: {
		width: 29,
		height: 29,
		marginRight: 11,
	},
	image8: {
		width: 29,
		height: 29,
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
		paddingLeft: 16,
	},
	row3: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 16,
		marginHorizontal: 3,
	},
	row4: {
		flexDirection: "row",
		marginBottom: 11,
		marginHorizontal: 18,
	},
	row5: {
		flexDirection: "row",
		marginBottom: 24,
		marginHorizontal: 18,
	},
	row6: {
		flexDirection: "row",
		marginBottom: 34,
		marginHorizontal: 21,
	},
	row7: {
		flexDirection: "row",
		marginBottom: 51,
		marginHorizontal: 20,
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
	},
	text5: {
		color: "#ABA9A9",
		fontSize: 15,
		marginTop: 72,
		marginRight: 12,
	},
	text6: {
		color: "#ABA9A9",
		fontSize: 15,
		marginRight: 32,
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
	},
	view4: {
		alignItems: "flex-end",
		marginBottom: 19,
	},
	view5: {
		alignItems: "flex-end",
		marginBottom: 17,
	},
});
