import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // Fetch profile from backend
  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      console.log("Auth Token:", token); // Check if token exists
  
      if (!token) {
        console.log("No token found, redirecting to login.");
        navigation.replace("SignIn");
        return;
      }
  
      const response = await axios.get("http://192.168.29.178:5000/Profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!response.data || response.data.profile === null) {
        console.log("No profile found, setting default.");
        setProfile({ firstName: "Guest", emailOrmobile: "N/A" });
      } else {
        setProfile(response.data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error.response?.data || error.message);
      if (error.response?.data?.message === "Invalid token") {
        console.log("Token is invalid, redirecting to login.");
        await AsyncStorage.removeItem("authToken"); // Remove the invalid token
        navigation.replace("SignIn"); // Redirect user to login
      }
      setProfile({ firstName: "Guest", emailOrmobile: "N/A" });
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate("SignIn"); // Redirect to SignIn if not logged in
    }
    if (isLoggedIn) {
      fetchProfile();
    }

    const focusListener = navigation.addListener("focus", fetchProfile);
    return () => focusListener();
  }, [navigation, isLoggedIn]);

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Set login state to false when logging out
//     navigation.reset({
//       index: 0, // Reset to the first screen
//       routes: [{ name: "SignIn" }], // Set SignIn as the first screen
//     });
//   };
const handleLogout = async () => {
  await AsyncStorage.removeItem("authToken"); // Clear token
  navigation.replace("SignIn"); // Redirect to Login
};


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
            onPress={async () => {
              try {
                const token = await AsyncStorage.getItem("authToken"); // ✅ Retrieve auth token
    if (!token) {
      Alert.alert("Unauthorized", "Please log in to cancel your order.");
      navigation.navigate("profileorder"); 
      return;
    }
                const response = await fetch("http://192.168.29.178:5000/last-order", {
                  headers: { Authorization: `Bearer ${token}` }, // ✅ Include authentication token
                }); // Fetch last order
                const data = await response.json();
          
                if (data.success && data.order) {
                  // ✅ If orders exist, navigate to ExistingOrder screen
                  navigation.navigate("existingorder");
                } else {
                  // ❌ If no orders exist, navigate to ProfileOrder screen
                  navigation.navigate("profileorder");
                }
              } catch (error) {
                console.error("❌ Error fetching last order:", error);
                navigation.navigate("profileorder"); // Navigate to ProfileOrder if error occurs
              }
            }}
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
              source={require("../assets/profileImgs/terms.png")} 
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("notify")}
          >
            <Image
              source={require("../assets/profileImgs/customercare.png")} 
              style={styles.menuImage}
            />

            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("return")}
          >
            <Image
              source={require("../assets/profileImgs/refund.png")} 
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Return and Refund Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("about")}
          >
            <Image
              source={require("../assets/profileImgs/about.png")} 
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <Image
              source={require("../assets/profileImgs/contact.png")} 
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <Image
              source={require("../assets/profileImgs/privacy.png")}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("ShippingPolicy")}
          >
            <Image
              source={require("../assets/profileImgs/shipping.png")} 
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Shipping Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("CancellationPolicy")}
          >
            <Image
              source={require("../assets/profileImgs/cancellation.png")} 
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Cancellation Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress= {handleLogout}
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
