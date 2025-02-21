



import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';


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
import HeartIcon from "./HeartIcon";
import { Picker } from "@react-native-picker/picker";

import necklaceImage from "../assets/categories/Women/Ring-1.png";
import banglesImage from "../assets/categories/Women/Bangle-3.png";
import banglesImage1 from "../assets/categories/Women/Bangle-2.png";
import earring1 from "../assets/categories/Women/Ear-20.png";
import  {womenringProducts } from "./WomenRingsScreen";
import {womenbangleProducts  } from "./WomenBanglesScreen";
import {womenearringsProducts} from "./WomenEarRingsScreen";
const allProductsList = [
  ...( womenringProducts || []),
  ...(womenbangleProducts  || []),
  ...(womenearringsProducts || [])
];



const Cart = () => {
  const [cart, setCart] = useState([]);
  // const [deliveryCharge] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const navigation = useNavigation();
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, "")); // Extract only numbers
      return total + (numericPrice || 0) * item.qty;
    }, 0);
  };
  const deliveryCharge = cart.length > 0 ? 50 : 0;
const itemsPrice = getTotalPrice();
const sgst = (itemsPrice * 2.5) / 100;
const cgst = (itemsPrice * 2.5) / 100;
const subTotal = itemsPrice + deliveryCharge +sgst+ cgst;
const totalAmount = subTotal ;




  const addOns = [
    {
      id: "74",
      name: "Elegant Ring with a twisted,\nlayered structure",

      price: "\u20B980",
      image: necklaceImage,
       material: "Copper", 
       care: "Clean with a soft, dry cloth",
       colour: "Gold Colour",
       category:"Rings"
    },
    {
      id: "75",
      name: "Traditional Bangles south Indian \nstyle",
      price: "\u20B9399",
      image: banglesImage,
      material: "Copper", 
      care: "Clean with a soft, dry cloth",
      colour: "Gold Colour",
      category:"Bangles"
    },
    {
      id: "76",
      name: "Unique Gold plated women \nBangles",
      price: "\u20B9499",
      image: banglesImage1,
      material: "Copper", 
      care: "Clean with a soft, dry cloth",
      colour: "Gold Colour",
      category:"Bangles"
    },
    {
      id: "78",
      name: "Golden Antique Charm \nJhumkas",
      price: "\u20B9499",
      image: earring1,
      material: "Copper",
       care: "Clean with a soft, dry cloth",
       colour: "Gold Colour",
       category:"Ear Rings"
    },
  ];

  const proceedToPay = async () => {
    if (cart.length === 0) {
      Alert.alert("Cart is empty", "Please add items to your cart before proceeding.");
      return;
    }
  
    try {
      const response = await fetch("http://192.168.29.178:5000/Cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: cart,
          amount: getTotalPrice() + deliveryCharge,
          method: "Online",
        }),
      });
  
      const data = await response.json();
      if (data.orderId) {
        // Navigate to Payment Page with order details
        navigation.navigate("paymentMethod", {
          price: getTotalPrice() + deliveryCharge,
          orderId: data.orderId,
        });
      } else {
        Alert.alert("Error", "Failed to create order. Please try again.");
      }
    } catch (error) {
      console.error("Error proceeding to pay:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };
  

  // Fetching the delivery address dynamically
  useEffect(() => {
    const fetchAddress = () => {
      const address = "123, Sunset Boulevard, Los Angeles";
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

  // Update quantity function
  const updateQuantity = (id, newQty) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item
    );
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  // Save cart to AsyncStorage
  const saveCart = async (newCart) => {
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(newCart));
    } catch (error) {
      console.error("Failed to save cart to storage", error);
    }
  };
  const addToCart = async (item) => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      let cart = cartData ? JSON.parse(cartData) : [];
  
      // Check if the item already exists in the cart
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        // If item exists, increase its quantity
        cart[existingItemIndex].qty += 1;
      } else {
        // If not, add the new item with quantity 1
        cart.push({ ...item, qty: 1 });
      }
  
      // Save updated cart back to AsyncStorage
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      setCart(cart); // Update state
  
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
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

 

 

return (
    <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#47154B" />
        </TouchableOpacity>
     
      <Text style={styles.heading}>Cart</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.addressBox}>
          <Text style={styles.text}>
          Delivery to: Shambavi, 518003{"\n"}
          Kallur Estate Near Shukulamma Temple, Nagula Chatu, Kalluru, Kurnool
          </Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate("addaddress")}>
            <Text style={styles.addAddressText}>Edit Address</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {cart.length > 0 ? (
        cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.quantityLabel}>Qty:</Text>
              <Picker
                selectedValue={item.qty}
                onValueChange={(value) =>
                  updateQuantity(item.id, parseInt(value))
                }
                style={styles.quantityPicker}
              >
                {[...Array(1000).keys()].map((num) => (
                  <Picker.Item
                    key={num + 1}
                    label={`${num + 1}`}
                    value={num + 1}
                  />
                ))}
              </Picker>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name="truck"
                  size={12}
                  color="black"
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.deliveryText}>Delivery within 3 hours</Text>
              </View>
              <Text style={styles.nonReturnableText}>
                Non-returnable Product
              </Text>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeText}>X Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      )}

