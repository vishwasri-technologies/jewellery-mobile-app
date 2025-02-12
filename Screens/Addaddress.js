import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,Image, Alert } from "react-native";
import { CheckBox } from "react-native-elements"; // ✅ Use native-elements CheckBox
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AddAddress = () => {
  const navigation = useNavigation();
  const [addressType, setAddressType] = useState("");

  // ✅ State variables for input fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [houseNo, setHouseNo] = useState("");

  // ✅ Validation Function
  const validateInputs = () => {
    if (!name.trim()) {
      Alert.alert("Validation Error", "Name is required!");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert("Validation Error", "Phone number must be 10 digits!");
      return false;
    }
    if (!/^\d{6}$/.test(pincode)) {
      Alert.alert("Validation Error", "Pincode must be 6 digits!");
      return false;
    }
    if (!state.trim()) {
      Alert.alert("Validation Error", "State is required!");
      return false;
    }
    if (!city.trim()) {
      Alert.alert("Validation Error", "City is required!");
      return false;
    }
    if (!locality.trim()) {
      Alert.alert("Validation Error", "Locality/Area is required!");
      return false;
    }
    if (!houseNo.trim()) {
      Alert.alert("Validation Error", "House/Building No is required!");
      return false;
    }
    if (!addressType) {
      Alert.alert("Validation Error", "Please select an Address Type!");
      return false;
    }
    return true;
  };
  
  // ✅ Save Address Function
  const saveAddress = async () => {
    if (!validateInputs()) return; // ✅ Stop if validation fails

    const addressData = { name, phone, pincode, state, city, locality, houseNo, addressType };

    try {
      const response = await fetch("http://192.168.29.178:5000/Addaddress", { // ✅ Corrected API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressData),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("✅ Address saved successfully!");
        navigation.goBack();

        // ✅ Trigger refresh after navigation back
      navigation.navigate("profileaddress", { refresh: true });
      } else {
        Alert.alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("❌ Save address error:", error);
      Alert.alert("❌ Error", "Failed to save address. Please try again.");
    }
  };


  

  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image source={require("../assets/profileImgs/back.png")} style={styles.backIcon} />
                      </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Add Address</Text>
        </View>

        {/* Personal Details */}
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName}/>
        <Text style={styles.inputLabel}>Phone No</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        {/* Address Details */}
        <Text style={styles.sectionTitle}>Address Details</Text>
        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.inputLabel}>Pincode</Text>
            <TextInput style={styles.input} value={pincode} onChangeText={setPincode} keyboardType="numeric" />
          </View>
          <View style={styles.halfInputContainer}>
            <Text style={styles.inputLabel}>State</Text>
            <TextInput style={styles.input} value={state} onChangeText={setState}/>
          </View>
        </View>
        <Text style={styles.inputLabel}>City</Text>
        <TextInput style={styles.input} value={city} onChangeText={setCity} />
        <Text style={styles.inputLabel}>Locality/Area</Text>
        <TextInput style={styles.input} value={locality} onChangeText={setLocality}/>
        <Text style={styles.inputLabel}>Building/House No</Text>
        <TextInput style={styles.input} value={houseNo} onChangeText={setHouseNo}/>

        {/* Address Type Selection */}
        <Text style={styles.sectionTitle}>Address Type</Text>
        <View style={styles.checkboxRow}>
          {["Home", "Office", "Other"].map((type) => (
            <CheckBox
              key={type}
              title={type}
              checked={addressType === type}
              onPress={() => setAddressType(type)}
              checkedColor="#47154B"
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxLabel}
            />
          ))}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveAddress}>
          <Text style={styles.saveButtonText}>Save </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, backgroundColor: "#fff", padding: wp("5%"), marginTop: hp("4%") },
  header: { flexDirection: "row", alignItems: "center", marginBottom: hp("2%"), },
  backButton: { position: "absolute", left: 0 },
  headerTitle: { flex: 1, textAlign: "center", fontSize: wp("6%"), fontWeight: "bold", color: "#47154B", marginRight: wp("10%"), },
  sectionTitle: { fontSize: wp("5.0%"), fontWeight: "bold", marginTop: hp("2%"), marginBottom: hp("1.9%") },
  inputLabel: { fontSize: wp("4%"), fontWeight: "500", marginBottom: hp("0.5%") },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    fontSize: wp("4%"),
    paddingVertical: hp("0.5%"),
    marginBottom: hp("2%"),
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  halfInputContainer: { width: "48%" },
  checkboxRow: { marginTop: hp("2%"),flexDirection:"row" },
  checkboxContainer: { backgroundColor: "transparent", borderWidth: 0, padding: 0, marginBottom: hp("1%") },
  checkboxLabel: { fontSize: wp("4%"), fontWeight: "normal", color: "#000" },
  saveButton: { backgroundColor: "#47154B", padding: hp("1.5%"), borderRadius: 8, marginTop: hp("3%") },
  saveButtonText: { textAlign: "center", color: "#fff", fontSize: wp("4.5%"), fontWeight: "bold" },
  backButton: {
    padding: wp("2%"),
    marginRight: wp("2%"),
  },
  backIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
});

export default AddAddress;
