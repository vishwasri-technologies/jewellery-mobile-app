import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "react-native-image-picker";
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
  const [mobileNo, setMobileNo] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  // Open Gallery Function
  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: "photo", includeBase64: false },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else {
          const imageUri = response.assets[0].uri;
          setProfilePic(imageUri);
          uploadImage(imageUri);
        }
      }
    );
  };

  // Upload Image to Server
  const uploadImage = async (imageUri) => {
    const formData = new FormData();
    formData.append("profilePic", {
      uri: imageUri,
      type: "image/jpeg",
      name: "profile.jpg",
    });

    try {
      const response = await axios.post("http://192.168.29.178:5000/Editprofile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfilePic(response.data.imageUrl);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  // Save Profile Data
  const saveProfile = async () => {
    try {
      const response = await axios.post("http://192.168.29.178:5000/Editprofile", {
        firstName,
        lastName,
        mobileNo,
        profilePic,
      });
      Alert.alert("Success", "Profile saved successfully!");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to save profile.");
    }
  };

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

        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />

          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />

          <Text style={styles.label}>Email/Mobile no</Text>
          <TextInput style={styles.input} value={mobileNo} onChangeText={setMobileNo} keyboardType="name-phone-pad" />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
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