<View>
  <Text style={styles.addOnHeader}>Add On</Text>
  
  <FlatList
    data={addOns}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.addOnItem}>
        <TouchableOpacity
          onPress={() =>
            navigation.push("ProductDetails", {
              product: item,
              allProducts: allProductsList,
            })
          }
        >
          <Image source={item.image} style={styles.image1} />
        </TouchableOpacity>
        <Text style={styles.itemName1}>{item.name}</Text>
        <Text style={styles.itemPrice1}>{item.price}</Text>
        <HeartIcon item={item} />
        <TouchableOpacity
          style={{
            marginTop: 5,
            borderWidth: 1,
            borderColor: "black",
            paddingVertical: 6,
            paddingHorizontal: 30,
            borderRadius: 5,
            alignSelf: "flex-start",
            marginBottom: 10,
          }}
          onPress={() => addToCart(item)}
        >
          <Text style={{ color: "black", fontSize: 14 }}>
            ADD TO CART
          </Text>
        </TouchableOpacity>
      </View>
    )}
  />
</View>
     
<View style={styles.orderDetails}>
  <Text style={styles.orderHeader}>Order Details</Text>

  <View style={styles.orderRow}>
    <Text style={styles.orderKey}>Total Items:</Text>
    <Text style={styles.orderValue}>{cart.length}</Text>
  </View>

  <View style={styles.orderRow}>
    <Text style={styles.orderKey}>Items Price:</Text>
    <Text style={styles.orderValue}>₹ {itemsPrice.toFixed(2)}</Text>
  </View>

  <View style={styles.orderRow}>
    <Text style={styles.orderKey}>Delivery Charge:</Text>
    <Text style={styles.orderValue}>₹ {deliveryCharge}</Text>
  </View>
  <View style={styles.orderRow}>
    <Text style={styles.orderKey}>SGST (2.5%):</Text>
    <Text style={styles.orderValue}>₹ {sgst.toFixed(2)}</Text>
  </View>

  <View style={styles.orderRow}>
    <Text style={styles.orderKey}>CGST (2.5%):</Text>
    <Text style={styles.orderValue}>₹ {cgst.toFixed(2)}</Text>
  </View>

  <View style={styles.orderRow}>
    <Text style={styles.orderKey}>Sub Total:</Text>
    <Text style={styles.orderValue}>₹ {subTotal.toFixed(2)}</Text>
  </View>
</View>

<View style={styles.orderRow}>
  <Text style={[styles.orderKey, styles.totalAmount]}>
    Amount Payable:
  </Text>
  <Text style={[styles.orderValue, styles.totalAmount]}>
    ₹ {totalAmount.toFixed(2)}
  </Text>
</View>

{/* Row Container for Total Amount & Button */}
<View style={styles.paymentContainer}>
  <Text style={styles.totalPayableText}>₹ {totalAmount.toFixed(2)}</Text>
  <TouchableOpacity
    style={styles.proceedButton}
    onPress={() =>
      navigation.navigate("paymentMethod", {
        price: totalAmount,
      })
    }
  >
    <Text style={styles.proceedText}>Proceed To Pay</Text>
  </TouchableOpacity>
</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    flexGrow: 1,
    paddingRight: 8,
  },



  header: {
    flexDirection: 'row',  
    alignItems: 'center', 
    paddingHorizontal: wp(5),
    paddingTop: hp(6),  
    paddingBottom:hp(3),
  
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#47154B',
    marginLeft:wp(30),
    
  },
  cartItem: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  image: { width: 120, height: 160, borderRadius: 0 },
  itemDetails: { flex: 1, marginLeft: 10 },
  itemName: { fontSize: 16 },
  itemPrice: { fontSize: 14, color: "#555", marginTop: -11 },
  image1: { width: 230, height: 190, borderRadius: 0 },
  itemName1: { fontSize: 14, fontWeight: "bold",paddingBottom:5, },
  itemPrice1: { fontSize: 14, color: "#555",paddingBottom:5, },
  removeText: { color: "black", fontSize: 16, marginLeft: 0, marginTop: "5" },
  addOnHeader: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  addOnItem: { padding: 0, alignItems: "left", marginRight: 10 },
  addButton: { backgroundColor: "#ddd", padding: 5, marginTop: 5 },
  addText: { color: "#000", fontSize: 14 },
  orderDetails: {
    padding: 10,
  },
  orderHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  orderKey: {
    fontSize: 16,
    paddingBottom:10,
    // fontWeight: "bold",
  },
  orderValue: {
    fontSize: 16,
    textAlign:"left",
    marginRight: 25,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
   
  },
  proceedButton: {
    backgroundColor: "#742b90",
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    width: 150,
    alignSelf: "flex-end",
    marginTop: -25,
  },
  proceedText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: { textAlign: "center", marginVertical: 20, fontSize: 16 },
  quantityLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "0%",
    marginTop: 3,
    flexBasis: "row",
  },
  quantityPicker: { marginTop: "-34", marginLeft: 13 },

  addressBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 15,
    backgroundColor: "#F8D7DA",
    borderRadius: 10,
  },
  text: {
    color: "#000",
    fontSize: 14,
    flex: 1,
  },
  addAddressText: {
    color: "#5A0F5A",
    fontSize: 16,
    fontWeight: "bold",
  },
  totalPayableText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
});

export default Cart;
