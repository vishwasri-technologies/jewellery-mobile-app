import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList,Image, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useFocusEffect } from "@react-navigation/native";

const AddressList = ({ navigation, route }) => {

  // const addresses = [
  //   {
  //     id: "1",
  //     name: "Shambavi",
  //     pincode: "518003",
  //     details: "Kallur Estate Near Shukulamma Temple, Nagula Chatu, Kalluru, Kurnool",
  //     phone: "80093 42392",
  //   },
  // ];

  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAddresses();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchAddresses();
    }, [route?.params?.refresh]) // ✅ Refresh when `refresh` param is passed
  );

  const fetchAddresses = async () => {
    try {
      const response = await fetch("http://192.168.29.178:5000/ProfileAddress"); // Replace with your actual backend URL
      const data = await response.json();
      setAddresses(data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAddress = async (id) => {
    try {
      const response = await fetch(`http://192.168.29.178:5000/ProfileAddress/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error(`❌ Server error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
  
      alert("✅ Address deleted successfully!");
  
      // ✅ Remove the deleted address from the UI
      setAddresses((prevAddresses) => prevAddresses.filter((item) => item._id !== id));
      
    } catch (error) {
      console.error("❌ Error deleting address:", error);
      alert("❌ Failed to delete address. Please try again.");
    }
  };
  
  
  


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
               <Image
                 source={require("../assets/profileImgs/back.png")} // Replace with actual back icon
                 style={styles.backIcon}
               />
             </TouchableOpacity>

        <Text style={styles.headerTitle}>Address</Text>
      </View>

      {/* Add Address Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("addaddress")}>
        <Text style={styles.addButtonText}>+ Add Address</Text>
      </TouchableOpacity>

      {/* Loading Indicator */}
      {loading ? (
        <ActivityIndicator size="large" color="#47154B" style={{ marginTop: 20 }} />
      ) : addresses.length === 0 ? (
        <Text style={styles.noAddressText}>No addresses found.</Text>
      ) : (
        <FlatList
          data={addresses}
          keyExtractor={(item) => item._id} // Make sure _id is returned from MongoDB
          renderItem={({ item }) => (
            <View style={styles.addressCard}>
              <View style={styles.addressTextContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>{item.pincode}</Text>
                <Text style={styles.details}>
          {`${item.houseNo}, ${item.locality}, ${item.city}, ${item.state}`}
        </Text>
                <Text style={styles.phone}>Phone: {item.phone}</Text>
              </View>
             

            <View style={styles.iconContainer}>
  
  <TouchableOpacity onPress={() => deleteAddress(item._id)}>
    <Image 
      source={require("../assets/icons/delete.png")} // Replace with your actual delete icon image
      style={styles.icon}
    />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("editaddress", { address: item })}>
    <Image 
      source={require("../assets/icons/edit.png")} // Replace with your actual edit icon image
      style={styles.icon}
    />
  </TouchableOpacity>
</View>

          </View>
        )}
      />

          )}
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F2", padding: wp("5%"),marginTop:hp("4%") },
  header: { flexDirection: "row", alignItems: "center", marginBottom: hp("2%"), },

  headerTitle: { flex: 1, textAlign: "center", fontSize: wp("6%"), fontWeight: "bold", color: "#47154B" , marginRight: wp("10%"),},
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
  iconContainer: { flexDirection: "row", gap: wp("4%"),marginTop:"-31%" },
  icon: {
    width: 20,  // Adjust size as needed
    height: 30, 
    resizeMode: "contain",
   
  },
  
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  
  
});

export default AddressList;
