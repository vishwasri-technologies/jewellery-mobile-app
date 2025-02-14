import React, { useState, useEffect } from "react";
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


import necklaceImage from '../assets/categories/Women/Ring-1.png';
import banglesImage from  '../assets/categories/Women/Ring-1.png';


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [deliveryCharge] = useState(150);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const addOns = [
    {
      id: "74",
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
      image: banglesImage,
    },
    {
      id: "78",
      name: "Beautiful stunning Stone bangles",
      price: 780,
      image: banglesImage,
    },
    {
      id: "79",
      name: "Beautiful stunning Stone bangles",
      price: 780,
      image: banglesImage,
    },
    {
      id: "81",
      name: "Beautiful stunning Stone bangles",
      price: 780,
      image: banglesImage,
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
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={styles.addButton}
            >
              <Text style={styles.addText}>ADD TO CART</Text>
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
  image: { width: 180, height: 160, borderRadius: 10 },
  itemDetails: { flex: 1, marginLeft: 10 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemPrice: { fontSize: 14, color: "#555" },
  removeText: { color: "red", fontSize: 18, marginLeft: 10 },
  addOnHeader: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  addOnItem: { padding: 10, alignItems: "center", marginRight: 10 },
  addButton: { backgroundColor: "#ddd", padding: 5, marginTop: 5 },
  addText: { color: "#000", fontSize: 14 },
  orderDetails: { marginTop: 20, padding: 10, backgroundColor: "#f9f9f9" },
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
});

export default Cart;
