import React, { useState, useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeartIcon from './HeartIcon';


import necklaceImage from '../assets/categories/Women/Ring-1.png';
import banglesImage from  '../assets/categories/Women/Bangle-3.png';
import banglesImage1 from  '../assets/categories/Women/Bangle-2.png';
import earring1 from  '../assets/categories/Women/Ear-20.png';


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [deliveryCharge] = useState(150);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const addOns = [
    {
      id: 74,
      name: "Beautiful stunning Stone necklace",
      price: 780,
      image: necklaceImage,
    },
    {
      id: "75",
      name: "Beautiful stunning Stone bangles",
      price: 780,
      image: banglesImage,
    },
    {
      id: "76",
      name: "Beautiful stunning Stone bangles",
      price: 780,
      image: banglesImage1,
    },
    {
      id: "78",
      name: "Beautiful stunning Stone bangles",
      price: 780,
      image: earring1,
    },
    
  ];

  // Fetching the delivery address dynamically
  useEffect(() => {
    const fetchAddress = () => {
      const address = "123, Sunset Boulevard, Los Angeles, CA";
      setDeliveryAddress(address);
    };

    fetchAddress();
    loadCart();
  }, []);

  // Load cart from AsyncStorage
  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    } catch (error) {
      console.error("Failed to load cart from storage", error);
    }
  };

  // Save cart to AsyncStorage
  const saveCart = async (newCart) => {
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(newCart));
    } catch (error) {
      console.error("Failed to save cart to storage", error);
    }
  };

  const addToCart = (item) => {
    const newCart = [...cart, { ...item, qty: 1 }];
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (id) => {
    Alert.alert(
      "Are you sure?",
      "Do you want to remove this item from your cart?",
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: () => {
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
            saveCart(updatedCart);
          },
        },
      ]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Cart</Text>

      {cart.length > 0 ? (
        cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹ {item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      )}





       {/* Delivery Address */}
       <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Delivery Address</Text> */}
          <View style={styles.deliveryContainer}>
            <View style={styles.addressContainer}>
              <Text style={styles.deliveryAddress}>
                Delivery to:{" "}
                <Text style={styles.addressName}>Shambavi, 518003</Text>
              </Text>
              <Text style={styles.addressText}>
                Kallur Estate Near Shukalamma Temple, Nagula Chatu, Kallur,
                Kurnool
              </Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>CHANGE</Text>
            </TouchableOpacity>
          </View>
        </View>

      <Text style={styles.addOnHeader}>Add On</Text>
    
      <FlatList
        data={addOns}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.addOnItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹ {item.price}</Text>
            <HeartIcon item={item} />
            <TouchableOpacity 
  style={{
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf:'flex-start',
    marginBottom: 10,
   
  }} 
  onPress={() => addToCart(item)} // Move onPress outside the style object
>
  <Text style={{ color: 'black', fontSize: 14 ,}}>ADD TO CART</Text>
</TouchableOpacity>

          </View>
        )}
      />

      <View style={styles.orderDetails}>
        <Text style={styles.orderHeader}>Order Details</Text>
        <Text>Total Items: {cart.length}</Text>
        <Text>Item Price: ₹ {getTotalPrice()}</Text>
        <Text>Delivery Charge: ₹ {cart.length > 0 ? deliveryCharge : 0}</Text>
        <Text>Delivery Address: {deliveryAddress}</Text>
        <Text style={styles.totalAmount}>
          Amount Payable: ₹{" "}
          {cart.length > 0 ? getTotalPrice() + deliveryCharge : 0}
        </Text>
      </View>

      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedText}>Proceed To Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "#fff", flexGrow: 1 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#742b90",
    marginTop: 30,
  },
  cartItem: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  image: { width: 200, height: 180, borderRadius: 0 },
  itemDetails: { flex: 1, marginLeft: 10 },
  itemName: { fontSize: 14, fontWeight: "bold" },
  itemPrice: { fontSize: 14, color: "#555" },
  removeText: { color: "red", fontSize: 18, marginLeft: 10 },
  addOnHeader: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  addOnItem: { padding:0, alignItems: "left", marginRight: 10 },
  addButton: { backgroundColor: "#ddd", padding: 5, marginTop: 5 },
  addText: { color: "#000", fontSize: 14 },
  orderDetails: { marginTop: '10%', padding: 10, backgroundColor: "#f9f9f9" },
  orderHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  totalAmount: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  proceedButton: {
    backgroundColor: "#742b90",
    padding: 15,
    marginTop: 10,
    alignItems: "center",
  },
  proceedText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  emptyText: { textAlign: "center", marginVertical: 20, fontSize: 16 },

  addressContainer: {
    flex: 1,
    marginRight: wp(2),
  },
  deliveryAddress: {
    fontSize: wp(4),
    fontWeight: "bold",
  },
  addressName: {
    fontWeight: "light",
  },
  addressText: {
    fontSize: wp(3.5),
    paddingTop: hp(0.5),
    paddingRight: hp(1),
  },
  changeButton: {
    borderWidth: 1,
    borderColor: "#FF3F6C",
    borderRadius: wp(2),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
    flexShrink: 1,
  },
  changeButtonText: {
    color: "#FF3F6C",
    fontSize: wp(3.5),
    fontWeight: "bold",
  },
  section: {
    marginTop: hp(3),
    marginBottom: hp(1),
    paddingLeft: hp(0.2),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    marginBottom: hp(1),
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
    width: "100%",
    marginLeft: wp(-2),
  },
});

