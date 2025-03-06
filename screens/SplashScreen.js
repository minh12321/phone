import React, { useEffect } from "react";
import { View, Image, StyleSheet,Text } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000); // Chuyển màn hình sau 2 giây
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>nectar</Text>
      <Text style={styles.title1}>online groceriet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#53B175", // Màu nền giống ảnh mẫu
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title:{
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 0,
    color: "#fff",

  },
  title1:{
    fontSize: 18,
    textAlign: "left",
    marginBottom: 5,
    color: "#fff",

  }
});

export default SplashScreen;
