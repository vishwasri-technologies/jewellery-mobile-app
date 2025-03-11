import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

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
          The Vishu Jewellery App is committed to delivering jewellery safely and efficiently. Once an order is confirmed,
          it will be processed and shipped within given business days to the address provided at checkout. While we ensure timely dispatch,
          users can track their order status directly within the "Orders" section in the Profile page of the app. Delivery timelines may vary depending on location.
        </Text>

        <Text style={styles.paragraph}>
          We offer standard shipping to select locations, and any applicable shipping charges will be displayed at checkout before completing the purchase.
          All jewellery items are securely packaged to prevent damage during transit. While we strive to deliver orders on time, delays may occasionally occur
          due to factors beyond our control, such as weather conditions or courier issues.
          Customers are responsible for providing the correct shipping address at checkout, as we do not take responsibility for lost or misdelivered orders due
          to incorrect address details. If you have any concerns or need assistance regarding your shipment, please contact our support team through the app.
          By placing an order on the Vishu Jewellery App, you agree to this Shipping Policy.
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
    fontSize: wp("5.5%"),
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

export default ShippingPolicy;







