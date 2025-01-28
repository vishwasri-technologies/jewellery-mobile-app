import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';


import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/fb-icon.png";
import appleIcon from "../assets/apple-iconn.png";
import signup from "../assets/signup-img.png"; 
import eyeIcon from "../assets/eye-icon.png"; // Import your own eye icon image

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true); // State to toggle password visibility

  const handleSignUp = () => {
    // Basic validation
    if (!name || !emailPhone || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    const emailPhonePattern = /^[a-zA-Z0-9]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPhonePattern.test(emailPhone) && !phonePattern.test(emailPhone)) {
      Alert.alert('Error', 'Please enter a valid email or phone number');
      return;
    }

    // Proceed with signup logic
    Alert.alert('Success', 'Signed up successfully');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo and Image Container */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>ViShu's</Text>
          <Image source={signup} style={styles.image} />
        </View>

        {/* Form Container with Box Shadow */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign up</Text>

          {/* Form Headings and Inputs */}
          <Text style={styles.inputHeading}>Full Name</Text>
          <TextInput 
            placeholder="Name" 
            style={styles.input} 
            value={name} 
            onChangeText={setName} 
          />

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
              placeholder="New password" 
              style={styles.input} 
              value={password} 
              onChangeText={setPassword} 
              secureTextEntry={securePassword}
            />
            <TouchableOpacity onPress={() => setSecurePassword(!securePassword)} style={styles.eyeIconContainer}>
              <Image source={eyeIcon} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>

          {/* SignUp Button */}
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          {/* Social Login Icons */}
          <View style={styles.socialContainer}>
            <Image source={googleIcon} style={styles.icon} />
            <Image source={facebookIcon} style={styles.icon} />
            <Image source={appleIcon} style={styles.icon2} />
          </View>

          {/* Switch to SignIn */}
          <Text style={styles.switchText}>
            Already have an account?{' '}
            <Text style={styles.linkText} onPress={() => navigation.navigate('SignIn')}>Sign in</Text>
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
    paddingHorizontal: 20,
  },
  logoContainer: {
    backgroundColor: "#47154B", 
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
    width: '113%', 
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: -160,
    marginTop: 60,
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginTop: 30, 
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 7, 
    marginTop: -80, 
  },
  title: {
    fontSize: 24,
    color: '#4A154B',
    marginVertical: 10,
    fontWeight: '600',
    textAlign: "center",
  },
  inputHeading: {
    fontSize: 16,
    color: '#4A154B',
    marginVertical: 5,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  eyeIcon: {
    width: 35,
    height: 45,
    resizeMode: 'contain',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6A0E77',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    width: 45,
    height: 40,
    marginHorizontal: 15,
    borderWidth: 1,      
    borderColor: 'black', 
    borderRadius: 5,
  },
  icon2: {
    width: 40,             
    height: 39,            
    borderWidth: 1,      
    borderColor: 'black', 
    borderRadius: 5,
    marginHorizontal:10,       
  },
  
  switchText: {
    fontSize: 16,
    color: 'black',
    textAlign: "center",
  },
  linkText: {
    color: '#6A0E77',
    fontWeight: 'bold',
    textDecorationLine:"underline",
  },
});

export default SignUp;
