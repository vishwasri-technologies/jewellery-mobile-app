
// import React, { useState } from 'react';
// import { 
//   View, Text, TextInput, TouchableOpacity, StyleSheet, 
//   Image, ScrollView, Alert 
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import googleIcon from "../assets/google-icon.png";
// import facebookIcon from "../assets/fb-icon.png";
// import appleIcon from "../assets/apple-iconn.png";
// import signin from "../assets/signin-img.png";

// const SignIn = () => {
//   const navigation = useNavigation();
//   const [emailPhone, setEmailPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [securePassword, setSecurePassword] = useState(true);

//   const handleSignIn = () => {
//     if (!emailPhone || !password) {
//       Alert.alert('Error', 'All fields are required!');
//       return;
//     }

//     const emailPhonePattern = /^[a-zA-Z0-9]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
//     const phonePattern = /^[0-9]{10}$/;

//     if (!emailPhonePattern.test(emailPhone) && !phonePattern.test(emailPhone)) {
//       Alert.alert('Error', 'Please enter a valid email or phone number');
//       return;
//     }

//     Alert.alert('Success', 'Signed in successfully', [
//       { text: 'OK', onPress: () => navigation.navigate('home') }
//     ]);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <View style={styles.logoContainer}>
//           <Text style={styles.logo}>ViShu's</Text>
//           <Image source={signin} style={styles.image} />
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Sign in</Text>

//           <Text style={styles.inputHeading}>Email/Mobile no</Text>
//           <TextInput
//             placeholder="Enter your email or phone number"
//             style={styles.input}
//             value={emailPhone}
//             onChangeText={setEmailPhone}
//             keyboardType="email-address"
//           />

//           <Text style={styles.inputHeading}>Password</Text>
//           <View style={styles.passwordContainer}>
//             <TextInput
//               placeholder="Enter your password"
//               style={styles.input}
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={securePassword}
//             />
//             <TouchableOpacity
//               onPress={() => setSecurePassword(!securePassword)}
//               style={styles.eyeIconContainer}
//             >
//               <Ionicons
//                 name={securePassword ? "eye-off-outline" : "eye-outline"}
//                 size={wp(6)}
//                 color="black"
//               />
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//             <Text style={styles.buttonText}>Sign in</Text>
//           </TouchableOpacity>

//           <Text style={styles.forgotPassword} onPress={() => navigation.navigate('forgot')}>
//             Forgot Password?
//           </Text>

//           <View style={styles.socialContainer}>
//             <TouchableOpacity onPress={() => console.log("Google Login Clicked")}>
//               <Image source={googleIcon} style={styles.icon} />
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => console.log("Facebook Login Clicked")}>
//               <Image source={facebookIcon} style={styles.icon} />
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => console.log("Apple Login Clicked")}>
//               <Image source={appleIcon} style={styles.icon2} />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.switchText}>
//             Don’t have an account?{' '}
//             <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };




import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/fb-icon.png";
import appleIcon from "../assets/apple-iconn.png";
import signin from "../assets/signin-img.png";

const SignIn = () => {
  const navigation = useNavigation();
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);

  const handleSignIn = async () => {
    if (!emailPhone || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    const emailPhonePattern = /^[a-zA-Z0-9]+@gmail\.com$/;
    const phonePattern = /^[0-9]{10}$/;
    
    if (!emailPhonePattern.test(emailPhone) && !phonePattern.test(emailPhone)) {
      Alert.alert('Error', 'Please enter a valid email (must include @gmail.com) or phone number');
      return;
    }
    
        const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{6,}$/;
    
      if (!passwordPattern.test(password)) {
        Alert.alert(
          'Error',
          'Password must be at least 6 characters long and include:\n✅ One uppercase letter\n✅ One number (0-9)\n✅ One special character (!@#$%^&*)'
        );
        return;
      }
      

    try {
      const response = await axios.post("http://192.168.29.178:5000/SignIn", {
        emailOrMobile: emailPhone,
        password,
      });

      if (response.data.token) {
        await AsyncStorage.setItem("userToken", response.data.token);
        Alert.alert("Success", "Signed in successfully", [
          { text: "OK", onPress: () => navigation.navigate("location") },
        ]);
      }
    } catch (error) {
      Alert.alert("Error", "Invalid credentials or server error");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>ViShu's</Text>
          <Image source={signin} style={styles.image} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign in</Text>

          <Text style={styles.inputHeading}>Email/Mobile no</Text>
          <TextInput
            placeholder="Enter your email or phone number"
            style={styles.input}
            value={emailPhone}
            onChangeText={setEmailPhone}
            keyboardType="email-address"
          />

          <Text style={styles.inputHeading}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={securePassword}
            />
            <TouchableOpacity
              onPress={() => setSecurePassword(!securePassword)}
              style={styles.eyeIconContainer}
            >
              <Ionicons
                name={securePassword ? "eye-off-outline" : "eye-outline"}
                size={wp(6)}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("forgot")}
          >
            Forgot Password?
          </Text>

          {/* <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => console.log("Google Login Clicked")}>
              <Image source={googleIcon} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Facebook Login Clicked")}>
              <Image source={facebookIcon} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Apple Login Clicked")}>
              <Image source={appleIcon} style={styles.icon2} />
            </TouchableOpacity>
          </View> */}

          <Text style={styles.switchText}>
            Don’t have an account?{" "}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  logoContainer: {
    backgroundColor: "#47154B",
    paddingVertical: hp(2.5),
    paddingHorizontal: wp(10),
    borderRadius: wp(2),
    alignItems: 'center',
    marginBottom: hp(3),
    width: wp(113),
  },
  logo: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp(-40),
    marginTop: hp(2),
  },
  image: {
    width: wp(80),
    height: hp(25),
    resizeMode: 'contain',
    marginTop: hp(-2),
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: wp(5),
    borderRadius: wp(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: wp(1.5),
    elevation: 7,
    marginTop: hp(-10),
  },
  title: {
    fontSize: wp(6),
    color: '#4A154B',
    marginVertical: hp(1),
    fontWeight: '600',
    textAlign: "center",
  },
  inputHeading: {
    fontSize: wp(4),
    color: '#4A154B',
    marginVertical: hp(0.5),
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: hp(6.5),
    backgroundColor: '#f5f5f5',
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    marginVertical: hp(1),
    borderColor: '#ccc',
    borderWidth: 1,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: wp(3),
    top: hp(2.5),
  },
  button: {
    width: '100%',
    height: hp(7),
    backgroundColor: '#6A0E77',
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#6A0E77',
    alignSelf: 'flex-end',
    marginBottom: hp(1),
    fontSize: wp(3.5),
    textDecorationLine: 'underline',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  icon: {
    width: wp(12),
    height: hp(6),
    marginHorizontal: wp(3),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp(1),
  },
  icon2: {
    width: wp(10),
    height: hp(5),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp(1),
    marginHorizontal: wp(2.5),
  },
  switchText: {
    fontSize: wp(4),
    color: 'black',
    textAlign: "center",
  },
  linkText: {
    color: '#6A0E77',
    fontWeight: 'bold',
    textDecorationLine: "underline",
  },
});

export default SignIn;

