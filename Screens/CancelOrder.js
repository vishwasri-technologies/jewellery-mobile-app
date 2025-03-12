
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomNavBar from "./BottomNavbar"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const CancelOrder = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [reason, setReason] = useState("");
  const navigation = useNavigation();

  const radioButtons = [
    { id: "1", label: "Ordered by Mistake", value: "Ordered by Mistake" },
    { id: "2", label: "Found a Better Option", value: "Found a Better Option" },
    { id: "3", label: "I no longer want this product.", value: "I no longer want this product." },
    { id: "4", label: "The estimated delivery time is too long", value: "The estimated delivery time is too long" },
    { id: "5", label: "Other", value: "Other" },
  ];

  const handleCancelOrder = async () => {
    if (!selectedId) {
      Alert.alert("Validation Error", "Please select a reason for cancellation.");
      return;
    }
  
    if (!reason.trim()) {
      Alert.alert("Validation Error", "Please provide a reason for cancellation.");
      return;
    }
  
    try {
      const token = await AsyncStorage.getItem("authToken"); // ✅ Retrieve auth token
    if (!token) {
      Alert.alert("Unauthorized", "Please log in to cancel your order.");
      return;
    }
      const response = await fetch("http://192.168.29.178:5000/cancel-last-order", {
        method: "POST",
        headers: { "Content-Type": "application/json",
                   Authorization: `Bearer ${token}`
         },
        body: JSON.stringify({ reason }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to cancel order");
      }
  
      Alert.alert("Order Canceled", "Your order has been canceled successfully.");
      navigation.navigate("existingorder"); // ✅ Navigate to existing orders
    } catch (error) {
      console.error("❌ Cancellation Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#47154B" />
          </TouchableOpacity>
          <Text style={styles.heading}>Cancel</Text>
        </View>

        {/* Question */}
        <Text style={styles.question}>Why do you want to cancel your order?</Text>

        {/* Radio Buttons */}
        <View style={styles.radioContainer}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            containerStyle={styles.radioGroup}
            layout="column"
            size={16}
          />
        </View>

        {/* Reason Input */}
        <Text style={styles.label}>Reason</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your reason here..."
          multiline
          numberOfLines={4}
          value={reason}
          onChangeText={setReason}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleCancelOrder}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: wp(4),
    paddingBottom: hp(12), // Extra padding to prevent overlap with BottomNavBar
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(2),
    paddingTop: hp(4),
    paddingBottom: hp(3),
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#47154B",
    marginLeft: "30%",
  },
  question: {
    fontSize: 18,
    color: "#47154B",
    marginBottom: 10,
  },
  radioContainer: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
  radioGroup: {
    alignItems: "flex-start",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#47154B",
    marginBottom: 5,
  },
  input: {
    height: hp(12),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#4A1A4D",
    paddingVertical: hp(1.8),
    borderRadius: 8,
    alignItems: "center",
    marginTop: hp(2),
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CancelOrder;


