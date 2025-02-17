import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';
import { useRoute } from '@react-navigation/native';


const womenblackbeedProducts = [
  { id: '11', image: require('../assets/categories/Women/Blackbeeds-1.png'), name: 'Divine Grace Lakhmi Mangalsutra', price: '\u20B9300', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '12', image: require('../assets/categories/Women/Blackbeeds-2.png'), name: 'Royal Temple Elegance Mangalsutra', price: '\u20B9300', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },
  { id: '13', image: require('../assets/categories/Women/Blackbeeds-3.png'), name: 'Eternal Charm Lakshmi Mangalsutra', price: '\u20B9300', material: "Alloy", care: "Clean with a soft, dry cloth",colour: "Gold & Black Colour",category:"Black beeds" },

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
      <Text style={styles.heading}>Black beeds</Text>
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
    // paddingHorizontal: wp(0),
    paddingTop: hp(5),
  },
  heading: {
    fontSize: wp(6),
    fontWeight: 'bold',
    marginBottom: hp(2),
    marginLeft: wp(4),
    color:"#47154B",
    
  },
  // listContainer: {
  //   paddingHorizontal: wp(2),
  // },
  item: {
    width: wp(46),
    // backgroundColor: '#fff',
    // borderRadius: wp(2),
    padding: wp(3),
    margin: wp(2),
    alignItems: 'flex-start',
    // elevation: 3,
  },
  image: {
    width: wp(42),
    height: wp(50),
    // borderRadius: wp(2),
  },
  name: {
    fontSize: wp(4),
    fontWeight: 'bold',
    marginVertical: hp(1),
    textAlign: 'left',
   
  },
  price: {
    fontSize: wp(3.5),
    color: 'gray',
    textAlign:'left',
  },
 
});

export default WomenBlackBeedsScreen;
