import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get your groceries with nectar</Text>
      
      {/* Nhập số điện thoại */}
      <View style={styles.inputContainer}>
        <Image source={require("../assets/flag.png")} style={styles.flag} />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput placeholder="Enter your number" style={styles.input} keyboardType="phone-pad" />
      </View>

      {/* Nút tiếp tục */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NumberScreen")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Hoặc đăng nhập với Google / Facebook */}
      <Text style={styles.orText}>Or connect with social media</Text>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={20} color="#fff" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#1877F2" }]}>
        <FontAwesome name="facebook" size={20} color="#fff" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#888",
  },
  socialButton: {
    flexDirection: "row",
    backgroundColor: "#DB4437",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SignInScreen;
