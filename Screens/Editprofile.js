import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BottomNavbar from "./BottomNavbar";

const EditProfile = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrmobile, setEmailOrMobile] = useState("");
  const [errors, setErrors] = useState({});

  // 🔹 Validation Function
  const validateInputs = () => {
    let newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last Name is required.";

    // ✅ Validate Email or Mobile Number
    const mobileRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailOrmobile.trim()) {
      newErrors.emailOrmobile = "Email or Mobile is required.";
    } else if (!mobileRegex.test(emailOrmobile) && !emailRegex.test(emailOrmobile)) {
      newErrors.emailOrmobile = "Enter a valid email or 10-digit mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Save Profile Data to Backend
  const saveProfile = async () => {
    if (!validateInputs()) return; // Stop if validation fails

    try {
      const response = await axios.post("http://192.168.29.178:5000/Editprofile", {
        firstName,
        lastName,
        emailOrmobile, // ✅ Use correct variable name
      });

      Alert.alert("Success", "Profile saved successfully!");
      navigation.goBack(); // ✅ Navigate back after saving
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to save profile.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 🔹 Header with Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>

        {/* 🔹 Profile Image */}
        <View style={styles.profileContainer}>
          <Image source={require("../assets/profileImgs/profile-icon.png")} style={styles.profileImage} />
        </View>

        {/* 🔹 Input Fields with Validation */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

          <Text style={styles.label}>Email / Mobile</Text>
          <TextInput style={styles.input} value={emailOrmobile} onChangeText={setEmailOrMobile} keyboardType="email-address" />
          {errors.emailOrmobile && <Text style={styles.errorText}>{errors.emailOrmobile}</Text>}
        </View>

        {/* 🔹 Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavbar />
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
 
});

export default EditProfile;
