import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NumberScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Nhập số điện thoại */}
      <View style={styles.inputContainer}>
        <Image source={require("../assets/flag.png")} style={styles.flag} />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Nút tiếp tục */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VerificationScreen")}
        disabled={phoneNumber.length < 10} // Kiểm tra số điện thoại hợp lệ
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
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
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default NumberScreen;
