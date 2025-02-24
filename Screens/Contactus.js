import React from "react";
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#47154B" />
        </TouchableOpacity>
      <Text style={styles.heading}>Contact Us</Text>
      </View>
      <Text style={styles.paragraph}>
      Thank you for using the Vishu Jewellery App! We are dedicated to providing you with a seamless and enjoyable jewellery browsing experience. If you have any questions, need assistance, or have any inquiries regarding our jewellery collections, orders, or app functionality, please feel free to get in touch with us.
      </Text>

      <Text style={styles.heading1}>How to Reach Us</Text>
      <Text style={styles.paragraph}>
        We currently do not have a dedicated customer support team, but you can contact us directly through:
      </Text>

      <Text style={styles.info}> Address: </Text>
      <Text style={styles.info}> Email: </Text>
      <Text style={styles.info}> Phone:</Text>

      <Text style={styles.heading1}>Response Time</Text>
      <Text style={styles.paragraph}>
      We do our best to respond to all inquiries as soon as possible. However, please note that response times may vary based on the nature of the query. For faster assistance, we recommend reaching out via phone during business hours or email for non-urgent matters.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  
  heading1: { fontSize: 18, fontWeight: "bold", marginTop: 15,paddingBottom:20, },
  paragraph: { fontSize: 16, lineHeight: 22, marginBottom: 10 },
  info: { fontSize: 16, marginVertical: 5, fontWeight: "bold" },
  header: {
    flexDirection: 'row',  
    alignItems: 'center',  
    paddingHorizontal: wp(3),  
    paddingTop: hp(6),  
    paddingBottom:hp(2),
  
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#47154B',
    marginLeft:wp(22),
    
  },
});

export default ContactUs;
