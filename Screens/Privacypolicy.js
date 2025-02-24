import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity,Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"); 

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
        The Vishu Jewellery App is committed to protecting your privacy and ensuring the security of your personal information. When you use our app, we may collect personal details such as your name, email, and phone number for authentication purposes, along with non-personal data like device information and browsing activity to enhance your user experience. This data helps us improve app functionality, optimize jewellery browsing, and provide customer support. Additionally, we may use your information to send notifications about new collections, special offers, and updates, but you always have the option to opt out of such communications.
        We do not sell or rent your personal data to third parties. However, we may share limited information with legal authorities if required by law or with trusted third-party service providers who assist in app analytics and performance improvements. To safeguard your data, we implement industry-standard security measures, including encryption and secure authentication processes, to prevent unauthorized access or misuse. Users also have control over their personal information, with the ability to update or delete their account, disable location tracking, and manage notification preferences directly within the app settings.
        </Text>

       

        <Text style={styles.paragraph}>
        We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements, and any modifications will be communicated to users. By continuing to use the Vishu Jewellery App, you acknowledge and agree to this Privacy Policy. If you have any questions or concerns about data privacy, you can contact us via email or phone for further assistance.
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


export default PrivacyPolicy;



// import React from "react";
// import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions, useWindowDimensions } from "react-native";

// const PrivacyPolicy = ({ navigation }) => {
//   const { width } = useWindowDimensions();
//   const isSmallDevice = width < 375; // Check if the device width is small

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
//           </TouchableOpacity>
//           <Text style={styles.title}>Privacy Policy</Text>
//         </View>

//         {/* Content */}
//         <Text style={[styles.paragraph, { fontSize: isSmallDevice ? 16 : 18 }]}> 
//           The Vishu Jewellery App is committed to protecting your privacy and ensuring the security of your personal information. When you use our app, we may collect personal details such as your name, email, and phone number for authentication purposes, along with non-personal data like device information and browsing activity to enhance your user experience. This data helps us improve app functionality, optimize jewellery browsing, and provide customer support. Additionally, we may use your information to send notifications about new collections, special offers, and updates, but you always have the option to opt out of such communications.
//           We do not sell or rent your personal data to third parties. However, we may share limited information with legal authorities if required by law or with trusted third-party service providers who assist in app analytics and performance improvements. To safeguard your data, we implement industry-standard security measures, including encryption and secure authentication processes, to prevent unauthorized access or misuse. Users also have control over their personal information, with the ability to update or delete their account, disable location tracking, and manage notification preferences directly within the app settings.
//         </Text>

//         <Text style={[styles.paragraph, { fontSize: isSmallDevice ? 16 : 18 }]}> 
//           We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements, and any modifications will be communicated to users. By continuing to use the Vishu Jewellery App, you acknowledge and agree to this Privacy Policy. If you have any questions or concerns about data privacy, you can contact us via email or phone for further assistance.
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: Dimensions.get("window").width * 0.05, 
//     paddingTop: 30,
//   },
//   scrollContainer: {
//     paddingBottom: 40,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   backButton: {
//     padding: 10,
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: Dimensions.get("window").width < 375 ? 20 : 22, 
//     fontWeight: "bold",
//     color: "#6A0572",
//     textAlign: "center",
//     flex: 1,
//     marginRight: "15%",
//   },
//   paragraph: {
//     fontSize: 18, 
//     color: "#333",
//     lineHeight: 22,
//     marginBottom: 15,
//     textAlign: "justify",
//     letterSpacing:0.2,
//   },
// });

// export default PrivacyPolicy;
