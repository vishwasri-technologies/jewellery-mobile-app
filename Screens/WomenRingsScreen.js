import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { Ionicons } from '@expo/vector-icons';

export const womenringProducts = [


  { id: '14', image: require('../assets/categories/Women/Ring-1.png'), name: 'Elegant ring with a twisted, layered structure', price: '\u20B980', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '15', image: require('../assets/categories/Women/Ring-2.png'), name: 'Simple gold colour graceful ring', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '500', image: require('../assets/categories/Women/Ring-3.png'), name: 'Elegant charming ring for women', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '501', image: require('../assets/categories/Women/Ring-4.png'), name: 'Gold plated fingerring', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '502', image: require('../assets/categories/Women/Ring-5.png'), name: 'Women gold toned flower shaped fingerring', price: '\u20B9120', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '503', image: require('../assets/categories/Women/Ring-6.png'), name: 'Bright and shimmering gold plated rings', price: '\u20B9110', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '504', image: require('../assets/categories/Women/Ring-7.png'), name: 'Stunning graceful round fingerring', price: '\u20B9120', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '505', image: require('../assets/categories/Women/Ring-8.png'), name: 'Shimmering elegant rings', price: '\u20B940', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '506', image: require('../assets/categories/Women/Ring-9.png'), name: 'Designer elegant gold colour rings', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },

  

];

const WomenRingsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { searchedProduct } = route.params || {};

  const displayedProducts = searchedProduct
    ? womenringProducts.filter(product => product.name.toLowerCase().includes(searchedProduct.name.toLowerCase()))
    : womenringProducts;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#47154B" />
        </TouchableOpacity>
        <Text style={styles.heading}>Rings</Text>
      </View>
      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
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
      <BottomNavBar />
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
    color: "#47154B",
    marginLeft: wp(5),
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
    height: wp(65),  
  },
  name: {
    fontSize: wp(4),
    fontWeight: '400', 
    marginVertical: hp(0.5),  
    textAlign: 'left',
    alignSelf: 'flex-start', 
    marginLeft: wp(2),  
  },
  price: {
    fontSize: wp(3.8),  
    fontWeight: 'bold',  
    color: 'black',  
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: wp(2),
  },
});

export default WomenRingsScreen;
