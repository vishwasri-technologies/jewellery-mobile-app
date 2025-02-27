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
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from "axios";

const { width } = Dimensions.get("window");

const ExistingOrder = () => {
    const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  const route = useRoute();
  const [lastOrder, setLastOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCart();
    fetchLastOrder();
  }, []);

  // ✅ Fetch last order from backend
  const fetchLastOrder = async () => {
    try {
      const response = await axios.get("http://192.168.29.178:5000/last-order");
      if (response.data.success) {
        setLastOrder(response.data.order);
      }
    } catch (error) {
      console.error("❌ Error fetching last order:", error);
    } finally {
      setLoading(false);
    }
  };


  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      if (cartData) {
        setCart(
          JSON.parse(cartData).map((item) => ({
            ...item,
            price: parseFloat(item.price.replace(/[^0-9.]/g, "")), // Convert price to number
            qty: Number(item.qty) || 1,
          }))
        );
      }
    } catch (error) {
      console.log("Error loading cart:", error);
    }
  };

  // Retrieve cart items from navigation params
  const { cartItems = [] } = route.params || {};

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#47154B" />
        </TouchableOpacity>
      <Text style={styles.heading}>Order</Text>
      </View>

        {/* Order List */}
        {/* {cart.length > 0 ? (
          cart.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productColor}> {item.colour || "Gold Colour"}</Text>
                <Text style={styles.productPrice}>
                  ₹{(parseFloat(item.price || "0") * parseInt(item.qty || "1")).toFixed(0)}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No items ordered yet!</Text>
        )}
      </ScrollView> */}

      {/* Order List */}
      {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : lastOrder ? (
          <>
            {lastOrder.items.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  {/* <Text style={styles.productColor}>{item.colour || "Gold Colour"}</Text> */}
                  <Text style={styles.productPrice}>
                    ₹{(parseFloat(item.price || "0") * parseInt(item.qty || "1")).toFixed(0)}
                  </Text>
                  {/* ✅ Show Expected Delivery Text */}
            <Text style={styles.deliveryText}> Expected delivery in 2 days</Text>
                </View>
              </View>
            ))}
            
          </>
        ) : (
          <Text style={styles.emptyText}>No items ordered yet!</Text>
        )}
      </ScrollView>

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },

header: {
  flexDirection: 'row',  // Aligns items horizontally
  alignItems: 'center',  // Vertically centers items
  paddingHorizontal: wp(5),  // Ensure responsive horizontal padding
  paddingTop: hp(4),  // Ensure responsive vertical padding
  paddingBottom:hp(3),

},
heading: {
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#47154B',
  marginLeft:wp(28),
  
},


  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  productImage: {
    width: 100,
    height: 140,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  productColor: {
    fontSize: 14,
    color: "black",
    marginTop: 4,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 6,
  },

  emptyText: {
    // textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
    color: "gray",
  },

  deliveryText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginVertical: 10,
    marginRight: 1,
    marginLeft: 0,
  },
});
export default ExistingOrder;

