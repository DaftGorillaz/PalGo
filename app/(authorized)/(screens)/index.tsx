import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import { Link, router } from "expo-router";

import Button from '@/components/Button';


export default function UserPersonality() {

    const [value, setValue] = useState("");

	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.text2}>
                    {"Who are you?"}
                </Text>
                <View style={styles.column2}>
                    <Text style={styles.text4}>
                        {"Nationality"}
                    </Text>
                    <View style={styles.box}>
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                    />
                    </View>
                </View>
                <Text style={styles.text5}>
                    {"MBTI"}
                </Text>
            </View>
            <ScrollView style={styles.scrollView}>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"INTP"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"INTJ"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ENTJ"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ENTP"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"INFJ"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"INFP"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ENFJ"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ENFP"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ISTJ"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ISFJ"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ESTJ"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ESFJ"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ISTP"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ISFP"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ESTP"}
                        </Text>
                    </TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>router.push('interest')}>
                        <Text style={styles.text6}>
                            {"ESFP"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            <View>
                <TouchableOpacity style={styles.button2} onPress={()=>router.push('interest')}>
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
		backgroundColor: "#D9D9D9",
		borderRadius: 15,
		paddingVertical: 6,
		marginBottom: 9,
		marginHorizontal: 32,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	button2: {
		alignItems: "center",
		backgroundColor: "#006FFD",
		borderRadius: 12,
		paddingVertical: 7,
		marginHorizontal: 24,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingTop: 24,
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
	image2: {
		height: 6,
		marginBottom: 12,
		marginHorizontal: 32,
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
		color: "#2E3036",
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 22,
		marginLeft: 24,
	},
	text6: {
		color: "#000000",
		fontSize: 15,
		fontWeight: "bold",
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
	},
});
