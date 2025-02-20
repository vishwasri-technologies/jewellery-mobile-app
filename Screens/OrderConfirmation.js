import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { useNavigation } from '@react-navigation/native';

const OrderConfirmation = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.checkCircle}>
        <Text style={styles.checkMark}>✓</Text>
      </View>
      <Text style={styles.message}>Your order has been successfully confirmed</Text>
      <Text style={styles.delivery}>Expected delivery in 2 days.</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate("tracking")}>
          <Text style={styles.buttonText}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
      },
      checkCircle: {
        width: wp(25), 
        height: wp(25), // 25% of screen width (for a perfect circle)
        backgroundColor: '#216800',
        borderRadius: wp(12.5), // Half of the width for a perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp(3), // 3% of screen height
      },
      checkMark: {
        fontSize: wp(15), // 15% of screen width
        color: 'white',
      },
      message: {
        fontSize: wp(4.5), // 4.5% of screen width
        marginBottom: hp(4), // 4% of screen height
      },
      delivery: {
        fontSize: wp(4), // 4% of screen width
        fontWeight: 'bold',
        marginBottom: hp(5), // 5% of screen height
        color: '#216800'
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: wp(5), // 5% of screen width
      },
      button: {
        paddingVertical: hp(1.5), // 1.5% of screen height
        paddingHorizontal: wp(6), // 6% of screen width
        borderRadius: wp(2), // 2% of screen width
        backgroundColor: '#641E69',
      },
      buttonText: {
        fontSize: wp(4), // 4% of screen width
        color: 'white',
      },
});

export default OrderConfirmation;