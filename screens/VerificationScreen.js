import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your 4-digit code</Text>

      {/* Ô nhập OTP */}
      <TextInput
        style={styles.input}
        placeholder="- - - -"
        keyboardType="number-pad"
        maxLength={4}
        textAlign="center"
        value={otp}
        onChangeText={setOtp}
      />

      {/* Nút gửi lại mã */}
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>

      {/* Nút tiếp tục */}
      <TouchableOpacity
        style={[styles.button, otp.length === 4 ? styles.activeButton : styles.disabledButton]}
        onPress={() => navigation.navigate("HomeScreen")}
        disabled={otp.length !== 4} // Kiểm tra nhập đủ 4 số
      >
        <Text style={styles.buttonText}>→</Text>
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
    marginBottom: 20,
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginHorizontal: 50,
    padding: 10,
  },
  resendButton: {
    marginTop: 10,
    alignSelf: "center",
  },
  resendText: {
    color: "#53B175",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 20,
  },
  activeButton: {
    backgroundColor: "#53B175",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default VerificationScreen;
