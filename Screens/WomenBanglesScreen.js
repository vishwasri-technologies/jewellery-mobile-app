import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const womenbangleProducts = [

  { id: '102', image: require('../assets/categories/Women/Bangle-3.png'), name: 'Traditional Bangles South Indian Style', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" }, 
   { id: '20', image: require('../assets/categories/Women/Bangle-2.png'), name: 'Unique Gold Plated Women Bangles', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },    
    { id: '30', image: require('../assets/categories/Women/Bangle-6.png'), name: 'Elegant Feather Style Bangles', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
    { id: '40', image: require('../assets/categories/Women/Bangle-15.png'), name: 'Gold-Plated Studded Chuda Bangles ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
    { id: '50', image: require('../assets/categories/Women/Bangle-22.png'), name: 'Beautiful Red Stone Bangles with Pattern Style ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
    { id: '60', image: require('../assets/categories/Women/Bangle-13.png'), name: 'Elegant Bangles with Flower Design ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour" ,category:"Bangles"},
   { id: '70', image: require('../assets/categories/Women/Bangle-20.png'), name: 'White and Gold Stones Bangles Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },

    { id: '80', image: require('../assets/categories/Women/Bangle-18.png'), name: 'Set of 2 Pearls Studded Bangles', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
    { id: '90', image: require('../assets/categories/Women/Bangle-16.png'), name: 'Set Of 4 Gold Stones Chuda Bangles', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
   
    { id: '100', image: require('../assets/categories/Women/Bangle-12.png'), name: 'Set Of 4 Gold Plated Flower Design Bangles', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
  
    { id: '110', image: require('../assets/categories/Women/Bangle-8.png'), name: 'Sparkling Royal Green & Gold Bangle Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Green Colour",category:"Bangles" },

    { id: '120', image: require('../assets/categories/Women/Bangle-9.png'), name: 'Traditional Festive Wear Bangles Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multy Colour",category:"Bangles" },
    { id: '130', image: require('../assets/categories/Women/Bangle-25.png'), name: 'Scarlet Elegance Red Stones Bangles Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Red Colour",category:"Bangles" },

    

];

const WomenBanglesScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
      const { searchedProduct } = route.params || {}; 
    
      // ✅ **If a product was searched, show only that product**
      const displayedProducts = searchedProduct
    ? womenbangleProducts.filter(product => product.name.toLowerCase().includes(searchedProduct.name.toLowerCase()))
    : womenbangleProducts;
  
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#47154B" />
              </TouchableOpacity>
      <Text style={styles.heading}>Bangles</Text>
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
              allProducts: womenbangleProducts
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

export default WomenBanglesScreen;
