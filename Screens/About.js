// import React from "react";
// import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

// const AboutUs = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
//           </TouchableOpacity>
//           <Text style={styles.title}>About Us</Text>
//         </View>

//         {/* Content */}
//         <Text style={styles.sectionTitle}>Our Story</Text>
//         <Text style={styles.paragraph}>
//         At VishuJewellery, we believe that jewelry is more than just an accessory—it’s a reflection of elegance, emotions, and timeless beauty. Our journey began with a vision to bring exquisite, high-quality jewelry to those who appreciate craftsmanship and style. From everyday elegance to special occasions, we offer a curated collection that complements every moment of your life.
//         </Text>

//         <Text style={styles.sectionTitle}>Our Collection</Text>
//         <Text style={styles.paragraph}>
//         We specialize in offering a diverse range of rings, necklaces, bracelets, earrings, bangles, and more. Every piece is crafted with precision and passion, ensuring a perfect blend of tradition and modernity. Whether you seek minimalistic designs or statement pieces, our collection is designed to suit all styles and preferences.
//         </Text>

//         <Text style={styles.sectionTitle}>Why Choose Us?</Text>
//         <Text style={styles.paragraph}>
//   <Text style={styles.bold}>Authenticity Guaranteed</Text><Text> – Every piece is certified for purity and quality.{"\n"}</Text>
//   <Text style={styles.bold}>Exclusive Designs</Text><Text> – Handpicked and handcrafted collections for every occasion.{"\n"}</Text>
//   <Text style={styles.bold}>Secure Shopping</Text><Text> – A seamless, safe, and convenient shopping experience.{"\n"}</Text>
//   <Text style={styles.bold}>Fast & Reliable Delivery</Text><Text> – We ensure timely delivery with secure packaging.{"\n"}</Text>
//   <Text style={styles.bold}>Customer Satisfaction</Text><Text> – Your Happiness is our priority, with hassle-free returns and dedicated support.</Text>
// </Text>


//         <Text style={styles.sectionTitle}>Our Commitment</Text>
//         <Text style={styles.paragraph}>
//         At VishuJewellery, we are committed to delivering not just jewelry but a lifetime of cherished memories. Whether you’re shopping for yourself or looking for the perfect gift, we’re here to make every purchase special.
// Discover elegance. Celebrate moments. Shop with VishuJewellery!
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 30 },
//   scrollContainer: { paddingBottom: 40 },
//   header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
//   backButton: { padding: 10 },
//   backIcon: { width: 24, height: 24, resizeMode: "contain" },
//   title: { fontSize: 22, fontWeight: "bold", color: "#6A0572", textAlign: "center", flex: 1 , marginRight: "15%",},
//   sectionTitle: { fontSize: 18, fontWeight: "bold", color: "black", marginBottom: 10 },
//   paragraph: { fontSize: 16, color: "#333", lineHeight: 22, marginBottom: 15 },
//   bold: {
//     fontWeight: "bold",
//   },
// });

// export default AboutUs;
























import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>About Us</Text>
        </View>

        {/* Content */}
        <Text style={styles.sectionTitle}>Our Story</Text>
        <Text style={styles.paragraph}>
          At VishuJewellery, we believe that jewelry is more than just an accessory—it’s a reflection of elegance, emotions, and timeless beauty.
          Our journey began with a vision to bring exquisite, high-quality jewelry to those who appreciate craftsmanship and style. From everyday elegance
          to special occasions, we offer a curated collection that complements every moment of your life.
        </Text>

        <Text style={styles.sectionTitle}>Our Collection</Text>
        <Text style={styles.paragraph}>
          We specialize in offering a diverse range of rings, necklaces, bracelets, earrings, bangles, and more. Every piece is crafted with precision and passion,
          ensuring a perfect blend of tradition and modernity. Whether you seek minimalistic designs or statement pieces, our collection is designed to suit all styles and preferences.
        </Text>

        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Authenticity Guaranteed</Text><Text> – Every piece is certified for purity and quality.{"\n"}</Text>
          <Text style={styles.bold}>Exclusive Designs</Text><Text> – Handpicked and handcrafted collections for every occasion.{"\n"}</Text>
          <Text style={styles.bold}>Secure Shopping</Text><Text> – A seamless, safe, and convenient shopping experience.{"\n"}</Text>
          <Text style={styles.bold}>Fast & Reliable Delivery</Text><Text> – We ensure timely delivery with secure packaging.{"\n"}</Text>
          <Text style={styles.bold}>Customer Satisfaction</Text><Text> – Your Happiness is our priority, with hassle-free returns and dedicated support.</Text>
        </Text>

        <Text style={styles.sectionTitle}>Our Commitment</Text>
        <Text style={styles.paragraph}>
          At VishuJewellery, we are committed to delivering not just jewelry but a lifetime of cherished memories. Whether you’re shopping for yourself or looking for the perfect gift,
          we’re here to make every purchase special. Discover elegance. Celebrate moments. Shop with VishuJewellery!
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
  sectionTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
    color: "black",
    marginBottom: hp("1.5%"),
  },
  paragraph: {
    fontSize: wp("4%"),
    color: "#333",
    lineHeight: hp("3%"),
    marginBottom: hp("2%"),
  },
  bold: {
    fontWeight: "bold",
  },
});

export default AboutUs;

