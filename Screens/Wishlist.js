



import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useWishlist } from './WishlistContext';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNavBar from './BottomNavbar';

const WishlistScreen = () => {
  const { wishlist, removeFromWishlist } = useWishlist();



  const handleAddToCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      let cart = cartData ? JSON.parse(cartData) : [];

      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].qty += 1;
      } else {
        cart.push({ ...product, qty: 1 });
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      Alert.alert("Success", `${product.name} added to cart!`);
    } catch (error) {
      console.error("Failed to add product to cart", error);
      Alert.alert("Error", "Failed to add product to cart. Please try again.");
    }
  };

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

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, marginTop: 40, color: '#47154B' }}>
        Wishlist
      </Text>

      <View style={{ flex: 1, justifyContent: wishlist.length === 0 ? 'center' : 'flex-start' }}>
        {wishlist.length === 0 ? (
          <Text style={{ fontSize: 16, textAlign: 'center' }}>No items in wishlist</Text>
        ) : (
          <FlatList
            data={wishlist}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 60, alignItems: 'flex-start' }}
            columnWrapperStyle={{ justifyContent: 'flex-start' }}
            renderItem={({ item }) => (
              <View style={{
                flexBasis: '48%',
                margin: 5,
                backgroundColor: '#fff',
                borderRadius: 8,
                overflow: 'hidden',
                elevation: 3,
                borderWidth: 1,
                borderColor: '#ddd',
                position: 'relative'
              }}>
                {/* Remove Button */}
                <TouchableOpacity
                  onPress={() => handleRemove(item.id, item.name)}
                  style={{ position: 'absolute', top: 5, right: 5, zIndex: 1, backgroundColor: 'white' }}
                >
                  <MaterialIcons name="close" size={18} color="black" />
                </TouchableOpacity>

                {/* Product Image Covering Whole Container */}
                <Image source={item.image} style={{ width: '100%', height: 150, resizeMode: 'cover' }} />

                {/* Product Name */}
                <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'left', marginTop: 5, marginLeft: "7%" }}>
                  {item.name}
                </Text>

                {/* Price */}
                <Text style={{ fontSize: 14, color: 'gray', textAlign: 'left', marginLeft: "7%" }}>{item.price}</Text>

                {/* Add to Cart Button */}
                <TouchableOpacity style={{
                  marginTop: 5,
                  borderWidth: 1,
                  borderColor: 'black',
                  paddingVertical: 6,
                  paddingHorizontal: 30,
                  borderRadius: 5,
                  alignSelf: 'center',
                  marginBottom: 10,
                  
                }} >
                  <Text style={{ color: 'black', fontSize: 14 }}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>

      {/* Ensure Bottom Navbar is full width */}
      <View style={{ width: '110%', position: 'absolute', bottom: 0 }}>
        <BottomNavBar />
      </View>
    </View>
  );
};

export default WishlistScreen;











// // import React, { useCallback } from 'react';
// // import { View, Text, Image, FlatList, TouchableOpacity, Alert, Dimensions } from 'react-native';
// // import { useWishlist } from './WishlistContext';
// // import { useCart } from './CartContext'; // Import Cart Context for add to cart
// // import { MaterialIcons } from '@expo/vector-icons';
// // import BottomNavBar from './BottomNavbar';

// // // Get screen width for dynamic layout adjustments
// // const screenWidth = Dimensions.get('window').width;

// // const WishlistScreen = () => {
// //   const { wishlist, removeFromWishlist } = useWishlist();
// //   const { addToCart } = useCart(); // Access addToCart function

// //   // Handle removing an item from wishlist with confirmation
// //   const handleRemove = useCallback((id, name) => {
// //     Alert.alert(
// //       "Remove Item",
// //       `Are you sure you want to remove ${name} from your wishlist?`,
// //       [
// //         { text: "Cancel", style: "cancel" },
// //         { text: "OK", onPress: () => removeFromWishlist(id) }
// //       ]
// //     );
// //   }, [removeFromWishlist]);

// //   // Render each wishlist item
// //   const renderItem = ({ item }) => (
// //     <View style={{
// //       width: screenWidth / 2 - 15, // Dynamic width calculation
// //       margin: 5,
// //       backgroundColor: '#fff',
// //       borderRadius: 8,
// //       overflow: 'hidden',
// //       elevation: 3,
// //       borderWidth: 1,
// //       borderColor: '#ddd',
// //       position: 'relative'
// //     }}>
// //       {/* Remove Button */}
// //       <TouchableOpacity
// //         onPress={() => handleRemove(item.id, item.name)}
// //         style={{ position: 'absolute', top: 5, right: 5, zIndex: 1, backgroundColor: 'white', padding: 4, borderRadius: 20 }}
// //       >
// //         <MaterialIcons name="close" size={18} color="black" />
// //       </TouchableOpacity>

// //       {/* Product Image */}
// //       <Image source={item.image} style={{ width: '100%', height: 150, resizeMode: 'cover' }} />

// //       {/* Product Name */}
// //       <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'left', marginTop: 5, marginLeft: "7%" }}>
// //         {item.name}
// //       </Text>

// //       {/* Price */}
// //       <Text style={{ fontSize: 14, color: 'gray', textAlign: 'left', marginLeft: "7%" }}>{item.price}</Text>

