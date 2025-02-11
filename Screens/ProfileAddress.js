import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AddressList = ({ navigation }) => {

  const addresses = [
    {
      id: "1",
      name: "Shambavi",
      pincode: "518003",
      details: "Kallur Estate Near Shukulamma Temple, Nagula Chatu, Kalluru, Kurnool",
      phone: "80093 42392",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity
  onPress={() => {
    console.log("Back button pressed");
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      alert("No previous screen available!");
    }
  }}
  style={styles.backButton}
>
  <Image
    source={require("../assets/profileImgs/back.png")} // Ensure this image exists
    style={styles.backIcon}
  />
</TouchableOpacity>

        <Text style={styles.headerTitle}>Address</Text>
      </View>

      {/* Add Address Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("addaddress")}>
        <Text style={styles.addButtonText}>+ Add Address</Text>
      </TouchableOpacity>

      {/* Address List */}
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.addressCard}>
            <View style={styles.addressTextContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>{item.pincode}</Text>
              <Text style={styles.details}>{item.details}</Text>
              <Text style={styles.phone}>Phone: {item.phone}</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("editaddress")}>
                <Ionicons name="create-outline" size={24} color="#47154B" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F2", padding: wp("5%"),marginTop:hp("4%") },
  header: { flexDirection: "row", alignItems: "center", marginBottom: hp("2%"), },
  backButton: { position: "absolute", left: 0 },
  headerTitle: { flex: 1, textAlign: "center", fontSize: wp("6%"), fontWeight: "bold", color: "#47154B",marginLeft:"-45" },
  addButton: { alignSelf: "flex-end", marginBottom: hp("2%") },
  addButtonText: { fontSize: wp("4.5%"), color: "#47154B", fontWeight: "bold" },
  addressCard: {
    backgroundColor: "#fff",
    padding: hp("2%"),
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  addressTextContainer: { flex: 1 },
  name: { fontSize: wp("4.5%"), fontWeight: "bold", marginBottom: hp("0.5%") },
  details: { fontSize: wp("4%"), color: "#555", marginBottom: hp("0.5%") },
  phone: { fontSize: wp("4%"), fontWeight: "bold", marginTop: hp("0.5%") },
  iconContainer: { flexDirection: "row", gap: wp("4%") },
  backButton: {
    // padding: wp("2%"),
    // marginRight: wp("2%"),
  },
  backIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
  
  
});

export default AddressList;
