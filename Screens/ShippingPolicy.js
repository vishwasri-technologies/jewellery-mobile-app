import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity,Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"); 

const ShippingPolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Shipping Policy</Text>
        </View>

        {/* Content */}
        <Text style={styles.paragraph}>
        The Vishu Jewellery App is committed to delivering jewellery safely and efficiently. Once an order is confirmed, it will be processed and shipped within given business days to the address provided at checkout. While we ensure timely dispatch and users can track their order status directly within the "Orders" section in the Profile page of the app. Delivery timelines may vary depending on location.
        </Text>

       

        <Text style={styles.paragraph}>
        
We offer standard shipping to select locations, and any applicable shipping charges will be displayed at checkout before completing the purchase. All jewellery items are securely packaged to prevent damage during transit. While we strive to deliver orders on time, delays may occasionally occur due to factors beyond our control, such as weather conditions or courier issues.
Customers are responsible for providing the correct shipping address at checkout, as we do not take responsibility for lost or misdelivered orders due to incorrect address details. If you have any concerns or need assistance regarding your shipment, please contact our support team through the app. By placing an order on the Vishu Jewellery App, you agree to this Shipping Policy.
        </Text>


       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 30 },
  scrollContainer: { paddingBottom: 40 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backButton: { padding: 10 },
  backIcon: { width: 24, height: 24, resizeMode: "contain" },
  title: { fontSize: 22, fontWeight: "bold", color: "#6A0572", textAlign: "center", flex: 1, marginRight: "15%", },
  paragraph: { fontSize: 16, color: "#333", lineHeight: 22, marginBottom: 15 },
});


export default ShippingPolicy;






