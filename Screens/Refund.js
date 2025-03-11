import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

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
          At Vishu Jewellery, we strive to provide you with the finest quality jewelry and a seamless shopping experience.
          However, if you are not completely satisfied with your purchase, you may be eligible for a return or refund based on our policy.
          Returns must be requested within 7 days of delivery, and the item must be in its original, unused condition with all tags, certificates, and packaging intact.
        </Text>

        <Text style={styles.paragraph}>
          To initiate a return, please contact us with your order details and reason for return. Once approved, you will receive instructions on how to return the item.
          Refunds, if applicable, will be processed after a thorough inspection of the returned product and will be credited to the original payment method within 7 business days.
          Please note that shipping charges and COD fees (if any) are non-refundable. In case of damaged, defective, or incorrect items received, we will arrange a free replacement or full refund.
        </Text>

        <Text style={styles.paragraph}>
          Vishu Jewellery reserves the right to decline a return if the product is found to be used, damaged, or missing essential components.
          We encourage customers to review product descriptions and specifications before placing an order. Thank you for shopping with Vishu Jewellery!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp("5%"),
    paddingTop: hp("5%"),
  },
  scrollContainer: {
    paddingBottom: hp("5%"),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
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
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#6A0572",
    textAlign: "center",
    flex: 1,
    marginRight: wp("10%"),
  },
  paragraph: {
    fontSize: wp("4%"),
    color: "#333",
    lineHeight: hp("3%"),
    marginBottom: hp("2%"),
  },
});

export default ReturnRefundPolicy;






