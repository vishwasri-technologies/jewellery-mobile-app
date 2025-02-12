import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

const ReturnRefundPolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Return & Refund Policy</Text>
        </View>

        {/* Content */}
        <Text style={styles.paragraph}>
        At EternaJewels, we strive to provide you with the finest quality jewelry and a seamless shopping experience. However, if you are not completely satisfied with your purchase, you may be eligible for a return or refund based on our policy. Returns must be requested within [X] days of delivery, and the item must be in its original, unused condition with all tags, certificates, and packaging intact. Certain products, such as customized jewelry, personalized pieces, and earrings, are non-returnable due to hygiene and customization reasons.
        </Text>

       

        <Text style={styles.paragraph}>
        To initiate a return, please contact our customer support team with your order details and reason for return. Once approved, you will receive instructions on how to return the item. Refunds, if applicable, will be processed after a thorough inspection of the returned product and will be credited to the original payment method within [X] business days. Please note that shipping charges and COD fees (if any) are non-refundable. In case of damaged, defective, or incorrect items received, we will arrange a free replacement or full refund.
        </Text>

        <Text style={styles.paragraph}>
        EternaJewels reserves the right to decline a return if the product is found to be used, damaged, or missing essential components. We encourage customers to review product descriptions and specifications before placing an order. For any return or refund-related queries, feel free to contact our support team at [support@eternajewels.com]. Thank you for shopping with EternaJewels!
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

export default ReturnRefundPolicy;
