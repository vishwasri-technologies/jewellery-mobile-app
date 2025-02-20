import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const womenchainProducts = [
  { id: '18', image: require('../assets/categories/Women/Chain-1.png'), name: 'Simple Plain Gold Colour Chains', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '19', image: require('../assets/categories/Women/Chain-2.png'), name: 'Elegant Gold Plated Chain ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '509', image: require('../assets/categories/Women/Chain-3.png'), name: 'Beautiful Glittering Gold Plated Chains', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '510', image: require('../assets/categories/Women/Chain-main.png'), name: 'Women Pendant Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '511', image: require('../assets/categories/Mens/Men-Chains.png'), name: 'Gold Colour Simple Chain With Pendant', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '512', image: require('../assets/categories/Women/Chain-4.png'), name: 'Women Chain With Simple Pendant ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },

];

const WomenChainsScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
        const { searchedProduct } = route.params || {}; // Get searched product (if available)
      
        // ✅ **If a product was searched, show only that product**
      const displayedProducts = searchedProduct
      ? womenchainProducts.filter(product => product.name.toLowerCase().includes(searchedProduct.name.toLowerCase()))
      : womenchainProducts;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#47154B" />
        </TouchableOpacity>
      <Text style={styles.heading}>Chains</Text>
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
              allProducts: womenchainProducts
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

export default WomenChainsScreen;
