import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import BottomNavBar from "./BottomNavbar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

import { womenbraceletProducts } from "./WomenBraceletsScreen";
import { womenearringsProducts } from "./WomenEarRingsScreen";
import { womensnecklaceProducts } from "./WomenNecklaceScreen";
import { chainProducts } from "./MenChainsScreen";
import { womenringProducts } from "./WomenRingsScreen";
import { womenbangleProducts } from "./WomenBanglesScreen";
import { womenblackbeedProducts } from "./WomenBlackBeedsScreen";
import { womenchainProducts } from "./WomenChainsScreen";
import {addOns} from "./Cart.js";
import {allProducts} from "./All.js";

// ✅ Combine all product lists into one
const allProductsList = [
  ...(womenbraceletProducts || []),
  ...(womenearringsProducts || []),
  ...(womensnecklaceProducts || []),
  ...(chainProducts || []),
  ...(womenringProducts || []),
  ...(womenbangleProducts || []),
  ...(womenblackbeedProducts || []),
  ...(womenchainProducts || []),
  ...(addOns || []),
  ...(allProducts),

];


const { width } = Dimensions.get("window");


const OrderTracking = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const [profileAddress, setProfileAddress] = useState(null);
  const [lastOrder, setLastOrder] = useState(null); // ✅ Store last order details
  


  useEffect(() => {
    loadCart();
    fetchProfileAddress();
    fetchLastOrder();
  }, []);

  // ✅ Fetch last order from backend
  const fetchLastOrder = async () => {
    try {
      const response = await axios.get("http://192.168.29.178:5000/last-order"); // Adjust backend URL
      if (response.data.success) {
        setLastOrder(response.data.order);
      }
    } catch (error) {
      console.error("❌ Error fetching last order:", error.message);
    }
  };


  // Load cart from AsyncStorage

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      if (cartData) {
        setCart(
          JSON.parse(cartData).map((item) => ({
            ...item,
            price: parseFloat(item.price.replace(/[^0-9.]/g, "")), // Convert price to number
            qty: Number(item.qty) || 1, // Ensure qty is a number
          }))
        );
      }
    } catch (error) {}
  };

  // Retrieve cart items from navigation params

  const { cartItems = [] } = route.params || {};
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (!item.price) return total; // Skip if price is undefined or null
  
      const numericPrice =
        typeof item.price === "string"
          ? parseFloat(item.price.replace(/[^\d.]/g, "")) // Remove non-numeric characters
          : parseFloat(item.price); // If it's already a number
  
      return total + (numericPrice || 0) * item.qty;
    }, 0);
  };
  
  const deliveryCharge = cart.length > 0 ? 50 : 0;
