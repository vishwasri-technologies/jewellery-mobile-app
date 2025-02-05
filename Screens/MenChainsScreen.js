import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';

const chainProducts = [
  { id: '100', image: require('../assets/bracelet.png'), name: 'Gold covering Bracelet', price: '\u20B9190' },
  { id: '2', image: require('../assets/categories/Men-bracelets.png'), name: 'Silver Bracelet', price: '\u20B9120' },
  { id: '3', image: require('../assets/categories/Men-bracelets.png'), name: 'Platinum Bracelet', price: '\u20B9170' },
  { id: '4', image: require('../assets/categories/Men-bracelets.png'), name: 'Titanium Bracelet', price: '\u20B9200' },
  { id: '5', image: require('../assets/categories/Men-bracelets.png'), name: 'Leather Bracelet', price: '\u20B980' },
  { id: '6', image: require('../assets/categories/Men-bracelets.png'), name: 'Chain Bracelet', price: '\u20B9120' },
];

const MenChainsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chains</Text>
      <FlatList
        data={chainProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a two-column grid
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
  container: {
    flex: 1,
    paddingTop: hp(5), // Adjusted padding for better spacing
  },
  heading: {
    fontSize: wp(6), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp(2), // Responsive margin
    marginLeft: wp(4), // Responsive margin
    color: "#47154B",
  },
  listContainer: {
    paddingHorizontal: wp(2), // Added horizontal padding for responsiveness
  },
  item: {
    width: wp(46), // Responsive width for items
    backgroundColor: '#fff',
    borderRadius: wp(2), // Responsive border radius
    padding: wp(3), // Responsive padding
    margin: wp(2), // Responsive margin
    alignItems: 'flex-start',
    elevation: 3,
  },
  image: {
    width: wp(40), // Responsive width for images
    height: wp(50), // Responsive height for images
    borderRadius: wp(2), // Responsive border radius for images
  },
  name: {
    fontSize: wp(4), // Responsive font size
    fontWeight: 'bold',
    marginVertical: hp(1), // Responsive margin
    textAlign: 'left',
  },
  price: {
    fontSize: wp(3.5), // Responsive font size
    color: 'gray',
    textAlign: 'left',
  },
});

export default MenChainsScreen;
