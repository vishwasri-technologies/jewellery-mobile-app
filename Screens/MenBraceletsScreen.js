






import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';

const braceletProducts = [
  { id: '1', image: require('../assets/categories/Men-bracelets.png'), name: 'Gold Bracelet', price: '₹150' },
  { id: '2', image: require('../assets/categories/Men-bracelets.png'), name: 'Silver Bracelet', price: '₹120' },
  { id: '3', image: require('../assets/categories/Men-bracelets.png'), name: 'Platinum Bracelet', price: '₹170' },
  { id: '4', image: require('../assets/categories/Men-bracelets.png'), name: 'Titanium Bracelet', price: '₹200' },
  { id: '5', image: require('../assets/categories/Men-bracelets.png'), name: 'Leather Bracelet', price: '₹80' },
  { id: '6', image: require('../assets/categories/Men-bracelets.png'), name: 'Chain Bracelet', price: '₹120' },
];

const MenBraceletsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bracelets</Text>
      <FlatList
        data={braceletProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Heart Icon Component */}
            <HeartIcon item={item} />

            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: hp('2%') }, // Responsive padding top
  heading: { 
    fontSize: wp('6%'), // Responsive font size
    fontWeight: 'bold', 
    marginBottom: hp('2%'), // Responsive margin
    marginLeft: wp('4%'), 
    color: "#47154B", 
    marginTop: hp('4%'),
  },
  item: { 
    width: '46%', 
    backgroundColor: '#fff', 
    borderRadius: wp('2%'), // Responsive border radius
    padding: wp('3%'), // Responsive padding
    margin: '2%', 
    alignItems: 'center', 
    elevation: 3 
  },
  image: { 
    width: wp('45%'), // Responsive image width
    height: hp('18%'), // Responsive image height
    borderRadius: wp('2%'), // Responsive border radius
  },
  name: { 
    fontSize: wp('4%'), // Responsive font size
    fontWeight: 'bold', 
    marginVertical: hp('1%'), // Responsive margin
    textAlign: 'center' 
  },
  price: { 
    fontSize: wp('3.5%'), // Responsive font size
    color: 'gray', 
    textAlign: 'center' 
  },
});

export default MenBraceletsScreen;
