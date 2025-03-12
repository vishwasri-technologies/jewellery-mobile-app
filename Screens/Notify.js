import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const NotificationScreen = ({ navigation }) => {
  // const userName = "John Doe"; // Replace with dynamic user data
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user's first name from the backend
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken"); // ✅ Get auth token
        if (!token) {
          Alert.alert("Unauthorized", "Please log in to view your last order.");
          return;
        }
        const response = await fetch("http://192.168.29.178:5000/Notify", {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Include authentication token
        }); // Replace with actual API URL
        const data = await response.json();
        
        if (data.firstName) {
          setUserName(data.firstName);
        } else {
          setUserName("User"); // Default name if not found
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setUserName("User");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require("../assets/profileImgs/back.png")} // Replace with actual back icon
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* Notification Card */}
      <View style={styles.card}>
      {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <Text style={styles.message}>
            "Welcome back, <Text style={styles.boldText}>{userName}</Text>! Discover the latest jewelry collections curated just for you."
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5A186F",
    marginLeft: 70,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  message: {
    fontSize: 16,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default NotificationScreen;
