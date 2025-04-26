import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet} from "react-native";

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//const [textInput1, textInput2, onChangeTextInput1, onChangeTextInput2,] = useState('');

	const onLogin = () => {
		if (!email || !password) {
			Alert.alert("Error", "Please enter both email and password.");
			return;
		  }
	}
	return (
		<SafeAreaView style={styles.container}>
		  <ScrollView contentContainerStyle={styles.scroll}>
			{/* Hero Image */}
			<Image
			  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
			  style={styles.heroImage}
			  resizeMode="stretch"
			/>
	
			<View style={styles.formContainer}>
			  <Text style={styles.title}>Welcome!</Text>
	
			  {/* Email Input */}
			  <TextInput
				placeholder="Email Address"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
				style={styles.textInput}
			  />
	
			  {/* Password Input */}
			  <TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.textInput}
			  />
	
			  {/* Forgot Password */}
			  <TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Implement reset flow.")}>
				<Text style={styles.forgot}>Forgot password?</Text>
			  </TouchableOpacity>
	
			  {/* Login Button */}
			  <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
				<Text style={styles.loginButtonText}>Login</Text>
			  </TouchableOpacity>
	
			  {/* Register Link */}
			  <Text style={styles.textCenter}>Not a member?</Text>
			  <TouchableOpacity onPress={() => Alert.alert("Register", "Navigate to register screen.")}>
				<Text style={styles.register}>Register now</Text>
			  </TouchableOpacity>
	
			  {/* Divider */}
			  <View style={styles.divider} />
	
			  <Text style={styles.textCenter}>Or continue with</Text>
	
			  {/* Social Icons */}
			  <View style={styles.socialRow}>
				<Image
				  source={{
					uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/rI59R8n6Vq/qrpy6fku_expires_30_days.png",
				  }}
				  style={styles.socialIcon}
				/>
				<Image
				  source={{
					uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/rI59R8n6Vq/dagjivdg_expires_30_days.png",
				  }}
				  style={styles.socialIcon}
				/>
				<Image
				  source={{
					uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/rI59R8n6Vq/ln3ax722_expires_30_days.png",
				  }}
				  style={styles.socialIcon}
				/>
			  </View>
			</View>
		  </ScrollView>
		</SafeAreaView>
	  );
	}
	
	const BORDER_COLOR = "#C5C6CC";
	
	const styles = StyleSheet.create({
	  container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	  },
	  scroll: {
		flexGrow: 1,
	  },
	  statusBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FAFAFA",
		paddingVertical: 14,
		paddingHorizontal: 19,
	  },
	  time: {
		color: "#1F2024",
		fontSize: 15,
		fontWeight: "bold",
	  },
	  statusIcons: {
		width: 68,
		height: 14,
	  },
	  heroImage: {
		width: "100%",
		height: 312,
	  },
	  formContainer: {
		paddingVertical: 40,
		paddingHorizontal: 24,
		backgroundColor: "#FFFFFF",
	  },
	  title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 23,
	  },
	  textInput: {
		borderColor: BORDER_COLOR,
		borderWidth: 1,
		borderRadius: 12,
		paddingVertical: 14,
		paddingHorizontal: 16,
		fontSize: 14,
		color: "#000",
		marginBottom: 16,
	  },
	  forgot: {
		color: "#006FFD",
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 23,
	  },
	  loginButton: {
		backgroundColor: "#006FFD",
		borderRadius: 12,
		paddingVertical: 16,
		alignItems: "center",
		marginBottom: 16,
	  },
	  loginButtonText: {
		color: "#FFF",
		fontSize: 14,
		fontWeight: "bold",
	  },
	  textCenter: {
		textAlign: "center",
		color: "#71727A",
		fontSize: 12,
		marginBottom: 5,
	  },
	  register: {
		textAlign: "center",
		color: "#006FFD",
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 24,
	  },
	  divider: {
		height: 1,
		backgroundColor: BORDER_COLOR,
		marginBottom: 16,
	  },
	  socialRow: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 24,
	  },
	  socialIcon: {
		width: 40,
		height: 40,
		marginHorizontal: 6,
	  },
	});