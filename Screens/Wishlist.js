
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert, StyleSheet, Dimensions } from 'react-native';
import { useWishlist } from './WishlistContext';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNavBar from './BottomNavbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigation = useNavigation();

  // Handle item removal from wishlist
  const handleRemove = (id, name) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove ${name} from your wishlist?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => removeFromWishlist(id) }
      ]
    );
  };

  // Handle adding item to cart
  const handleAddToCart = async (product) => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      let cart = cartData ? JSON.parse(cartData) : [];

      const existingProductIndex = cart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].qty += 1; // Increase quantity if item already exists
      } else {
        cart.push({ ...product, qty: 1 }); // Add item if not already in cart
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));

      // Show success popup
      Alert.alert("Success", `${product.name} added to cart!`);
    } catch (error) {
      console.error("Failed to add product to cart", error);
      Alert.alert("Error", "Failed to add product to cart. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#47154B" />
        </TouchableOpacity>
      <Text style={styles.heading}>Wishlist</Text>
      </View>

      <View style={{ flex: 1, justifyContent: wishlist.length === 0 ? 'center' : 'flex-start' }}>
        {wishlist.length === 0 ? (
          <Text style={styles.emptyText}>No items in wishlist</Text>
        ) : (
          <FlatList
            data={wishlist}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 60, alignItems: 'flex-start' }}
            columnWrapperStyle={{ justifyContent: 'flex-start' }}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                
                {/* Responsive Close Button */}
                <TouchableOpacity onPress={() => handleRemove(item.id, item.name)} style={styles.closeButton}>
                  <MaterialIcons name="close" size={wp('4%')} color="black" />
                </TouchableOpacity>

                {/* Product Image */}
                <Image source={item.image} style={styles.productImage} />

                {/* Product Name */}
                <Text style={styles.productName}>{item.name}</Text>

                {/* Price */}
                <Text style={styles.productPrice}>{item.price}</Text>

                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
                  <Text style={styles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>

      {/* Ensure Bottom Navbar is full width */}
      <View style={styles.bottomNav}>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
 header: {
  flexDirection: 'row',  // Aligns items horizontally
  alignItems: 'center',  // Vertically centers items
  paddingHorizontal: wp(5),  // Ensure responsive horizontal padding
  paddingTop: hp(6),  // Ensure responsive vertical padding
  paddingBottom:hp(3),

},
heading: {
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#47154B',
  marginLeft:wp(8),
  
},

  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  productContainer: {
    flexBasis: '48%',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: hp('1%'),
    right: wp('2%'),
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: wp('2.5%'),
    padding: wp('1%'), 
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: "7%",
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
    marginLeft: "7%",
  },
  addToCartButton: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  addToCartText: {
    color: 'black',
    fontSize: 14,
  },
  bottomNav: {
    width: '110%',
    position: 'absolute',
    bottom: 0,
  },
 
});

export default WishlistScreen;