export default Cart;













// import React, { useState, useEffect } from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView,  } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Picker } from "@react-native-picker/picker";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [deliveryCharge] = useState(150);

//   useEffect(() => {
//     loadCart();
//   }, []);

//   const loadCart = async () => {
//     try {
//       const cartData = await AsyncStorage.getItem("cart");
//       if (cartData) {
//         setCart(JSON.parse(cartData));
//       }
//     } catch (error) {
//       console.error("Failed to load cart from storage", error);
//     }
//   };

//   const saveCart = async (newCart) => {
//     try {
//       await AsyncStorage.setItem("cart", JSON.stringify(newCart));
//     } catch (error) {
//       console.error("Failed to save cart to storage", error);
//     }
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//     saveCart(updatedCart);
//   };

//   const updateQuantity = (id, qty) => {
//     const updatedCart = cart.map((item) => 
//       item.id === id ? { ...item, qty } : item
//     );
//     setCart(updatedCart);
//     saveCart(updatedCart);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.qty, 0);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Cart ({cart.length} Item{cart.length !== 1 ? "s" : ""})</Text>

//       {cart.length > 0 ? (
//         cart.map((item) => (
//           <View key={item.id} style={styles.cartItem}>
//             <Image source={item.image} style={styles.image} />
//             <View style={styles.itemDetails}>
//               <Text style={styles.itemName}>{item.name}</Text>

//               {/* Quantity Selector */}
//               <View style={styles.qtyContainer}>
//                 <Text style={styles.qtyText}>Qty:</Text>
//                 <Picker
//                   selectedValue={item.qty}
//                   style={styles.picker}
//                   onValueChange={(value) => updateQuantity(item.id, value)}
//                 >
//                   {[1, 2, 3, 4, 5].map((num) => (
//                     <Picker.Item key={num} label={`${num}`} value={num} />
//                   ))}
//                 </Picker>
//               </View>

//               <Text style={styles.itemPrice}>₹ {item.price}</Text>

//               {/* Delivery Information */}
//               <Text style={styles.deliveryInfo}>🚚 Delivery within 3 hours</Text>
//               <Text style={styles.nonReturnable}>Non-returnable Product</Text>
//             </View>

//             {/* Remove Button */}
//             <TouchableOpacity onPress={() => removeFromCart(item.id)}>
//               <Text style={styles.removeText}>✖</Text>
//             </TouchableOpacity>
//           </View>
//         ))
//       ) : (
//         <Text style={styles.emptyText}>Your cart is empty</Text>
//       )}

//       {/* Order Details */}
//       <View style={styles.orderDetails}>
//         <Text style={styles.orderHeader}>Order Details</Text>
//         <Text>Total Items: {cart.length}</Text>
//         <Text>Item Price: ₹ {getTotalPrice()}</Text>
//         <Text>Delivery Charge: ₹ {cart.length > 0 ? deliveryCharge : 0}</Text>
//         <Text style={styles.totalAmount}>
//           Amount Payable: ₹ {cart.length > 0 ? getTotalPrice() + deliveryCharge : 0}
//         </Text>
//       </View>

//       {/* Proceed to Pay */}
//       <TouchableOpacity style={styles.proceedButton}>
//         <Text style={styles.proceedText}>Proceed To Pay</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 10, backgroundColor: "#fff", flexGrow: 1 },
//   header: { fontSize: 22, fontWeight: "bold", textAlign: "left", color: "#000", marginBottom: 10 },
//   cartItem: { flexDirection: "row", alignItems: "center", marginVertical: 10, borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: "#ddd" },
//   image: { width: 80, height: 80, borderRadius: 5, marginRight: 10 },
//   itemDetails: { flex: 1 },
//   itemName: { fontSize: 14, fontWeight: "bold" },
//   qtyContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
//   qtyText: { fontSize: 14, marginRight: 5 },
//   picker: { height: 30, width: 80 },
//   itemPrice: { fontSize: 14, color: "#000", fontWeight: "bold", marginTop: 5 },
//   deliveryInfo: { fontSize: 12, color: "green", marginTop: 5 },
//   nonReturnable: { fontSize: 12, color: "red", marginTop: 2 },
//   removeText: { color: "red", fontSize: 20, marginLeft: 10 },
//   emptyText: { textAlign: "center", marginVertical: 20, fontSize: 16 },
//   orderDetails: { marginTop: 20, padding: 10, backgroundColor: "#f9f9f9" },
//   orderHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
//   totalAmount: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
//   proceedButton: { backgroundColor: "#742b90", padding: 15, marginTop: 10, alignItems: "center" },
//   proceedText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
// });

// export default Cart;



