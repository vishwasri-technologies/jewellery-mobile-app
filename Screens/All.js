import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';


const allProducts = [
  {
    id: "7",

    image: require("../assets/bracelet.png"),
    category: 'Chains',

    image: require('../assets/categories/Mens/Men-Chains.png'),

    name: "Gold Colour Simple Chain With Pendant",
    price: "\u20B9190",
    material: "Gold",
    care: "Clean with a soft, dry cloth",
    colour: "Gold Colour"
  },
  { id: '14', image: require('../assets/categories/Women/Ring-1.png'), name: 'Elegant ring with a twisted, layered structure', price: '\u20B980', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },

  { id: '16', image: require('../assets/categories/Women/Bracelet-1.png'), name: 'Pastel Colour Stones Bracelet', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "White Colour",category:"Bracelets" },
    
  { id: '102', image: require('../assets/categories/Women/Bangle-3.png'), name: 'Traditional Bangles South Indian Style', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Bangles" },
  { id: '131', image: require('../assets/categories/Women/Ear-1.png'), name: 'Golden Grace Chandbalis Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & White Colour",category:"Ear Rings" },
  { id: '12', image: require('../assets/categories/Women/Blackbeeds-2.png'), name: 'Royal Temple Elegance Mangalsutra', price: '\u20B9300', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '18', image: require('../assets/categories/Women/Chain-1.png'), name: 'Simple Plain Gold Colour Chains', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '27', image: require('../assets/categories/Women/Necklace-8.png'), name: 'Gold Plated Ruby Kundan Studded Jewellery Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '15', image: require('../assets/categories/Women/Ring-2.png'), name: 'Simple gold colour graceful ring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '500', image: require('../assets/categories/Women/Ring-3.png'), name: 'Elegant charming ring for women', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '501', image: require('../assets/categories/Women/Ring-4.png'), name: 'Gold plated fingerring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '502', image: require('../assets/categories/Women/Ring-5.png'), name: 'Women gold toned flower shaped fingerring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '503', image: require('../assets/categories/Women/Ring-6.png'), name: 'Bright and shimmering gold plated rings', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '504', image: require('../assets/categories/Women/Ring-7.png'), name: 'Stunning graceful round fingerring', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '505', image: require('../assets/categories/Women/Ring-8.png'), name: 'Shimmering elegant rings', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },
  { id: '506', image: require('../assets/categories/Women/Ring-9.png'), name: 'Designer elegant gold colour rings', price: '\u20B9300', material: "Copper",care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Rings" },

  { id: '140', image: require('../assets/categories/Women/Ear-2.png'), name: 'Floral Elegance Ruby Sparkle Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multi colour",category:"Ear Rings" },
  { id: '150', image: require('../assets/categories/Women/Ear-3.png'), name: 'Ethnic Multicolor Mosaic Jhumkas Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Multi colour",category:"Ear Rings" },
  { id: '160', image: require('../assets/categories/Women/Ear-4.png'), name: 'Gold and Red Colour Charm Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Red Colour",category:"Ear Rings" },
  { id: '170', image: require('../assets/categories/Women/Ear-5.png'), name: 'Silver-Plated Oxidized Jhumkas Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Ear Rings" },
  { id: '180', image: require('../assets/categories/Women/Ear-6.png'), name: 'Elegant Gold-Plated Jhumka Earrings with Stones ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '190', image: require('../assets/categories/Women/Ear-7.png'), name: 'Gold Plated Lakshmi Pearl Stone Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '200', image: require('../assets/categories/Women/Ear-8.png'), name: 'Royal Elegance Earrings With Pink Stones', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Pink Colour",category:"Ear Rings" },
  { id: '210', image: require('../assets/categories/Women/Ear-9.png'), name: 'Black Shine Elegant Jhumkas Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver & Back Colour",category:"Ear Rings" },
  { id: '220', image: require('../assets/categories/Women/Ear-10.png'), name: 'Regal Peacock Pearl Jhumkas', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '230', image: require('../assets/categories/Women/Ear-11.png'), name: 'Emerald Green and Pink Gold Plated Jhumkas', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold & Green Colour",category:"Ear Rings" },
  { id: '240', image: require('../assets/categories/Women/Ear-12.png'), name: 'Lakshmi Pearl Temple Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '250', image: require('../assets/categories/Women/Ear-13.png'), name: 'Vintage Glow Chandbalis Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '260', image: require('../assets/categories/Women/Ear-14.png'), name: 'Crystal Dazzling Stiletto Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '270', image: require('../assets/categories/Women/Ear-15.png'), name: 'Oxidized White & Gold Stones Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Silver Colour",category:"Ear Rings" },
  { id: '280', image: require('../assets/categories/Women/Ear-16.png'), name: 'Curved Heart Shape Stone Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '290', image: require('../assets/categories/Women/Ear-17.png'), name: 'Flower Shaped Stones stud Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '300', image: require('../assets/categories/Women/Ear-18.png'), name: 'Gold-plated Round Stone Earrings ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '310', image: require('../assets/categories/Women/Ear-19.png'), name: 'Simple Elegant Heart Shaped Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '320', image: require('../assets/categories/Women/Ear-20.png'), name: 'Golden Antique Charm Jhumkas', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '507', image: require('../assets/categories/Women/Ear-21.png'), name: 'Royal Dewdrop Gold Plated Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Ear Rings" },
  { id: '508', image: require('../assets/categories/Women/Ear-22.png'), name: 'Classic Pearl Radiance Stud Earrings', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Red & White Colour",category:"Ear Rings" },

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
   
    { id: '11', image: require('../assets/categories/Women/Blackbeeds-1.png'), name: 'Divine Grace Lakhmi Mangalsutra', price: '\u20B9300', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },

  { id: '13', image: require('../assets/categories/Women/Blackbeeds-3.png'), name: 'Eternal Charm Lakshmi Mangalsutra', price: '\u20B9300', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  
  { id: '20', image: require('../assets/categories/Women/Necklace-1.png'), name: 'Royal Temple Gold Plated Haram Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '21', image: require('../assets/categories/Women/Necklace-2.png'), name: 'Pearl Temple Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '22', image: require('../assets/categories/Women/Necklace-3.png'), name: 'Royal Sapphire Choker Set', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Blue Colour",category:"Necklace" },
  { id: '23', image: require('../assets/categories/Women/Necklace-4.png'), name: 'Golden Grace Peacock Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '24', image: require('../assets/categories/Women/Necklace-5.png'), name: 'Grand Lakshmi Pearl Long Haram', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '25', image: require('../assets/categories/Women/Necklace-6.png'), name: 'Golden Blossom Heritage Necklace ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '26', image: require('../assets/categories/Women/Necklace-7.png'), name: 'Elegant gold-plated Pearl Stone Design Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },

  { id: '28', image: require('../assets/categories/Women/Necklace-9.png'), name: 'Elite Beautiful Jewellery Set With Pearls', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },
  { id: '29', image: require('../assets/categories/Women/Necklace-10.png'), name: 'Royal Princess Unique Jewellery Sets', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Necklace" },

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

  { id: '19', image: require('../assets/categories/Women/Chain-2.png'), name: 'Elegant Gold Plated Chain ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '509', image: require('../assets/categories/Women/Chain-3.png'), name: 'Beautiful Glittering Gold Plated Chains', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '510', image: require('../assets/categories/Women/Chain-main.png'), name: 'Women Pendant Necklace', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '511', image: require('../assets/categories/Mens/Men-Chains.png'), name: 'Gold Colour Simple Chain With Pendant', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },
  { id: '512', image: require('../assets/categories/Women/Chain-4.png'), name: 'Women Chain With Simple Pendant ', price: '\u20B9300', material: "Copper", care: "Clean with a soft, dry cloth",colour: "Gold Colour",category:"Chains" },



];

const All= () => {
 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore</Text>
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

export default All;
