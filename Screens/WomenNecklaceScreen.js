import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';


const womensnecklaceProducts = [
  { id: '20', image: require('../assets/categories/Women/Necklace-1.png'), name: 'Gold Bracelet', price: '\u20B9150' },
  { id: '21', image: require('../assets/categories/Women/Necklace-2.png'), name: 'Silver Bracelet', price: '\u20B9120' },
  { id: '22', image: require('../assets/categories/Women/Necklace-3.png'), name: 'Platinum Bracelet', price: '\u20B9170' },
  { id: '23', image: require('../assets/categories/Women/Necklace-4.png'), name: 'Titanium Bracelet', price: '\u20B9200' },
  { id: '24', image: require('../assets/categories/Women/Necklace-5.png'), name: 'Leather Bracelet', price: '\u20B980' },
  { id: '25', image: require('../assets/categories/Women/Necklace-6.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '26', image: require('../assets/categories/Women/Necklace-7.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '27', image: require('../assets/categories/Women/Necklace-8.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '28', image: require('../assets/categories/Women/Necklace-9.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '29', image: require('../assets/categories/Women/Necklace-10.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '30', image: require('../assets/categories/Women/Necklace-11.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '31', image: require('../assets/categories/Women/Necklace-12.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '32', image: require('../assets/categories/Women/Necklace-13.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '33', image: require('../assets/categories/Women/Necklace-14.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '34', image: require('../assets/categories/Women/Necklace-15.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '35', image: require('../assets/categories/Women/Necklace-16.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '36', image: require('../assets/categories/Women/Necklace-17.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '37', image: require('../assets/categories/Women/Necklace-18.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '38', image: require('../assets/categories/Women/Necklace-19.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '39', image: require('../assets/categories/Women/Necklace-20.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '401', image: require('../assets/categories/Women/Necklace-21.png'), name: 'Chain Bracelet', price: '\u20B9120' },
];

const WomenNecklaceScreen = () => {
 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Necklace</Text>
      <FlatList
        data={womensnecklaceProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a two-column grid
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('ProductDetails', {
              product: item,
            })}
          >
            <HeartIcon item={item} />

            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <BottomNavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(5),
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: wp(6),
    fontWeight: 'bold',
    marginBottom: hp(2),
    marginLeft: wp(4),
    color: "#47154B",
  },
  item: {
    width: wp(46),
    borderRadius: wp(2),
    padding: wp(0),
    margin: wp(2),
    alignItems: 'center',
  },
  image: {
    width: wp(47),
    height: wp(65),  // Increased height
  },
  name: {
    fontSize: wp(4),
    fontWeight: '400',  // Reduced thickness
    marginVertical: hp(0.5),  // Reduced space
    textAlign: 'left',
    alignSelf: 'flex-start',  // Align to the left
    marginLeft: wp(2),  // Small left margin for spacing
  },
  price: {
    fontSize: wp(3.8),  // Slightly increased size
    fontWeight: 'bold',  // Increased thickness
    color: 'black',  // Changed to black
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: wp(2),
  },

});

export default WomenNecklaceScreen;
