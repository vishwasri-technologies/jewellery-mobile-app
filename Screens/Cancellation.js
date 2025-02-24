import React from "react";
import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CancellationPolicy = () => {
      const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#47154B" />
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
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff",width:"102%" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  heading1: { fontSize: 18, fontWeight: "bold", marginTop: 10 ,paddingBottom:8,},
  paragraph: { fontSize: 16, lineHeight: 22, marginBottom: 10 },
  header: {
    flexDirection: 'row',  
    alignItems: 'center',  
    paddingHorizontal: wp(1),  
    paddingTop: hp(2),  
    paddingBottom:hp(2),
  
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#47154B',
    marginLeft:wp(12),
    
  },
});

export default CancellationPolicy;
