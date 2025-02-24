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

const { width } = Dimensions.get("window");

const OrderTracking = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(() => {
    loadCart();
  }, []);
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

        {cart.length > 0 ? (
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
        )}

        {/* Order Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.sectionTitle}>Order Status</Text>
          {renderStatus(
            "Order Placed",
            "You placed your order and received a confirmation.",
            true
          )}
          {renderStatus(
            "Order Packed",
            "Your order is securely packed and ready for dispatch.",
            true
          )}
          {renderStatus(
            "Out for Delivery",
            "Your order is on the way with our delivery partner.",
            false
          )}
          {renderStatus(
            "Arriving Soon",
            "Your order is on the way. Delivered in 2 days.",
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

        {/* Delivery Address */}
        <View style={styles.addressContainer}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <Text style={styles.addressText}>
            Delivered to: Shambavi, 518003 Kallur Estate
          </Text>
          <Text style={styles.addressText}>
            Kallur Estate Near Shakulamma Temple, Nagula Chatu, Kallur, Kurnool
          </Text>
        </View>

        {/* Order Details */}
        <View style={styles.orderDetailsContainer}>
          <Text style={styles.sectionTitle}>Order Details</Text>

          {/* Total Items */}
          {renderOrderDetail("Total Items", `${cart.length} Items`)}
          {renderOrderDetail(
            "Items Price",
            `₹${cart
              .reduce((total, item) => total + item.price * item.qty, 0)
              .toFixed(2)}`
          )}
          {renderOrderDetail("Delivery Charge", "₹0")}
          {renderOrderDetail(
            "Sub Total",
            `₹${(
              cart.reduce((total, item) => total + item.price * item.qty, 0) +
              0
            ).toFixed(2)}`
          )}

          {renderOrderDetail(
            "Amount Paid",
            `₹${(
              cart.reduce((total, item) => total + item.price * item.qty, 0) +
              0
            ).toFixed(2)}`
          )}
        </View>
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
    marginLeft: wp(35),
    top: hp(0.5),
  },
 

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
  orderDetailsContainer: { marginVertical: 10, paddingBottom: 30 },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  orderValue: { color: "gray" },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
  },
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
    flexBasis: "row",
  },
  quantityPicker: { marginTop: "-34", marginLeft: 13 },
  emptyText: { textAlign: "center", marginVertical: 20, fontSize: 16 },
});

export default OrderTracking;
