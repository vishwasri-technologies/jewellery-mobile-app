import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native"; // Import useRoute
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";
import BottomNavbar from "./BottomNavbar";
import RazorpayCheckout from "react-native-razorpay";

const PaymentMethod = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { price } = route.params;
  const [openDropdown, setOpenDropdown] = useState(null);
  const [checked, setChecked] = useState(null);

  const toggleDropdown = (method) => {
    setOpenDropdown(openDropdown === method ? null : method);
  };

  const toggleShowAllBanks = () => {
    setShowAllBanks(!showAllBanks);
  };

   // ✅ Extract orderId & amount from navigation
   const { orderId, amount } = route.params || {};

   console.log("📦 Received in Payment Screen:", { orderId, amount });
 
   if (!orderId || !amount) {
     Alert.alert("Error", "Order details are missing. Please try again.");
     navigation.goBack();
     return null; // Prevent UI rendering if data is missing
   }

  const renderDropdownContent = (method) => {
    switch (method) {
      // case "EMI":
      //   return (
      //     <View>
      //       <Text style={{ color: "#C61212" }}>
      //         EMI options available only on orders above Rs.4000
      //       </Text>
      //       <TouchableOpacity style={styles.EMIbutton} onPress={() => navigation.navigate("orderconfirmation")}>
      //         <Text style={styles.EMIButtonText}>Pay ₹{price}</Text>
      //       </TouchableOpacity>
      //     </View>
      //   );
      case "UPI":
        return (
          <View>
            <TouchableOpacity
              style={styles.Option}
              onPress={() => setChecked("phonepe")}
              key="phonepe"
            >
              <Image
                source={require("../assets/paymentMethod/phonepe.png")}
                style={styles.optionIcon}
              />
              <Text style={styles.optionText}>PhonePe</Text>
              <View style={styles.radioButton}>
                <RadioButton
                  value="phonepe"
                  status={checked === "phonepe" ? "checked" : "unchecked"}
                  onPress={() => setChecked("phonepe")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Option}
              onPress={() => setChecked("paytm")}
              key="paytm"
            >
              <Image
                source={require("../assets/paymentMethod/paytm.png")}
                style={styles.optionIcon}
              />
              <Text style={styles.optionText}>Paytm</Text>
              <View style={styles.radioButton}>
                <RadioButton
                  style={styles.radioButton}
                  value="paytm"
                  status={checked === "paytm" ? "checked" : "unchecked"}
                  onPress={() => setChecked("paytm")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Option}
              onPress={() => setChecked("googlepay")}
              key="googlepay"
            >
              <Image
                source={require("../assets/paymentMethod/googlepay.png")}
                style={styles.optionIcon}
              />
              <Text style={styles.optionText}>Google Pay</Text>
              <View style={styles.radioButton}>
                <RadioButton
                  value="googlepay"
                  status={checked === "googlepay" ? "checked" : "unchecked"}
                  onPress={() => setChecked("googlepay")}
                />
              </View>
            </TouchableOpacity>
            {/* Updated UPI pay button now calls handlePayment */}
            <Text>Order ID: {orderId}</Text>
      
            <TouchableOpacity style={styles.payButton} onPress={(handleUPIPayment)}>
              <Text style={styles.payButtonText}>Pay ₹{amount}</Text>
            </TouchableOpacity>
          </View>
        );
      
      // case "NetBanking":
      //   return (
      //     <View>
      //       <TouchableOpacity
      //         style={styles.Option}
      //         onPress={() => setChecked("axisbank")}
      //         key="axisbank"
      //       >
      //         <Image
      //           source={require("../assets/paymentMethod/Axis.png")}
      //           style={styles.optionIcon}
      //         />
      //         <Text style={styles.optionText}>Axis Bank</Text>
      //         <View style={styles.radioButton}>
      //           <RadioButton
      //             value="axisbank"
      //             status={checked === "axisbank" ? "checked" : "unchecked"}
      //             onPress={() => setChecked("axisbank")}
      //           />
      //         </View>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style={styles.Option}
      //         onPress={() => setChecked("icici")}
      //         key="icici"
      //       >
      //         <Image
      //           source={require("../assets/paymentMethod/ICICI.png")}
      //           style={styles.optionIcon}
      //         />
      //         <Text style={styles.optionText}>ICICI Bank</Text>
      //         <View style={styles.radioButton}>
      //           <RadioButton
      //             style={styles.radioButton}
      //             value="icici"
      //             status={checked === "icici" ? "checked" : "unchecked"}
      //             onPress={() => setChecked("icici")}
      //           />
      //         </View>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style={styles.Option}
      //         onPress={() => setChecked("hdfc")}
      //         key="hdfc"
      //       >
      //         <Image
      //           source={require("../assets/paymentMethod/HDFC.png")}
      //           style={styles.optionIcon}
      //         />
      //         <Text style={styles.optionText}>HDFC Bank</Text>
      //         <View style={styles.radioButton}>
      //           <RadioButton
      //             value="hdfc"
      //             status={checked === "hdfc" ? "checked" : "unchecked"}
      //             onPress={() => setChecked("hdfc")}
      //           />
      //         </View>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style={styles.Option}
      //         onPress={() => setChecked("sbi")}
      //         key="sbi"
      //       >
      //         <Image
      //           source={require("../assets/paymentMethod/SBI.png")}
      //           style={styles.optionIcon}
      //         />
      //         <Text style={styles.optionText}>SBI Bank</Text>
      //         <View style={styles.radioButton}>
      //           <RadioButton
      //             value="sbi"
      //             status={checked === "sbi" ? "checked" : "unchecked"}
      //             onPress={() => setChecked("sbi")}
      //           />
      //         </View>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style={styles.Option}
      //         onPress={() => setChecked("kotak")}
      //         key="kotak"
      //       >
      //         <Image
      //           source={require("../assets/paymentMethod/Kotak.png")}
      //           style={styles.optionIcon}
      //         />
      //         <Text style={styles.optionText}>Kotak Mahindra Bank</Text>
      //         <View style={styles.radioButton}>
      //           <RadioButton
      //             value="kotak"
      //             status={checked === "kotak" ? "checked" : "unchecked"}
      //             onPress={() => setChecked("kotak")}
      //           />
      //         </View>
      //       </TouchableOpacity>
      //       <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("orderconfirmation")}>
      //         <Text style={styles.payButtonText}>Pay ₹{price}</Text>
      //       </TouchableOpacity>
      //     </View>
      //   );
      // case "Credit/Debit Card":
      //   return (
      //     <View style={styles.cardContainer}>
      //       {/* <Text style={styles.cardLabel}>Card Number</Text> */}
      //       <View style={styles.cardInputContainer}>
      //         <TextInput
      //           style={styles.cardInput}
      //           placeholder="Enter card number"
      //           keyboardType="numeric"
      //         />
      //       </View>
      //       <View style={styles.cardDetailsContainer}>
      //         <View style={styles.cardDetail}>
      //           {/* <Text style={styles.cardLabel}>MM/YY</Text> */}
      //           <TextInput
      //             style={styles.cardInput}
      //             placeholder="MM/YY"
      //             keyboardType="numeric"
      //           />
      //         </View>
      //         <View style={styles.cardDetail}>
      //           {/* <Text style={styles.cardLabel}>CVV</Text> */}
      //           <TextInput
      //             style={styles.cardInput}
      //             placeholder="CVV"
      //             keyboardType="numeric"
      //             secureTextEntry={true}
      //           />
      //         </View>
      //       </View>
      //       <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("orderconfirmation")}>
      //         <Text style={styles.payButtonText}>Pay ₹{price}</Text>
      //       </TouchableOpacity>
      //     </View>
      //   );
      case "Cash On Delivery":
        return (
          <View>
            <Text
              style={{ marginHorizontal: wp("0.1%"), fontSize: wp("3.5%") }}
            >
              Pay conveniently at your doorstep with Cash on Delivery
            </Text>
            <TouchableOpacity style={styles.payButton} 
            onPress={handleCODPayment}
            >
              <Text style={styles.payButtonText}>Pay On Cash</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  const handleUPIPayment = async () => {
        try {
          // ✅ Get the last order from AsyncStorage
          let storedOrder = await AsyncStorage.getItem("lastOrder");
      
          if (!storedOrder) {
            Alert.alert("Error", "No order found. Please place an order first.");
            return;
          }
      
          // let { orderId } = JSON.parse(storedOrder);
          let orderData = JSON.parse(storedOrder);
        let orderId = orderData.latestOrderId || orderData.orderId; // ✅ Ensure latest Order ID is used

          if (!orderId) {
            Alert.alert("Error", "Order ID is missing. Please try again.");
            return;
          }
      
          console.log("📤 Fetching order details from backend for payment:", orderId);
      
          // ✅ Fetch order details from backend
          const orderResponse = await fetch(`http://192.168.29.178:5000/get-order/${orderId}`);
         let orderDataFromBackend = await orderResponse.json();
      
          if (!orderResponse.ok || !orderDataFromBackend.order) {
            console.error("⚠️ Order not found in backend. Proceeding with payment...");
            orderDataFromBackend = { order: { totalAmount: 0, deliveryAddress: "Unknown", items: [] } };
    }
      
         
          // ✅ Ensure `items` are included
          const { items, totalAmount, deliveryAddress } = orderDataFromBackend.order;
      
          if (!items || items.length === 0) {
            console.error("❌ Cart is empty in frontend (PaymentMethod.js)!", items);
            Alert.alert("Error", "Cart cannot be empty during payment.");
            return;
          }

          if (!deliveryAddress) {
            console.error("❌ Delivery address missing in frontend!");
            Alert.alert("Error", "Delivery address is required.");
            return;
          }
      
          // ✅ Call Backend to Create Order
          const response = await fetch("http://192.168.29.178:5000/Cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId,
              items,  // ✅ Ensure cart items are sent to backend
              totalAmount,
              deliveryAddress,
            }),
          });
      
          const data = await response.json();
          if (!response.ok) throw new Error(data.error || "Error creating order");
      
          console.log("✅ Razorpay Order Created:", data);

           // ✅ Store the new Razorpay order ID in AsyncStorage
        await AsyncStorage.setItem("lastOrder", JSON.stringify({ latestOrderId: data.orderId }));

      
          // ✅ Open Razorpay Payment Gateway
          const options = {
            description: "Jewellery Payment",
            image: "https://your-logo-url.com/logo.png",
            currency: "INR",
            key: "rzp_test_bffQG9lZx8qvAs", // Replace with your actual key
            amount: totalAmount * 100, // Convert rupees to paise
            name: "Vishu's Jewellery",
            order_id: data.orderId, // Razorpay Order ID from backend
            prefill: {
              email: "akshayabonala@gmail.com",
              contact: "9000693535",
              name: "Akshaya",
            },
            theme: { color: "#F37254" },
            method: "upi", // ✅ Ensure UPI method is allowed
            upi: {
              flow: "intent", // ✅ Enables Intent-Based Google Pay Flow
            },
          };
      
          RazorpayCheckout.open(options)
            .then(async (paymentData) => {
              console.log("✅ Payment Successful", paymentData);

              const paymentId = paymentData.razorpay_payment_id;

              if (!paymentData || !paymentId) {
                  throw new Error("Invalid Payment Data Received: Missing paymentId");
              }

              console.log("📤 Sending Payment Verification to Backend...", {
                orderId: data.orderId, // ✅ Fix: Use the correct orderId
                paymentId,
                status: "Paid",
              });
      
               // ✅ Verify Payment with Backend
              const verifyResponse = await fetch(
                "http://192.168.29.178:5000/verify-payment",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    orderId: data.orderId,
                    paymentId,
                    status: "Paid",
                  }),
                }
              );
      
              const verifyData = await verifyResponse.json();

              console.log("✅ Payment Verification Response:", verifyData); 

              if (!verifyResponse.ok || verifyData.error) {
                console.warn("⚠️ Payment verification failed, but payment was successful on Razorpay.");
                Alert.alert("Warning", "Payment successful, but verification failed. Contact support.");
                return;
              }
      
              console.log("✅ Payment Verified:", verifyData);
              Alert.alert("Success", "Payment completed successfully!");
      
              // ✅ Clear Cart ONLY after successful payment
              console.log("🛒 Clearing cart...");
              await AsyncStorage.removeItem("cart");
              await AsyncStorage.removeItem("lastOrder"); // ✅ Clear order info as well
      
              // ✅ Navigate to Order Success Page
              navigation.navigate("orderconfirmation");
      
            })

        } catch (error) {
          console.error("❌ Payment Error:", error.message);
          Alert.alert("Payment Error","Transaction was unsuccessful.");
        }
      };
      

      const handleCODPayment = async () => {
        try {
          let storedOrder = await AsyncStorage.getItem("lastOrder");
      
          if (!storedOrder) {
            Alert.alert("Error", "No order found. Please place an order first.");
            return;
          }
      
          // 
          let orderData = JSON.parse(storedOrder);
          let orderId = orderData.orderId || orderData.latestOrderId; // ✅ Ensure latest Order ID is used
      
          if (!orderId) {
            Alert.alert("Error", "Order ID is missing. Please try again.");
            return;
          }
      
          console.log("📤 Storing Cash on Delivery order in database:", orderId);
      
          // ✅ Fetch Order Details
          const orderResponse = await fetch(`http://192.168.29.178:5000/get-order/${orderId}`);
          let orderDataFromBackend = await orderResponse.json();
      
          if (!orderResponse.ok || !orderDataFromBackend.order) {
            console.warn("⚠️ Order not found in backend. Proceeding...");
            orderDataFromBackend = { order: { totalAmount: price, deliveryAddress: "Unknown Address", items: [] } };
          }
      
          const { totalAmount, deliveryAddress, items } =  orderDataFromBackend.order;
      
          if (!deliveryAddress) {
            console.error("❌ Delivery address missing!");
            Alert.alert("Error", "Delivery address is required.");
            return;
          }
      
          // ✅ Call Backend to Store COD Order
          const response = await fetch("http://192.168.29.178:5000/cod-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId, // ✅ Send Correct Order ID
              items,
              totalAmount,
              deliveryAddress,
              paymentMode: "COD", // ✅ Indicate COD payment mode
            }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            throw new Error(data.error || "Error placing COD order");
          }
      
          console.log("✅ COD Order Stored Successfully:", data);
      
          Alert.alert("Success", "Your COD order has been placed successfully!");
      
          // ✅ Clear Cart After Successful Order Storage
          console.log("🛒 Clearing cart...");
          await AsyncStorage.removeItem("cart");
          await AsyncStorage.removeItem("lastOrder");
      
          // ✅ Navigate to Order Confirmation Page
          navigation.replace("orderconfirmation");
        } catch (error) {
          console.error("❌ COD Order Error:", error.message);
          Alert.alert("Error", "Something went wrong while placing your order. Please try again.");
        }
      };
      
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="arrow-back" size={wp("6%")} color="#47154B" />
          </TouchableOpacity>
          <Text style={styles.title}>Payment Method</Text>
        </View>

        <View style={styles.list}>
          {[
            // "EMI",
            "UPI",
            // "NetBanking",
            // "Credit/Debit Card",
            "Cash On Delivery",
          ].map((method) => (
            <View key={method}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => toggleDropdown(method)}
              >
                <Text style={styles.menuText}>{method}</Text>
                <TouchableOpacity
                  style={styles.plusbutton}
                  onPress={() => toggleDropdown(method)}
                >
                  <Image
                    source={require("../assets/paymentMethod/plus.png")}
                    style={styles.plusbutton}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              {openDropdown === method && (
                <View style={styles.dropdownContent}>
                  {renderDropdownContent(method)}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    padding: wp("3%"),
    marginTop: hp("4%"),
  },
  backButton: {
    padding: wp("2%"),
  },
  backIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
  title: {
    color: "#47154B",
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginHorizontal: wp("13%"),
    marginTop: hp("0.5%"),
  },
  list: {
    marginVertical: hp("2%"),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp("2%"),
    elevation: 4,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginHorizontal: wp("5%"),
    marginBottom: wp("4%"),
    paddingLeft: wp("3.2%"),
    paddingVertical: hp("1.5%"),
    zIndex: 1,
  },
  menuText: {
    fontSize: wp("4.5%"),
    marginLeft: wp("1%"),
  },
  plusbutton: {
    position: "absolute",
    right: 10,
    top: 9,
    width: wp("4%"),
    height: wp("4%"),
    resizeMode: "contain",
    color: "#641E69",
  },
  dropdownContent: {
    flexDirection: "column",
    borderRadius: wp("2%"),
    elevation: 2,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginHorizontal: wp("5%"),
    marginTop: wp("-3%"),
    marginBottom: wp("7%"),
    paddingLeft: wp("3.2%"),
    paddingVertical: hp("2%"),
  },
  dropdownTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  Option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp("1%"),
    width: wp("100%"),
    paddingTop: hp("1%"),
  },
  radioButton: {
    right: 65,
    position: "absolute",
  },
  optionIcon: {
    width: wp("6.5%"),
    height: wp("6.5%"),
    resizeMode: "contain",
    marginRight: wp("4%"),
  },
  optionText: {
    fontSize: wp("4%"),
  },
  EMIbutton: {
    marginTop: hp("2%"),
    marginHorizontal: hp("2%"),
    marginRight: hp("4%"),
    borderColor: "#ccc",
    borderRadius: 8,
    padding: hp("1.5%"),
    alignItems: "center",
    backgroundColor: "#641E69",
    opacity: 0.7,
  },
  EMIButtonText: {
    color: "white",
    fontSize: wp("4.5%"),
    fontWeight: "bold",
  },
  cardContainer: {
    marginTop: hp("1%"),
    paddingRight: wp("3%"),
  },
  cardInputContainer: {
    backgroundColor: "#F1F1F1", // Light grey background
    // borderWidth: 1,
    borderColor: "#E0E0E0", // Light border
    borderRadius: wp("1%"), // Slightly rounded corners
    paddingLeft: wp("3%"),
    padding: wp("1%"),
    marginBottom: hp("2%"),
  },
  cardInput: {
    fontSize: wp("4%"),
    color: "#333", // Darker text for input
  },
  cardDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("2%"),
  },
  cardDetail: {
    width: "48%",
    backgroundColor: "#F1F1F1", // Light grey background
    // borderWidth: 1,
    borderColor: "#E0E0E0", // Light border
    borderRadius: wp("1%"), // Slightly rounded corners
    paddingLeft: wp("3%"),
    padding: wp("1%"),
  },
  payButton: {
    marginTop: hp("2%"),
    marginHorizontal: hp("2%"),
    marginRight: hp("4%"),
    borderColor: "#ccc",
    borderRadius: 8,
    padding: hp("1.5%"),
    alignItems: "center",
    backgroundColor: "#641E69",
  },
  payButtonText: {
    color: "white",
    fontSize: wp("4.5%"),
    fontWeight: "bold",
  },
});

export default PaymentMethod;
