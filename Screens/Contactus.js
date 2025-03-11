import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={wp(6)} color="#47154B" />
        </TouchableOpacity>
        <Text style={styles.heading}>Contact Us</Text>
      </View>

      {/* Content */}
      <Text style={styles.paragraph}>
        Thank you for using the Vishu Jewellery App! We are dedicated to providing you with a seamless and enjoyable jewellery browsing experience. If you have any questions, need assistance, or have any inquiries regarding our jewellery collections, orders, or app functionality, please feel free to get in touch with us.
      </Text>

      <Text style={styles.heading1}>How to Reach Us</Text>
      <Text style={styles.paragraph}>
        We currently do not have a dedicated customer support team, but you can contact us directly through:
      </Text>

      <Text style={styles.info}>
        Email: <Text style={styles.value}>VISHWASRITECHNOLOGIES@vishcom.net</Text>
      </Text>
      <Text style={styles.info}>
        Phone: <Text style={styles.value}>7330669716</Text>
      </Text>

      <Text style={styles.heading1}>Response Time</Text>
      <Text style={styles.paragraph}>
        We do our best to respond to all inquiries as soon as possible. However, please note that response times may vary based on the nature of the query. For faster assistance, we recommend reaching out via phone during business hours or email for non-urgent matters.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: wp(5), 
    backgroundColor: "#fff", 
    paddingTop: hp(5) 
  },
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
    marginBottom: hp(1) 
  },
  paragraph: { 
    fontSize: wp(4), 
    lineHeight: hp(2.5), 
    marginBottom: hp(1.5) 
  },
  info: {
    fontSize: wp(4), 
    color: 'black',
    fontWeight: "bold",
    marginBottom: hp(1),
  },
  value: {
    fontSize: wp(3.8), 
    color: 'black', 
    fontWeight: "400",
  },
});

export default ContactUs;