// //       {/* Add to Cart Button */}
// //       <TouchableOpacity
// //         onPress={() => addToCart(item)} // Add to cart functionality
// //         style={{
// //           marginTop: 5,
// //           borderWidth: 1,
// //           borderColor: 'black',
// //           paddingVertical: 6,
// //           paddingHorizontal: 30,
// //           borderRadius: 5,
// //           alignSelf: 'center',
// //           marginBottom: 10,
// //         }}>
// //         <Text style={{ color: 'black', fontSize: 14 }}>ADD TO CART</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   return (
// //     <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 }}>
// //       <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, marginTop: 40, color: '#47154B' }}>
// //         Wishlist
// //       </Text>

// //       <View style={{ flex: 1, justifyContent: wishlist.length === 0 ? 'center' : 'flex-start' }}>
// //         {wishlist.length === 0 ? (
// //           <Text style={{ fontSize: 16, textAlign: 'center' }}>No items in wishlist</Text>
// //         ) : (
// //           <FlatList
// //             data={wishlist}
// //             keyExtractor={(item) => item.id.toString()}
// //             numColumns={2}
// //             contentContainerStyle={{ paddingBottom: 60, alignItems: 'flex-start' }}
// //             columnWrapperStyle={{ justifyContent: 'flex-start' }}
// //             renderItem={renderItem}
// //             extraData={wishlist} // Optimize re-renders
// //           />
// //         )}
// //       </View>

// //       {/* Bottom Navbar */}
// //       <View style={{ width: '100%', position: 'absolute', bottom: 0, left: 0 ,right:0,}}>
// //         <BottomNavBar />
// //       </View>
// //     </View>
// //   );
// // };

// // export default React.memo(WishlistScreen); // Optimize performance with memoization








// import React from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
// import { useWishlist } from './WishlistContext';
// import { MaterialIcons } from '@expo/vector-icons';
// import BottomNavBar from './BottomNavbar';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const WishlistScreen = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   const handleAddToCart = async (product) => {
//     try {
//       const cartData = await AsyncStorage.getItem("cart");
//       let cart = cartData ? JSON.parse(cartData) : [];

//       const existingProductIndex = cart.findIndex((item) => item.id === product.id);

//       if (existingProductIndex !== -1) {
//         cart[existingProductIndex].qty += 1;
//       } else {
//         cart.push({ ...product, qty: 1 });
//       }

//       await AsyncStorage.setItem("cart", JSON.stringify(cart));
//       Alert.alert("Success", `${product.name} added to cart!`);
//     } catch (error) {
//       console.error("Failed to add product to cart", error);
//       Alert.alert("Error", "Failed to add product to cart. Please try again.");
//     }
//   };

//   const handleRemove = (id, name) => {
//     Alert.alert(
//       "Remove Item",
//       `Are you sure you want to remove ${name} from your wishlist?`,
//       [
//         { text: "Cancel", style: "cancel" },
//         { text: "OK", onPress: () => removeFromWishlist(id) }
//       ]
//     );
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 }}>
//       <Text style={{
//         fontSize: 22, fontWeight: 'bold', textAlign: 'center',
//         marginBottom: 10, marginTop: 40, color: '#47154B'
//       }}>
//         Wishlist
//       </Text>

//       <View style={{ flex: 1, justifyContent: wishlist.length === 0 ? 'center' : 'flex-start' }}>
//         {wishlist.length === 0 ? (
//           <Text style={{ fontSize: 16, textAlign: 'center' }}>No items in wishlist</Text>
//         ) : (
//           <FlatList
//             data={wishlist}
//             keyExtractor={(item) => item.id.toString()}
//             numColumns={2}
//             contentContainerStyle={{ paddingBottom: 60, alignItems: 'flex-start' }}
//             columnWrapperStyle={{ justifyContent: 'flex-start' }}
//             renderItem={({ item }) => (
//               <View style={{
//                 flexBasis: '48%', margin: 5, backgroundColor: '#fff',
//                 borderRadius: 8, overflow: 'hidden', elevation: 3,
//                 borderWidth: 1, borderColor: '#ddd', position: 'relative'
//               }}>
//                 {/* Remove Button */}
//                 <TouchableOpacity
//                   onPress={() => handleRemove(item.id, item.name)}
//                   style={{ position: 'absolute', top: 5, right: 5, zIndex: 1, backgroundColor: 'white' }}
//                 >
//                   <MaterialIcons name="close" size={18} color="black" />
//                 </TouchableOpacity>

//                 {/* Product Image */}
//                 <Image
//                   source={{ uri: item.image }} // Ensure image is properly displayed
//                   style={{ width: '100%', height: 150, resizeMode: 'cover' }}
//                 />

//                 {/* Product Name */}
//                 <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'left', marginTop: 5, marginLeft: "7%" }}>
//                   {item.name}
//                 </Text>

//                 {/* Price */}
//                 <Text style={{ fontSize: 14, color: 'gray', textAlign: 'left', marginLeft: "7%" }}>
//                   {item.price}
//                 </Text>

//                 {/* Add to Cart Button */}
//                 <TouchableOpacity
//                   style={{
//                     marginTop: 5, borderWidth: 1, borderColor: 'black',
//                     paddingVertical: 6, paddingHorizontal: 30, borderRadius: 5,
//                     alignSelf: 'center', marginBottom: 10,
//                   }}
//                   onPress={() => handleAddToCart(item)} // Pass item to function
//                 >
//                   <Text style={{ color: 'black', fontSize: 14 }}>ADD TO CART</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           />
//         )}
//       </View>

//       {/* Bottom Navbar */}
//       <View style={{ width: '110%', position: 'absolute', bottom: 0 }}>
//         <BottomNavBar />
//       </View>
//     </View>
//   );
// };

// export default WishlistScreen;
