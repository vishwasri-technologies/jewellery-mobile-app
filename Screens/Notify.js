import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const NotificationScreen = ({ navigation }) => {
  const userName = "John Doe"; // Replace with dynamic user data

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
        <Text style={styles.message}>
          "Welcome back, <Text style={styles.boldText}>{userName}</Text>! Discover the latest jewelry collections curated just for you."
        </Text>
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
