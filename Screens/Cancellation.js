import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CancellationPolicy = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={wp(6)} color="#47154B" />
          </TouchableOpacity>
          <Text style={styles.heading}>Cancellation Policy</Text>
        </View>

        <Text style={styles.paragraph}>
          At Vishu Jewellery App, we understand that sometimes you may need to cancel an order. To ensure a hassle-free experience, we provide a simple cancellation option directly within the app. Customers can cancel their orders through the "Order Track" page before the order is shipped.
        </Text>

        <Text style={styles.heading1}>1. How to Cancel an Order</Text>
        <Text style={styles.paragraph}>
          • Users can cancel their order anytime before it is shipped by navigating to the "Order Track" page in the app.{"\n"}
          • Once the cancellation request is submitted, the order will be marked as canceled, and a refund (if applicable) will be processed.
        </Text>

        <Text style={styles.heading1}>2. Cancellation After Shipment</Text>
        <Text style={styles.paragraph}>
          • Once an order has been shipped, cancellation is not allowed through the app.{"\n"}
          • If the order has already been dispatched, customers can reject the delivery upon arrival, and the order will be returned to us. Refunds for rejected deliveries will be processed once we receive the returned item.
        </Text>

        <Text style={styles.heading1}>3. Refund Process</Text>
        <Text style={styles.paragraph}>
          • Canceled orders before shipment will be refunded within 7 business days to the original payment method.{"\n"}
          • Orders that are rejected at the time of delivery will be refunded after verification of the returned item.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
  },
  // scrollContainer: {
  //   paddingBottom: hp(10),
  // },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
  },
  backButton: {
    padding: wp(2),
  },
  heading: {
    fontSize: wp(6),
    fontWeight: "bold",
    textAlign: "center",
    color: "#47154B",
    flex: 1,
    marginRight: wp(8),
  },
  heading1: { 
    fontSize: wp(5), 
    fontWeight: "bold", 
    marginTop: hp(2), 
    marginBottom: hp(1),
  },
  paragraph: { 
    fontSize: wp(4), 
    lineHeight: hp(2.5), 
    marginBottom: hp(1.5), 
  },
});

export default CancellationPolicy;

