import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import icons
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BottomNavbar from "./BottomNavbar";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
            source={require("../assets/profileImgs/profilepicImg.png")} // Replace with actual image URL
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Adhvitha</Text>
          <Text style={styles.profileNumber}>9394800354</Text>
        </View>
        <View style={styles.list}>
          <TouchableOpacity style={styles.menuItem}>
            {/* <Icon name="cart-outline" size={wp("6%")} style={styles.icon} /> */}
            <Image
              source={require("../assets/profileImgs/orderhistory.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* <Icon name="location-outline" size={wp("6%")} style={styles.icon} /> */}
            <Image
              source={require("../assets/profileImgs/savedaddress.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Saved Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* <Icon name="heart-outline" size={wp("6%")} style={styles.icon} /> */}
            <Image
              source={require("../assets/profileImgs/wishlist.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* <Icon name="call-outline" size={wp("6%")} style={styles.icon} /> */}
            <Image
              source={require("../assets/profileImgs/contactus.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* <Icon name="headset-outline" size={wp("6%")} style={styles.icon} /> */}
            <Image
              source={require("../assets/profileImgs/customercare.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Customer Care</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* <Icon
              name="notifications-outline"
              size={wp("6%")}
              style={styles.icon}
            /> */}
            <Image
              source={require("../assets/profileImgs/notification.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* <Icon
              name="return-down-back-outline"
              size={wp("6%")}
              style={styles.icon}
            /> */}
            <Image
              source={require("../assets/profileImgs/refund.png")} // Replace with actual image URL
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Return and Refund Policy</Text>
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
    // alignItems: "center",
    padding: wp("3%"),
    marginTop: hp("4%"),
    // justifyContent: 'center'
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
    marginLeft: wp("24%")
  },
  profileHeader: {
    alignItems: "center",
    padding: wp("5%"),
  },
  profileImage: {
    width: wp("25%"),
    height: wp("25%"),
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
    alignItems: "left",
    padding: wp("3%"),
    borderRadius: wp("2%"),
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    marginBottom: wp("3%"),
  },
  menuText: {
    fontSize: wp("4.5%"),
    marginLeft: wp("1%"),
    color: "#641E69",
  },
  icon: {
    // marginRight: wp('1%'),
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
});

export default ProfileScreen;
