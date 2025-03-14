import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const TermsAndConditions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false} 
      >
        {/* Header container */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image
              source={require("../assets/profileImgs/back.png")} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Terms & Conditions</Text>
        </View>

        <Text style={styles.paragraph}>
          Welcome to Vishu Jewellery! By using our app, you agree to abide by these Terms & Conditions. We encourage you to read them carefully before making any purchases. Our platform allows users to browse and purchase jewelry, and all transactions are subject to product availability and successful payment. Prices, product descriptions, and availability may change without prior notice. We reserve the right to cancel orders in case of pricing errors, stock issues, or fraudulent activities.
        </Text>
        <Text style={styles.paragraph}>
          Users must create an account with accurate details and are responsible for maintaining the confidentiality of their login credentials. Any unauthorized use or fraudulent activity may result in account suspension. Payments must be completed through our secure payment gateways, and orders are confirmed only after successful transactions. Shipping and delivery times vary based on location, and tracking details will be shared upon dispatch. While we strive for timely delivery, unforeseen delays due to external factors such as courier issues or natural calamities are beyond our control.
        </Text>
        <Text style={styles.paragraph}>
          Our return policy applies only to eligible products, and return requests must be made within the specified period. Refunds, if applicable, will be processed within the defined timeframe and returned to the original payment method. Warranty and repair services may not be available for products.
        </Text>
        <Text style={styles.paragraph}>
          All content, including images, text, and branding, is the intellectual property of Vishu Jewellery and is protected. Unauthorized use, reproduction, or distribution is strictly prohibited. We value your privacy and handle personal data per our Privacy Policy, ensuring secure transactions and data protection. By using our app, you acknowledge that Vishu Jewellery is not liable for damages resulting from product misuse, third-party errors, or delays beyond our control. Our liability is limited to the total value of the purchased product. 
        </Text>
        <Text style={styles.paragraph}>
          These Terms & Conditions are governed by the laws of India, and any disputes shall be resolved through arbitration or legal proceedings in the applicable jurisdiction. If you have any questions or concerns, feel free to contact us at [VISHWASRITECHNOLOGIES@vishcom.net]. 
        </Text>
        <Text style={styles.paragraph}>
          The revenue and transactions processed through the Vishu Jewellery App belong to and are managed by Vishwasri Technologies Private Limited.
        </Text>
        <Text style={styles.paragraph}>
          Thank you for choosing VishuJewellery – happy shopping!
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
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: "#6A0572",
    textAlign: "center",
    flex: 1, 
    marginRight: wp("8%"),
  },
  paragraph: {
    fontSize: wp("4%"),
    color: "#333",
    lineHeight: hp("3%"),
    marginBottom: hp("2%"),
    width: "100%",
  },
});

export default TermsAndConditions;

