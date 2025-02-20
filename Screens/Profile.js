import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BottomNavbar from "./BottomNavbar";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  // Fetch profile from backend
  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://192.168.29.178:5000/Profile"); // Replace with actual API URL
      setProfile(response.data[response.data.length - 1]); // Get the most recent profile
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    const focusListener = navigation.addListener("focus", fetchProfile);
    return () => focusListener();
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()} // Ensure navigation works
            style={styles.backButton}
          >
            <Image
              source={require("../assets/profileImgs/back.png")} // Replace with actual image
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.profileHeader}>
          <Image
            source={require("../assets/profileImgs/profile-icon.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={styles.editIconContainer}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Image
              source={require("../assets/profileImgs/pencil.png")} // Replace with actual pencil image
              style={styles.editIcon}
            />
          </TouchableOpacity>
          <Text style={styles.profileName}>{profile?.firstName || "N/A"}</Text>
          <Text style={styles.profileNumber}>
            {profile?.emailOrmobile || "N/A"}
          </Text>
        </View>

        <View style={styles.list}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("profileorder")}
          >
            <Image
              source={require("../assets/profileImgs/orderhistory.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Order </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("addresslist")}
          >
            <Image
              source={require("../assets/profileImgs/savedaddress.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Wishlist")}
          >
            <Image
              source={require("../assets/profileImgs/wishlist.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("terms")}
          >
            <Image
              source={require("../assets/profileImgs/terms.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("notify")}
          >
            <Image
              source={require("../assets/profileImgs/customercare.png")} // Replace with actual image URL
              style={styles.menuImage}
            />

            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("return")}
          >
            <Image
              source={require("../assets/profileImgs/refund.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Return and Refund Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("about")}
          >
            <Image
              source={require("../assets/profileImgs/about.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    padding: wp("3%"),
    marginTop: hp("4%"),
  },
  backButton: {
    padding: wp("2%"),
    marginRight: wp("2%"),
  },
  backIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
  title: {
    color: "#47154B",
    textAlign: "center",
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginLeft: wp("27%"),
    marginTop: hp("0.7"),
  },
  profileHeader: {
    alignItems: "center",
    padding: wp("3%"),
  },
  profileImage: {
    width: wp("35%"),
    height: wp("30%"),
    borderRadius: wp("12.5%"),
  },
  profileName: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    marginTop: hp("2%"),
  },
  profileNumber: {
    fontSize: wp("4%"),
    color: "gray",
    marginTop: hp("1%"),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp("2%"),
    elevation: 4,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginHorizontal: wp("5%"),
    marginBottom: wp("4%"),
    paddingLeft: wp("3.2%"),
    paddingVertical: hp("1.5%"),
    // zIndex: 1,
  },
  menuText: {
    fontSize: wp("4.5%"),
    marginLeft: wp("1%"),
    color: "#641E69",
  },
  icon: {
    color: "#641E69",
  },
  menuImage: {
    resizeMode: "contain",
    width: wp("5%"),
    height: wp("5%"),
    marginLeft: wp("1.5%"),
    marginRight: wp("2%"),
    marginTop: wp("1%"),
  },
  editIconContainer: {
    position: "absolute",
    top: hp("6%"),
    right: wp("34%"),
    backgroundColor: "#fff",
    borderRadius: wp("4%"),
    padding: wp("1%"),
    elevation: 5,
  },
  editIcon: {
    width: wp("6%"),
    height: wp("6%"),
    resizeMode: "contain",
  },
  logoutButton: {
    padding: wp("2.6%"),
    borderRadius: wp("2%"),
    borderWidth: 1.5,
    borderColor: "#641E69",
    marginHorizontal: wp("22%"),
    marginTop: wp("4%"),
    marginBottom: wp("8%"),
  },
  logoutText: {
    fontSize: wp("4.5%"),
    textAlign: "center",
    color: "#641E69",
    fontWeight: "500",
  }
});

export default ProfileScreen;
