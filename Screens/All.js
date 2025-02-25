import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { Ionicons } from "@expo/vector-icons"; 


const allProducts = [
  
  { id: '600', image: require('../assets/categories/Women/Ring-1.png'), name: 'Elegant ring with a twisted, layered structure', price: '\u20B980', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
{ id: '601', image: require('../assets/categories/Women/Bracelet-1.png'), name: 'Pastel Colour Stones Bracelet', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "White Colour",category:"Bracelets" },
    { id: '602', image: require('../assets/categories/Women/Bangle-3.png'), name: 'Traditional Bangles South Indian Style', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
  { id: '603', image: require('../assets/categories/Women/Necklace-34.png'), name: 'Gold-Plated Divine Lakshmi Motif Temple Jewellery Set ', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '604', image: require('../assets/categories/Women/Ear-1.png'), name: 'Golden Grace Chandbalis Earrings', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & White Colour",category:"Ear Rings" },
  { id: '605', image: require('../assets/categories/Women/Blackbeeds-2.png'), name: 'Royal Temple Elegance Mangalsutra', price: '\u20B9399', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '606', image: require('../assets/categories/Women/Chain-1.png'), name: 'Simple Plain Gold Colour Chains(Single Piece )', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '607', image: require('../assets/categories/Women/Necklace-8.png'), name: 'Gold Plated Ruby Kundan Studded Jewellery Set', price: '\u20B9599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '608', image: require('../assets/categories/Women/Ear-14.png'), name: 'Crystal Dazzling Stiletto Earrings', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '609', image: require('../assets/categories/Women/Ear-15.png'), name: 'Oxidized White & Gold Stones Earrings', price: '\u20B9180', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Ear Rings" },
  { id: '610', image: require('../assets/categories/Women/Ring-2.png'), name: 'Simple gold colour graceful ring', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '611', image: require('../assets/categories/Women/Bangle-2.png'), name: 'Unique Gold Plated Women Bangles', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" }, 
  { id: '612', image: require('../assets/categories/Women/Ear-2.png'), name: 'Floral Elegance Ruby Sparkle Earrings', price: '\u20B9349', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multi colour",category:"Ear Rings" },
  { id: '613', image: require('../assets/categories/Women/Blackbeeds-1.png'), name: 'Divine Grace Lakhmi Mangalsutra', price: '\u20B9450', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '614', image: require('../assets/categories/Women/Chain-2.png'), name: 'Elegant Gold Plated Chain ', price: '\u20B9399', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '615', image: require('../assets/categories/Women/Ear-16.png'), name: 'Curved Heart Shape Stone Earrings', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '616', image: require('../assets/categories/Women/Ear-17.png'), name: 'Flower Shaped Stones stud Earrings', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '617', image: require('../assets/categories/Women/Necklace-19.png'), name: 'Gold Plated Pearl Stones Neclace', price: '\u20B92999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour" ,category:"Necklace"},
  { id: '618', image: require('../assets/categories/Women/Ring-3.png'), name: 'Elegant charming ring for women', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '619', image: require('../assets/categories/Women/Ear-12.png'), name: 'Lakshmi Pearl Temple Earrings', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '620', image: require('../assets/categories/Women/Ear-13.png'), name: 'Vintage Glow Chandbalis Earrings', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '621', image: require('../assets/categories/Women/Bangle-6.png'), name: 'Elegant Feather Style Bangles', price: '\u20B9359', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
  { id: '622', image: require('../assets/categories/Women/Ear-21.png'), name: 'Royal Dewdrop Gold Plated Earrings', price: '\u20B9599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '623', image: require('../assets/categories/Women/Ear-22.png'), name: 'Classic Pearl Radiance Stud Earrings', price: '\u20B940', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Red & White Colour",category:"Ear Rings" },
   { id: '624', image: require('../assets/categories/Women/Chain-3.png'), name: 'Beautiful Glittering Gold Plated Chains', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '625', image: require('../assets/categories/Women/Ring-4.png'), name: 'Gold plated fingerring', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '626', image: require('../assets/categories/Women/Necklace-23.png'), name: 'Gold Flower Shaped With Pink Stone Necklace', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '627', image: require('../assets/categories/Women/Ear-18.png'), name: 'Gold-plated Round Stone Earrings ', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '628', image: require('../assets/categories/Women/Chain-main.png'), name: 'Women Pendant Necklace', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '629', image: require('../assets/categories/Women/Ear-19.png'), name: 'Simple Elegant Heart Shaped Earrings', price: '\u20B9219', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '630', image: require('../assets/categories/Mens/Men-Chains.png'), name: 'Gold Colour Simple Chain With Pendant', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '631', image: require('../assets/categories/Women/Ring-5.png'), name: 'Women gold toned flower shaped fingerring', price: '\u20B9159', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '632', image: require('../assets/categories/Women/Chain-4.png'), name: 'Women Chain With Simple Pendant ', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '633', image: require('../assets/categories/Women/Bangle-12.png'), name: 'Set Of 4 Gold Plated Flower Design Bangles', price: '\u20B9399', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
    { id: '634', image: require('../assets/categories/Women/Ear-3.png'), name: 'Ethnic Multicolor Mosaic Jhumkas Earrings', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multi colour",category:"Ear Rings" },
  { id: '635', image: require('../assets/categories/Women/Bangle-20.png'), name: 'White and Gold Stones Bangles Set', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
  { id: '636', image: require('../assets/categories/Women/Necklace-27.png'), name: 'Princess Unique Jewellery Sets With Earrings ', price: '\u20B91799', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '637', image: require('../assets/categories/Women/Ring-6.png'), name: 'Bright and shimmering gold plated rings', price: '\u20B9199', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '638', image: require('../assets/categories/Women/Necklace-22.png'), name: 'Simple Necklace And Earring Set For Women', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '639', image: require('../assets/categories/Women/Ring-7.png'), name: 'Stunning graceful round fingerring', price: '\u20B9120', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '640', image: require('../assets/categories/Women/Ear-20.png'), name: 'Golden Antique Charm Jhumkas', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '641', image: require('../assets/categories/Women/Ring-8.png'), name: 'Shimmering elegant rings', price: '\u20B940', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },

{ id: '642', image: require('../assets/categories/Women/Ear-4.png'), name: 'Gold and Red Colour Charm Earrings', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Red Colour",category:"Ear Rings" },
  { id: '643', image: require('../assets/categories/Women/Bangle-8.png'), name: 'Sparkling Royal Green & Gold Bangle Set', price: '\u20B9120', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Green Colour",category:"Bangles" },
{ id: '644', image: require('../assets/categories/Women/Bangle-9.png'), name: 'Traditional Festive Wear Bangles Set', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multy Colour",category:"Bangles" },
  { id: '645', image: require('../assets/categories/Women/Necklace-16.png'), name: 'Gold Plated Stones Necklace With Earrings', price: '\u20B91699', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '646', image: require('../assets/categories/Women/Necklace-17.png'), name: 'Elegant Oxidized Jewellery Set ', price: '\u20B9799', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Necklace" },
  { id: '647', image: require('../assets/categories/Women/Bangle-25.png'), name: 'Scarlet Elegance Red Stones Bangles Set', price: '\u20B9399', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Red Colour",category:"Bangles" },
  { id: '648', image: require('../assets/categories/Women/Ear-5.png'), name: 'Silver-Plated Oxidized Jhumkas Earrings', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Ear Rings" },
  { id: '649', image: require('../assets/categories/Women/Necklace-15.png'), name: 'Gold Colour Red & Green Stones Necklace', price: '\u20B9780', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '650', image: require('../assets/categories/Women/Ear-6.png'), name: 'Elegant Gold-Plated Jhumka Earrings with Stones ', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '651', image: require('../assets/categories/Women/Necklace-6.png'), name: 'Golden Blossom Heritage Necklace ', price: '\u20B91899', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '652', image: require('../assets/categories/Women/Necklace-7.png'), name: 'Elegant gold-plated Pearl Stone Design Necklace', price: '\u20B9699', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '653', image: require('../assets/categories/Women/Ear-7.png'), name: 'Gold Plated Lakshmi Pearl Stone Earrings', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '654', image: require('../assets/categories/Women/Necklace-1.png'), name: 'Royal Temple Gold Plated Haram Set', price: '\u20B91599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '655', image: require('../assets/categories/Women/Ear-8.png'), name: 'Royal Elegance Earrings With Pink Stones', price: '\u20B9599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Pink Colour",category:"Ear Rings" },
  { id: '656', image: require('../assets/categories/Women/Ear-9.png'), name: 'Black Shine Elegant Jhumkas Earrings', price: '\u20B9199', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver & Back Colour",category:"Ear Rings" },
  { id: '657', image: require('../assets/categories/Women/Ear-10.png'), name: 'Regal Peacock Pearl Jhumkas', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '658', image: require('../assets/categories/Women/Ear-11.png'), name: 'Emerald Green and Pink Gold Plated Jhumkas', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Green Colour",category:"Ear Rings" },
{ id: '659', image: require('../assets/categories/Women/Necklace-31.png'), name: 'Necklace And Earring Set For Women', price: '\u20B91999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
{ id: '660', image: require('../assets/categories/Women/Bangle-18.png'), name: 'Set of 2 Pearls Studded Bangles', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
  { id: '661', image: require('../assets/categories/Women/Necklace-30.png'), name: 'Gold-Toned & Pearl Stones Jewellery Set', price: '\u20B91699', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '662', image: require('../assets/categories/Women/Necklace-24.png'), name: 'Gold-Plated Divine Lakshmi Motif Temple Jewellery Set ', price: '\u20B91599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '663', image: require('../assets/categories/Women/Necklace-25.png'), name: 'Gold Plated Simple Long Necklace For Women', price: '\u20B9699', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '664', image: require('../assets/categories/Women/Necklace-26.png'), name: 'Gold-Plated Stone-Studded & Beaded Jewellery Set', price: '\u20B9799', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '665', image: require('../assets/categories/Women/Blackbeeds-3.png'), name: 'Eternal Charm Lakshmi Mangalsutra', price: '\u20B9499', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '666', image: require('../assets/categories/Women/Necklace-21.png'), name: 'Gold Plated Green Colour Choker Neckset', price: '\u20B9399', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Green Colour",category:"Necklace" },
  
  { id: '667', image: require('../assets/categories/Women/Bangle-13.png'), name: 'Elegant Bangles with Flower Design ', price: '\u20B9599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour" ,category:"Bangles"},
  { id: '668', image: require('../assets/categories/Women/Necklace-32.png'), name: 'Gold Flower Shaped With Pink Stone Necklace', price: '\u20B91999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '669', image: require('../assets/categories/Women/Necklace-36.png'), name: 'South Indian Bridal Double Necklace Jewellery Set ', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '670', image: require('../assets/categories/Women/Necklace-12.png'), name: 'Shimmering Elegant Jewellery Women Neckset ', price: '\u20B91599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
{ id: '671', image: require('../assets/categories/Women/Bangle-15.png'), name: 'Gold-Plated Studded Chuda Bangles ', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
    { id: '672', image: require('../assets/categories/Women/Necklace-18.png'), name: 'Elegant Gold-Plated Peach Colour Neckset ', price: '\u20B9999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Peach Colour",category:"Necklace" },
    { id: '673', image: require('../assets/categories/Women/Bangle-22.png'), name: 'Beautiful Red Stone Bangles with Pattern Style ', price: '\u20B9499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },

    { id: '674', image: require('../assets/categories/Women/Necklace-10.png'), name: 'Royal Princess Unique Jewellery Sets', price: '\u20B92999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
    { id: '675', image: require('../assets/categories/Women/Necklace-13.png'), name: 'Gold-Plated White Stone-Studded & Beaded Necklace', price: '\u20B91999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
    { id: '676', image: require('../assets/categories/Women/Necklace-14.png'), name: 'Gold-Plated Plear Stone-Studded Necklace', price: '\u20B9780', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
    { id: '677', image: require('../assets/categories/Women/Bangle-16.png'), name: 'Set Of 4 Gold Stones Chuda Bangles', price: '\u20B9299', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
    { id: '678', image: require('../assets/categories/Women/Necklace-29.png'), name: 'Fancy jewellery set for women and girls', price: '\u20B93999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Blue Colour",category:"Necklace" },
    { id: '679', image: require('../assets/categories/Women/Necklace-9.png'), name: 'Elite Beautiful Jewellery Set With Pearls', price: '\u20B92499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
   { id: '680', image: require('../assets/categories/Women/Necklace-20.png'), name: 'Gold-Plated Studded Temple Jewellery Set', price: '\u20B9780', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '681', image: require('../assets/categories/Women/Necklace-28.png'), name: 'Simple Necklace And Earring Set For Women', price: '\u20B9399', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '682', image: require('../assets/categories/Women/Necklace-2.png'), name: 'Pearl Temple Necklace', price: '\u20B92999', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '683', image: require('../assets/categories/Women/Necklace-3.png'), name: 'Royal Sapphire Choker Set', price: '\u20B9599', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Blue Colour",category:"Necklace" },
  { id: '684', image: require('../assets/categories/Women/Necklace-4.png'), name: 'Golden Grace Peacock Necklace', price: '\u20B91499', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '685', image: require('../assets/categories/Women/Necklace-5.png'), name: 'Grand Lakshmi Pearl Long Haram', price: '\u20B9899', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '686', image: require('../assets/categories/Women/Ring-9.png'), name: 'Designer elegant gold colour rings', price: '\u20B980', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  
];

const All= () => {
 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={wp(6)} color="#47154B" />
        </TouchableOpacity>
      <Text style={styles.heading}>Explore</Text>
      </View>
      <FlatList
        data={allProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a two-column grid
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('ProductDetails', {
              product: item,
              allProducts: allProducts
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
    marginBottom: hp(2),
  },
  backButton: {
    padding: wp(4),
   paddingLeft:wp(0),
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

export default All;