const itemsPrice = getTotalPrice();
const sgst = (itemsPrice * 2.5) / 100;
const cgst = (itemsPrice * 2.5) / 100;
const subTotal = itemsPrice + deliveryCharge +sgst+ cgst;
const totalAmount = subTotal ;
  // const { cartItems = [] } = route.params || {};

  const fetchProfileAddress = async () => {
    try {
      const response = await axios.get("http://192.168.29.178:5000/ProfileAddress");
      if (response.data.length > 0) {
        const latestAddress = response.data[response.data.length - 1]; // Get the most recent address
        setProfileAddress(latestAddress);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require("../assets/profileImgs/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Order</Text>
        </View>
        

        {/* Dynamic Product Details */}
         {/* {cart.length > 0 ? (
          cart.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.quantityLabel}>Qty:</Text>
                <Picker
                  selectedValue={item.qty}
                  enabled={false} // Disables the Picker interaction
                  style={[styles.quantityPicker, { color: "black" }]} // Ensures visibility
                  mode="dropdown" // Ensures dropdown style is minimal
                >
                  <Picker.Item label={`${item.qty}`} value={item.qty} />
                </Picker>
                <Text style={styles.itemPrice}>
                  ₹
                  {(
                    parseFloat(item.price || "0") * parseInt(item.qty || "1")
                  ).toFixed(0)}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No items ordered yet!</Text>
        )} */}


        {/* ✅ Fetch and Display Last Order Details */}
        {lastOrder && lastOrder.items.length > 0 ? (
  lastOrder.items.map((item, index) => (
    <View key={index} style={styles.cartItem}>
      {/* Product Image */}
      <Image source={{ uri: item.image }} style={styles.image} /> 

      <View style={styles.itemDetails}>
        {/* ✅ Clickable Product Name to Navigate to ProductDetails */}
        <TouchableOpacity
  onPress={() => {
    // ✅ Find the exact product from allProductsList by matching ID
    const matchedProduct = allProductsList.find((p) => p.id === item.id);

    if (matchedProduct) {
      console.log("✅ Navigating to ProductDetails with:", matchedProduct);
      navigation.push("ProductDetails", {
        product: matchedProduct,  // ✅ Pass full product details
        allProducts: allProductsList,
      });
    } else {
      console.warn("⚠️ Product not found in allProductsList. Using fallback:", item);
      navigation.push("ProductDetails", { 
        product: item, // ✅ Use item as fallback if not found in `allProductsList`
        allProducts: allProductsList
      });
    }
  }}
>
  <Text style={styles.itemName}>📌 {item.name}</Text>
</TouchableOpacity>



        {/* Quantity Picker (Disabled) */}
        <Text style={styles.quantityLabel}>Qty:</Text>
        <Picker
          selectedValue={item.qty}
          enabled={false} // Disable selection
          style={[styles.quantityPicker, { color: "black" }]}
          mode="dropdown"
        >
          <Picker.Item label={`${item.qty}`} value={item.qty} />
        </Picker>

        {/* Product Price */}
        <Text style={styles.itemPrice}>
          ₹{(parseFloat(item.price || "0") * parseInt(item.qty || "1")).toFixed(0)}
        </Text>
      </View>
    </View>
  ))
) : null} 



        {/* Order Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.sectionTitle}>Order Status</Text>
          {renderStatus(
            "Order Placed",
            "You placed your order and received a confirmation.",
            true
          )}
          
          {renderStatus(
            "Delivered",
            // "Your order is on the way. Delivered in 2 days.",
            false
          )}
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("CancelOrder")}> 
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.divider} /> 
          <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate("ContactUs")}> 
            <Text style={styles.buttonText}>Need Help?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.addressContainer}>
  <Text style={styles.sectionTitle}>Delivery Address</Text>
  {profileAddress ? (
    <Text style={styles.addressText}>
      Delivered to:{" "}
      {profileAddress.name}, {profileAddress.phone},{" "}
      {profileAddress.zipcode || profileAddress.pincode},{" "}
      {profileAddress.houseNo}, {profileAddress.locality},{" "}
      {profileAddress.city}, {profileAddress.state},{" "}
      {profileAddress.addressType}
    </Text>
  ) : (
    <Text style={styles.addressText}>Fetching address...</Text>
  )}
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
            Amount Paid:
          </Text>
          <Text style={[styles.orderValue, styles.totalAmount]}>
            ₹ {totalAmount.toFixed(2)}
          </Text>
        </View>
              
        {/* Order Details */}
         {/* ✅ Order Details Section - Now Fetched from Backend */}
         {/* {lastOrder && (
          <View style={styles.orderDetailsContainer}>
            <Text style={styles.sectionTitle}>Order details</Text>
            {renderOrderDetail("Total Items", `${lastOrder.items.length} Items`)}
            {renderOrderDetail("Items Price", `₹${lastOrder.totalAmount - 0}`)}
            {renderOrderDetail("Delivery Charge", "₹0")}
            {renderOrderDetail("Total Amount", `₹${lastOrder.totalAmount}`)}
          </View>
        )} */}
      </ScrollView>

      <BottomNavBar />
    </View>
  );
};

const renderStatus = (title, description, completed) => (
  <View style={styles.statusItem}>
    <View style={styles.statusColumn}>
      <View style={[styles.statusIndicator, completed && styles.completed]} />
      <View style={styles.statusDashedLine} />
    </View>
    <View>
      <Text style={styles.statusTitle}>{title}</Text>
      <Text style={styles.statusDescription}>{description}</Text>
    </View>
  </View>
);

const renderOrderDetail = (label, value) => (
  <View style={styles.orderRow}>
    <Text style={styles.orderLabel}>{label}</Text>
    <Text style={styles.orderValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  header: { alignItems: "center", paddingVertical: 20 },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#47154B",
    marginLeft: wp(2),
    top: hp(0.5),
  },
  itemText: { fontSize: 16, marginBottom: 5 },
  noOrderText: { textAlign: "center", fontSize: 16, color: "gray", marginTop: 20 },
 

  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 19 },
  statusContainer: { marginVertical: 10 },
  statusItem: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  statusColumn: { alignItems: "center", marginRight: 10 },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "lightgray",
  },
  completed: { backgroundColor: "green" },
  statusDashedLine: {
    width: 2,
    height: 40,
    borderStyle: "dashed",
    backgroundColor: "lightgray",
  },
  statusTitle: { fontWeight: "bold" },
  statusDescription: { fontSize: 12, color: "gray" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 5, 
    backgroundColor: "white", 
    width:"100%",
  },
  
  
  cancelButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginRight: 5,
    borderRadius: 5,
    // borderRightWidth: 1, 
    borderColor: "#ccc", 
  },
  
  helpButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  divider: {
    width: 1, 
    backgroundColor: "#ccc", 
    height: "130%", 
    alignSelf: "stretch",
  },
  
  buttonText: { 
    color: "purple", 
    fontWeight: "bold" 
  },
  
  addressContainer: { marginVertical: 10 },
  addressText: { color: "gray" },
 
  backButton: {
    position: "absolute",
    left: wp("4%"),
    top: hp(3),
    zIndex: 1,
  },
  emptyCartText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginVertical: 20,
  },
  cartItem: { flexDirection: "row-reverse", alignItems: "center", marginVertical: 10 },
  image: { width: 120, height: 160, borderRadius: 0 },
  itemDetails: { flex: 1, marginLeft: 10, },
  itemName: { fontSize: 16 },
  itemPrice: { fontSize: 14, color: "#555", marginTop: -11, marginBottom: 80 },
  quantityLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "0%",
    marginTop: 3,
    flexBasis: "auto",
  },
  quantityPicker: { marginTop: "-34", marginLeft: 13 },
  emptyText: { textAlign: "center", marginVertical: 20, fontSize: 16 },
  orderDetails: {
   paddingLeft:0,
  
  },
  orderHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft:4,
   
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
   
  },
  orderKey: {
    fontSize: 16,
    paddingBottom:10,
    paddingLeft:10,
  //  color:"gray",
  },
  orderValue: {
    fontSize: 16,
    textAlign:"left",
    marginRight: 25,
    // color:"gray",
  },
  totalAmount: {
    fontSize: 16,
    paddingBottom:25,
  
   },
 
});

export default OrderTracking;
