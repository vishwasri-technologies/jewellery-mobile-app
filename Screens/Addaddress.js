import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,Image } from "react-native";
import { CheckBox } from "react-native-elements"; // ✅ Use native-elements CheckBox
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AddAddress = () => {
  const navigation = useNavigation();
  const [addressType, setAddressType] = useState("");

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
        <TextInput style={styles.input} />
        <Text style={styles.inputLabel}>Phone No</Text>
        <TextInput style={styles.input} keyboardType="phone-pad" />

        {/* Address Details */}
        <Text style={styles.sectionTitle}>Address Details</Text>
        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.inputLabel}>Pincode</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.halfInputContainer}>
            <Text style={styles.inputLabel}>State</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <Text style={styles.inputLabel}>City</Text>
        <TextInput style={styles.input} />
        <Text style={styles.inputLabel}>Locality/Area</Text>
        <TextInput style={styles.input} />
        <Text style={styles.inputLabel}>Building/House No</Text>
        <TextInput style={styles.input} />

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
        <TouchableOpacity style={styles.saveButton}>
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
  headerTitle: { flex: 1, textAlign: "center", fontSize: wp("6%"), fontWeight: "bold", color: "#47154B",marginLeft:"-45" },
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
