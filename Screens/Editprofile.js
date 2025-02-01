import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BottomNavbar from "./BottomNavbar";

const EditProfile = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("Adhvitha");
  const [lastName, setLastName] = useState("Nallapu");
  const [mobileNo, setMobileNo] = useState("9394800354");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header with Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>

        {/* Profile Image with Edit Icon */}
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/profileImgs/profile-icon.png")}
            style={styles.profileImage}
          />
          {/* <TouchableOpacity style={styles.editIconContainer}>
            <Image source={require("../assets/profileImgs/camera.png")} style={styles.editIcon} />
          </TouchableOpacity> */}
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />

          <Text style={styles.label}>Email/Mobile no</Text>
          <TextInput
            style={styles.input}
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            keyboardType="name-phone-pad"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navbar Fixed at Bottom */}
      <View style={styles.bottomNavbar}>
        <BottomNavbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: wp("5%"),
    paddingBottom: hp("10%"), // Ensures space for BottomNavbar
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("5%"),
  },
  backButton: {
    padding: wp("2%"),
  },
  backIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
  title: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: "#47154B",
    textAlign: "center",
    flex: 1,
    marginRight: wp("6%"),
  },
  profileContainer: {
    alignItems: "center",
    marginTop: hp("4%"),
  },
  profileImage: {
    width: wp("35%"),
    height: wp("35%"),
    borderRadius: wp("12.5%"),
  },
  // editIconContainer: {
  //   position: "absolute",
  //   bottom: 0,
  //   right: wp("32%"),
  //   backgroundColor: "#fff",
  //   borderRadius: wp("4%"),
  //   padding: wp("1.5%"),
  //   elevation: 5,
  // },
  editIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
  inputContainer: {
    marginTop: hp("5%"),
  },
  label: {
    fontSize: wp("4%"),
    color: "#47154B",
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  input: {
    height: hp("6%"),
    borderBottomWidth: 1,
    borderBottomColor: "#47154B",
    fontSize: wp("4%"),
    marginBottom: hp("3%"),
    paddingHorizontal: wp("2%"),
    color: "#47154B",
  },
  saveButton: {
    backgroundColor: "#641E69",
    paddingVertical: hp("2%"),
    borderRadius: wp("2%"),
    alignItems: "center",
    marginTop: hp("5%"),
  },
  saveButtonText: {
    color: "#fff",
    fontSize: wp("5%"),
    fontWeight: "bold",
  },
  bottomNavbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default EditProfile;
