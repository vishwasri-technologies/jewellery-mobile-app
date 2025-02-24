import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

 export const womenearringsProducts = [
  { id: '131', image: require('../assets/categories/Women/Ear-1.png'), name: 'Golden Grace Chandbalis Earrings', price: '\u20B9399', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & White Colour",category:"Ear Rings" },
  { id: '140', image: require('../assets/categories/Women/Ear-2.png'), name: 'Floral Elegance Ruby Sparkle Earrings', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multi colour",category:"Ear Rings" },
  { id: '150', image: require('../assets/categories/Women/Ear-3.png'), name: 'Ethnic Multicolor Mosaic Jhumkas Earrings', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multi colour",category:"Ear Rings" },
  { id: '160', image: require('../assets/categories/Women/Ear-4.png'), name: 'Gold and Red Colour Charm Earrings', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Red Colour",category:"Ear Rings" },
  { id: '170', image: require('../assets/categories/Women/Ear-5.png'), name: 'Silver-Plated Oxidized Jhumkas Earrings', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Ear Rings" },
  { id: '180', image: require('../assets/categories/Women/Ear-6.png'), name: 'Elegant Gold-Plated Jhumka Earrings with Stones ', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '190', image: require('../assets/categories/Women/Ear-7.png'), name: 'Gold Plated Lakshmi Pearl Stone Earrings', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '200', image: require('../assets/categories/Women/Ear-8.png'), name: 'Royal Elegance Earrings With Pink Stones', price: '\u20B9599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Pink Colour",category:"Ear Rings" },
  { id: '210', image: require('../assets/categories/Women/Ear-9.png'), name: 'Black Shine Elegant Jhumkas Earrings', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver & Back Colour",category:"Ear Rings" },
  { id: '220', image: require('../assets/categories/Women/Ear-10.png'), name: 'Regal Peacock Pearl Jhumkas', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '230', image: require('../assets/categories/Women/Ear-11.png'), name: 'Emerald Green and Pink Gold Plated Jhumkas', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Green Colour",category:"Ear Rings" },
  { id: '240', image: require('../assets/categories/Women/Ear-12.png'), name: 'Lakshmi Pearl Temple Earrings', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '250', image: require('../assets/categories/Women/Ear-13.png'), name: 'Vintage Glow Chandbalis Earrings', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '260', image: require('../assets/categories/Women/Ear-14.png'), name: 'Crystal Dazzling Stiletto Earrings', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '270', image: require('../assets/categories/Women/Ear-15.png'), name: 'Oxidized White & Gold Stones Earrings', price: '\u20B9180', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Ear Rings" },
  { id: '280', image: require('../assets/categories/Women/Ear-16.png'), name: 'Curved Heart Shape Stone Earrings', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '290', image: require('../assets/categories/Women/Ear-17.png'), name: 'Flower Shaped Stones stud Earrings', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '300', image: require('../assets/categories/Women/Ear-18.png'), name: 'Gold-plated Round Stone Earrings ', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '310', image: require('../assets/categories/Women/Ear-19.png'), name: 'Simple Elegant Heart Shaped Earrings', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '320', image: require('../assets/categories/Women/Ear-20.png'), name: 'Golden Antique Charm Jhumkas', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '507', image: require('../assets/categories/Women/Ear-21.png'), name: 'Royal Dewdrop Gold Plated Earrings', price: '\u20B9599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '508', image: require('../assets/categories/Women/Ear-22.png'), name: 'Classic Pearl Radiance Stud Earrings', price: '\u20B940', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Red & White Colour",category:"Ear Rings" },
];

const WomenEarRingsScreen = () => {

  const navigation = useNavigation();

  const route = useRoute();
    const { searchedProduct } = route.params || {}; // Get searched product (if available)
  
    // ✅ **If a product was searched, show only that product**
    const displayedProducts = searchedProduct
    ? womenearringsProducts.filter(product => product.name.toLowerCase().includes(searchedProduct.name.toLowerCase()))
    : womenearringsProducts;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#47154B" />
              </TouchableOpacity>
      <Text style={styles.heading}>EarRings</Text>
      </View>
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
              allProducts: womenearringsProducts
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginBottom: hp(2),
  },
  heading: {
    fontSize: wp(6),
    fontWeight: 'bold',
   
    marginLeft: wp(5),
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

export default WomenEarRingsScreen;

