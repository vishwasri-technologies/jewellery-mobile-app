import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomNavBar from './BottomNavbar';

const braceletProducts = [
  { id: '1', image: require('../assets/categories/Men-bracelets.png'), name: 'Gold Bracelet', price: '\u20B9150' },
  { id: '2', image: require('../assets/categories/Men-bracelets.png'), name: 'Silver Bracelet', price: '\u20B9120' },
  { id: '3', image: require('../assets/categories/Men-bracelets.png'), name: 'Platinum Bracelet', price: '\u20B9170' },
  { id: '4', image: require('../assets/categories/Men-bracelets.png'), name: 'Titanium Bracelet', price: '\u20B9200' },
  { id: '5', image: require('../assets/categories/Men-bracelets.png'), name: 'Leather Bracelet', price: '\u20B980' },
  { id: '6', image: require('../assets/categories/Men-bracelets.png'), name: 'Chain Bracelet', price: '\u20B9120' },
];

const  KidsRingsScreen = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kids-Rings</Text>
      <FlatList
        data={braceletProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a two-column grid
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.item}>
          <TouchableOpacity onPress={() => toggleWishlist(item.id)} style={styles.wishlistContainer}>
              <Icon
                name="heart" // FontAwesome heart icon
                size={wp(7)}
                color={wishlist[item.id] ? 'red' : 'white'} // Red if selected, white if not
                style={styles.wishlistIcon}
              />
            </TouchableOpacity>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
      <BottomNavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: wp(0),
    paddingTop: hp(5),
  },
  heading: {
    fontSize: wp(6),
    fontWeight: 'bold',
    marginBottom: hp(2),
    marginLeft: wp(4),
    color:"#47154B",
    
  },
  // listContainer: {
  //   paddingHorizontal: wp(2),
  // },
  item: {
    width: wp(46),
    backgroundColor: '#fff',
    borderRadius: wp(2),
    padding: wp(3),
    margin: wp(2),
    alignItems: 'flex-start',
    elevation: 3,
  },
  image: {
    width: wp(40),
    height: wp(50),
    borderRadius: wp(2),
  },
  name: {
    fontSize: wp(4),
    fontWeight: 'bold',
    marginVertical: hp(1),
    textAlign: 'left',
   
  },
  price: {
    fontSize: wp(3.5),
    color: 'gray',
    textAlign:'left',
  },
  wishlistContainer: {
    position: 'absolute',
    top: hp(2),   // Adjusted to be inside the image area
    right: wp(4), // Adjusted position
    zIndex: 10,   // Ensures it appears on top of the image
  },
  wishlistIcon: {
    resizeMode: 'contain',
  },
});

export default KidsRingsScreen;
