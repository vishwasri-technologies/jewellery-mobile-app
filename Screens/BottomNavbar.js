import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('home')}>
        <Icon name="home-outline" size={hp('3%')} color="white" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Wishlist')}>
        <Icon name="heart-outline" size={hp('3%')} color="white" />
        <Text style={styles.navText}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('cart')}>
        <Icon name="cart-outline" size={hp('3%')} color="white" />
        <Text style={styles.navText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('categories')}>
  <Icon name="view-grid" size={hp('3%')} color="white" />
  <Text style={styles.navText}>Categories</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
   
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    backgroundColor: '#47154B',
  },
  navItem: { alignItems: 'center' },
  navText: { marginTop: hp('0.5%'), fontSize: hp('1.5%'), color: 'white' },

});

export default BottomNavBar;
