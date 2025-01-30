import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icon library for back arrow

const UpdatePasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = () => {
    // Add password update logic here
    console.log('Password Updated:', password, confirmPassword);
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()} // Navigate to the previous screen
      >
        <Ionicons name="arrow-back-outline" size={24} color="#5D1675" />
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
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop:20,
  },
  backArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#5D1675',
    marginLeft: 5,
    fontWeight: '500',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5D1675',
    marginBottom: 30,
    // marginTop: 10,
  },
  subHeader: {
    fontSize: 14,
    color: '#8E8E8E',
    marginBottom: 25,
  },
  mainText1: {
    color: '#5D1675',
    fontSize: 16,
    marginBottom: 12,
  },
  mainText2: {
    color: '#5D1675',
    fontSize: 16,
    marginBottom: 12,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    height: 50,
    backgroundColor: '#5D1675',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '95%',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UpdatePasswordScreen;
