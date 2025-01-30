import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BottomNavBar from './BottomNavbar';

const Wishlist = () => {
  const handlePress = () => {
    alert('Hello, React Native!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Wishlist</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Push content up and navbar to the bottom
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    width: '100%', // Ensuring full width
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomNavContainer: {
    width: '100%', // Ensure BottomNavBar takes the full width
    alignSelf: 'stretch',
  },
});

export default Wishlist;
