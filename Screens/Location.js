import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const LocationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Locationon.png")} style={styles.icon} />
      <Text style={styles.text}>Please turn on your location to continue.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
        <Text style={styles.buttonText}>Allow</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    icon: {
      width: wp("30%"),
      height: hp("15%"),
      resizeMode: "contain",
      tintColor: "#5E2670", // Purple color
    },
    text: {
      fontSize: wp("5%"),
      textAlign: "center",
      marginVertical: hp("2%"),
      color: "#333",
    },
    button: {
      backgroundColor: "#5E2670", // Purple color
      paddingVertical: hp("1.5%"),
      paddingHorizontal: wp("20%"),
      borderRadius: 10,
      marginTop: hp("3%"),
    },
    buttonText: {
      color: "#fff",
      fontSize: wp("4%"),
      fontWeight: "bold",
    },
  });
  export default LocationScreen ;