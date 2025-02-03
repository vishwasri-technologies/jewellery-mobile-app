
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Icon library for back arrow
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const UpdatePasswordScreen = ({ navigation }) => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleUpdatePassword = () => {
//     // Add password update logic here
//     console.log('Password Updated:', password, confirmPassword);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Arrow */}
//       <TouchableOpacity
//         style={styles.backArrowContainer}
//         onPress={() => navigation.goBack()} // Navigate to the previous screen
//       >
//         <Ionicons name="arrow-back-outline" size={hp('3%')} color="#5D1675" />
//         <Text style={styles.backText}></Text>
//       </TouchableOpacity>

//       <Text style={styles.header}>Set a new password</Text>
//       <Text style={styles.subHeader}>
//         Update your password to restore access to your account.
//       </Text>

//       <Text style={styles.mainText1}>Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your new password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <Text style={styles.mainText2}>Confirm Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Re-enter password"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
//         <Text style={styles.buttonText}>Update Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from "@expo/vector-icons"; // Icon library for back arrow
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UpdatePasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = async () => {
    if (!password || !confirmPassword) {
      Alert.alert("Error", "Both fields are required!");
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
  
    const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{6,}$/;
    if (!passwordPattern.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 6 characters long and include:\n✅ One uppercase letter\n✅ One number (0-9)\n✅ One special character (!@#$%^&*)"
      );
      return;
    }
  
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        Alert.alert("Error", "User not authenticated. Please sign in again.");
        return;
      }
  
      const response = await axios.post(
        "http://192.168.29.178:5000/Forgot", // Replace with your actual API endpoint
        { newPassword: password, confirmPassword: confirmPassword },
        { headers: { Authorization: `Bearer ${token}` } } // Ensure the token is correctly formatted
      );
  
      Alert.alert("Success", "Password updated successfully", [
        { text: "OK", onPress: () => navigation.navigate("SignIn") },
      ]);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to update password. Please try again.";
      Alert.alert("Error", errorMessage);
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()} // Navigate to the previous screen
      >
        <Ionicons name="arrow-back-outline" size={hp('3%')} color="#5D1675" />
        <Text style={styles.backText}></Text>
      </TouchableOpacity>

      <Text style={styles.header}>Set a new password</Text>
      <Text style={styles.subHeader}>
        Update your password to restore access to your account.
      </Text>

      <Text style={styles.mainText1}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your new password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.mainText2}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Re-enter password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#FFFFFF',
  },
  backArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    marginTop:hp('4%'),
  },
  backText: {
    fontSize: hp('2%'),
    color: '#5D1675',
    marginLeft: wp('2%'),
    fontWeight: '500',
  },
  header: {
    fontSize: hp('3%'),
    fontWeight: '600',
    color: '#5D1675',
    marginBottom: hp('3%'),
  },
  subHeader: {
    fontSize: hp('2%'),
    color: '#8E8E8E',
    marginBottom: hp('2.5%'),
  },
  mainText1: {
    color: '#5D1675',
    fontSize: hp('2%'),
    marginBottom: hp('1.5%'),
  },
  mainText2: {
    color: '#5D1675',
    fontSize: hp('2%'),
    marginBottom: hp('1.5%'),
  },
  input: {
    height: hp('6.5%'),
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: wp('1.5%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },
  button: {
    height: hp('6.5%'),
    backgroundColor: '#5D1675',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1.5%'),
    width: wp('90%'),
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: hp('2.2%'),
    fontWeight: '600',
  },
});

export default UpdatePasswordScreen;
