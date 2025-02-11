import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BottomNavBar from "./BottomNavbar";

const ProfileOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header with Back Button and Title */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image
              source={require("../assets/profileImgs/back.png")} // Replace with actual back icon image
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order</Text>
        </View>

        {/* Main Content */}
        <Image source={require("../assets/Avatar-1.png")} style={styles.icon} />
        <Text style={styles.text}>
          "Nothing here… yet! Explore and{"\n"}place your first order today."
        </Text>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: hp("4%"),
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
  },
  backButton: {
    position: "absolute",
    left: wp("4%"),
    zIndex: 1, // Keeps it above the title
  },
  backIcon: {
    width: wp("6%"),
    height: hp("6%"),
    tintColor: "#47154B", // Ensures the color change
    resizeMode: "contain",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: wp("6.5%"),
    fontWeight: "bold",
    color: "#47154B",
  },
  icon: {
    width: wp("65%"),
    height: hp("35%"),
    resizeMode: "contain",
    marginTop: hp("14%"),
  },
  text: {
    fontSize: wp("4.9%"),
    textAlign: "center",
    marginVertical: hp("2%"),
    color: "#333",
    lineHeight: hp("4%"),
  },
});

export default ProfileOrder;
