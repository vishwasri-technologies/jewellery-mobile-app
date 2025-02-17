import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { useRoute } from '@react-navigation/native';


const womensnecklaceProducts = [


  { id: '20', image: require('../assets/categories/Women/Necklace-1.png'), name: 'Royal Temple Gold Plated Haram Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '21', image: require('../assets/categories/Women/Necklace-2.png'), name: 'Pearl Temple Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '22', image: require('../assets/categories/Women/Necklace-3.png'), name: 'Royal Sapphire Choker Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Blue Colour",category:"Necklace" },
  { id: '23', image: require('../assets/categories/Women/Necklace-4.png'), name: 'Golden Grace Peacock Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '24', image: require('../assets/categories/Women/Necklace-5.png'), name: 'Grand Lakshmi Pearl Long Haram', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '25', image: require('../assets/categories/Women/Necklace-6.png'), name: 'Golden Blossom Heritage Necklace ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '26', image: require('../assets/categories/Women/Necklace-7.png'), name: 'Elegant gold-plated Pearl Stone Design Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '27', image: require('../assets/categories/Women/Necklace-8.png'), name: 'Gold Plated Ruby Kundan Studded Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '28', image: require('../assets/categories/Women/Necklace-9.png'), name: 'Elite Beautiful Jewellery Set With Pearls', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '29', image: require('../assets/categories/Women/Necklace-10.png'), name: 'Royal Princess Unique Jewellery Sets', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  // { id: '30', image: require('../assets/categories/Women/Necklace-11.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '30', image: require('../assets/categories/Women/Necklace-12.png'), name: 'Shimmering Elegant Jewellery Women Neckset ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '31', image: require('../assets/categories/Women/Necklace-13.png'), name: 'Gold-Plated White Stone-Studded & Beaded Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '32', image: require('../assets/categories/Women/Necklace-14.png'), name: 'Gold-Plated Plear Stone-Studded Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '33', image: require('../assets/categories/Women/Necklace-15.png'), name: 'Gold Colour Red & Green Stones Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '34', image: require('../assets/categories/Women/Necklace-16.png'), name: 'Gold Plated Stones Necklace With Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '35', image: require('../assets/categories/Women/Necklace-17.png'), name: 'Elegant Oxidized Jewellery Set ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Necklace" },
  { id: '36', image: require('../assets/categories/Women/Necklace-18.png'), name: 'Elegant Gold-Plated Peach Colour Neckset ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Peach Colour",category:"Necklace" },
  { id: '37', image: require('../assets/categories/Women/Necklace-19.png'), name: 'Gold Plated Pearl Stones Neclace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour" ,category:"Necklace"},
  { id: '38', image: require('../assets/categories/Women/Necklace-20.png'), name: 'Gold-Plated Studded Temple Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '401', image: require('../assets/categories/Women/Necklace-21.png'), name: 'Gold Plated Green Colour Choker Neckset', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Green Colour",category:"Necklace" },
  { id: '513', image: require('../assets/categories/Women/Necklace-29.png'), name: 'Fancy jewellery set for women and girls', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Blue Colour",category:"Necklace" },
  { id: '514', image: require('../assets/categories/Women/Necklace-32.png'), name: 'Gold Flower Shaped With Pink Stone Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '515', image: require('../assets/categories/Women/Necklace-36.png'), name: 'South Indian Bridal Double Necklace Jewellery Set ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '516', image: require('../assets/categories/Women/Necklace-33.png'), name: 'Temple Style Green Beads Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Green Colour",category:"Necklace" },
  { id: '517', image: require('../assets/categories/Women/Necklace-35.png'), name: 'Temple Style Red Beads Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Red Colour",category:"Necklace" },
  { id: '518', image: require('../assets/categories/Women/Necklace-34.png'), name: 'Princess Unique Jewellery Sets With Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '519', image: require('../assets/categories/Women/Necklace-22.png'), name: 'Simple Necklace And Earring Set For Women', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '520', image: require('../assets/categories/Women/Necklace-28.png'), name: 'Ethnic Golden Color Designer Pendent Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '521', image: require('../assets/categories/Women/Necklace-27.png'), name: 'New Designer Lakshmi Pendant Jewellery Set ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '522', image: require('../assets/categories/Women/Necklace-23.png'), name: 'Terndy Gold Plated Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '523', image: require('../assets/categories/Women/Necklace-31.png'), name: 'Necklace And Earring Set For Women', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '524', image: require('../assets/categories/Women/Necklace-30.png'), name: 'Gold-Toned & Pearl Stones Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '525', image: require('../assets/categories/Women/Necklace-24.png'), name: 'Gold-Plated Divine Lakshmi Motif Temple Jewellery Set ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '526', image: require('../assets/categories/Women/Necklace-25.png'), name: 'Gold Plated Simple Long Necklace For Women', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '527', image: require('../assets/categories/Women/Necklace-26.png'), name: 'Gold-Plated Stone-Studded & Beaded Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },

];

const WomenNecklaceScreen = () => {
 const navigation = useNavigation();

 const route = useRoute();
       const { searchedProduct } = route.params || {}; // Get searched product (if available)
     
       // ✅ **If a product was searched, show only that product**
      const displayedProducts = searchedProduct
      ? womensnecklaceProducts.filter(product => product.name.toLowerCase().includes(searchedProduct.name.toLowerCase()))
      : womensnecklaceProducts;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Necklace</Text>
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
              allProducts: womensnecklaceProducts
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
