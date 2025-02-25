import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const womenblackbeedProducts = [
  { id: '11', image: require('../assets/categories/Women/Blackbeeds-1.png'), name: 'Divine Grace Lakhmi Mangalsutra', price: '\u20B9499', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '12', image: require('../assets/categories/Women/Blackbeeds-2.png'), name: 'Royal Temple Elegance Mangalsutra', price: '\u20B9399', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '13', image: require('../assets/categories/Women/Blackbeeds-3.png'), name: 'Eternal Charm Lakshmi Mangalsutra', price: '\u20B9499', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
];

const WomenBlackBeedsScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
        const { searchedProduct } = route.params || {}; // Get searched product (if available)
      
        // ✅ **If a product was searched, show only that product**
      const displayedProducts = searchedProduct
      ? womenblackbeedProducts.filter(product => product.name.toLowerCase().includes(searchedProduct.name.toLowerCase()))
      : womenblackbeedProducts;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#47154B" />
        </TouchableOpacity>
      <Text style={styles.heading}>Black Beads</Text>
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
              allProducts: womenblackbeedProducts
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
    color:"#47154B",
    
  },
 
  item: {
    width: wp(46),
   padding: wp(3),
    margin: wp(2),
    alignItems: 'flex-start',
   
  },
  image: {
    width: wp(42),
    height: wp(50),
    
  },
  name: {
    fontSize: wp(4),
    marginVertical: hp(1),
    textAlign: 'left',
   
  },
  price: {
    fontSize: wp(3.8),
    color: 'black',
    textAlign:'left',
    fontWeight: 'bold',
  },
 
});

export default WomenBlackBeedsScreen;
