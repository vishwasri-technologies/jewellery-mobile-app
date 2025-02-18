import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { useRoute } from '@react-navigation/native';

const womenringProducts = [

  { id: '14', image: require('../assets/categories/Women/Ring-1.png'), name: 'Elegant ring with a twisted, layered structure', price: '\u20B980', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '15', image: require('../assets/categories/Women/Ring-2.png'), name: 'Simple gold colour graceful ring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '500', image: require('../assets/categories/Women/Ring-3.png'), name: 'Elegant charming ring for women', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '501', image: require('../assets/categories/Women/Ring-4.png'), name: 'Gold plated fingerring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '502', image: require('../assets/categories/Women/Ring-5.png'), name: 'Women gold toned flower shaped fingerring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '503', image: require('../assets/categories/Women/Ring-6.png'), name: 'Bright and shimmering gold plated rings', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '504', image: require('../assets/categories/Women/Ring-7.png'), name: 'Stunning graceful round fingerring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '505', image: require('../assets/categories/Women/Ring-8.png'), name: 'Shimmering elegant rings', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '506', image: require('../assets/categories/Women/Ring-9.png'), name: 'Designer elegant gold colour rings', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
];

const  WomenRingsScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
        const { searchedProduct } = route.params || {}; // Get searched product (if available)
      
        // ✅ **If a product was searched, show only that product**
      const displayedProducts = searchedProduct
      ? womenringProducts.filter(product => product.name.toLowerCase().includes(searchedProduct.name.toLowerCase()))
      : womenringProducts;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rings</Text>
      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a two-column grid
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('ProductDetails', {
              product: item,
              allProducts: womenringProducts
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

export default WomenRingsScreen;
