import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const PrivacyPolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Privacy Policy</Text>
        </View>

        {/* Content */}
        <Text style={styles.paragraph}>
          The Vishu Jewellery App is committed to protecting your privacy and ensuring the security of your personal information.
          When you use our app, we may collect personal details such as your name, email, and phone number for authentication purposes,
          along with non-personal data like device information and browsing activity to enhance your user experience. This data helps us
          improve app functionality, optimize jewellery browsing, and provide customer support. Additionally, we may use your information
          to send notifications about new collections, special offers, and updates, but you always have the option to opt out of such communications.
        </Text>

        <Text style={styles.paragraph}>
          We do not sell or rent your personal data to third parties. However, we may share limited information with legal authorities if required by law
          or with trusted third-party service providers who assist in app analytics and performance improvements. To safeguard your data,
          we implement industry-standard security measures, including encryption and secure authentication processes, to prevent unauthorized access or misuse.
          Users also have control over their personal information, with the ability to update or delete their account, disable location tracking,
          and manage notification preferences directly within the app settings.
        </Text>

        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements,
          and any modifications will be communicated to users. By continuing to use the Vishu Jewellery App,
          you acknowledge and agree to this Privacy Policy. If you have any questions or concerns about data privacy,
          you can contact us via email or phone for further assistance.
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

export default PrivacyPolicy;



