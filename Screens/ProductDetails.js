import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params; // Access the passed product data
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Product Image */}
        <View style={styles.productContainer}>
          <Image source={product.image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.name}>{product.name}</Text>
          {/* <Text style={styles.description}>{product.description}</Text> */}
          <Text style={styles.price}>{product.price}</Text>
        </View>

        {/* Product Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          <View style={styles.detailsRow}>
            <View style={styles.detailsColumn}>
              <Text style={styles.detailLabel}>Product Name:</Text>
              <Text style={styles.detailValue}>{product.name}</Text>
            </View>
            <View style={styles.detailsColumn}>
              <Text style={styles.detailLabel}>Material:</Text>
              <Text style={styles.detailValue}>{product.material}</Text>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <View style={styles.detailsColumn}>
              <Text style={styles.detailLabel}>Care:</Text>
              <Text style={styles.detailValue}>{product.care}</Text>
            </View>
            <View style={styles.detailsColumn}>
              <Text style={styles.detailLabel}>Colour:</Text>
              <Text style={styles.detailValue}>{product.colour}</Text>
            </View>
          </View>
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.deliveryContainer}>
            <View style={styles.addressContainer}>
              <Text style={styles.deliveryAddress}>
                Delivery to:{" "}
                <Text style={styles.addressName}>Shambavi, 518003</Text>
              </Text>
              <Text style={styles.addressText}>
                Kallur Estate Near Shukalamma Temple, Nagula Chatu, Kallur,
                Kurnool
              </Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>CHANGE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Delivery & Return Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery and Return Details</Text>
          <View style={styles.deliveryDetailRow}>
            <View style={styles.deliveryIcon} />
            <Text style={styles.deliveryText}>
              Delivery within <Text style={styles.boldText}>3 hours</Text>.
              Express shipping options available for urgent deliveries.
            </Text>
          </View>
          <View style={styles.deliveryDetailRow}>
            <View style={styles.returnIcon} />
            <Text style={styles.deliveryText}>
              <Text style={styles.boldText}>Non-Returnable Product</Text>. Once
              purchased, it cannot be returned or exchanged.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heartIcon}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => navigation.navigate("cart")}
        >
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
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
    paddingBottom: hp("12%"),
    paddingHorizontal: wp(5),
  },
  productContainer: {
    alignItems: "center",
  },
  image: {
    marginTop: hp(8),
    width: wp(90),
    height: hp(50),
    borderRadius: wp(5),
  },
  dotContainer: {
    flexDirection: "row",
    marginTop: hp(1),
  },
  dot: {
    width: wp(2),
    height: wp(2),
    backgroundColor: "#E0E0E0",
    borderRadius: wp(1),
    marginHorizontal: wp(1),
  },
  activeDot: {
    backgroundColor: "#47154B",
  },
  name: {
    fontSize: wp(5),
    fontWeight: "bold",
    marginTop: hp(2),
  },
  // description: {
  //   fontSize: wp(4),
  //   color: "#555",
  //   textAlign: "center",
  //   marginBottom: hp(1),
  // },
  price: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "black",
    marginTop: hp(1),
    marginBottom: hp(),
  },
  section: {
    marginTop: hp(4),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    marginBottom: hp(1),
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  detailsColumn: {
    width: "48%",
  },
  detailLabel: {
    fontSize: wp(3.5),
    color: "black",
    fontWeight: "bold",
    width: "100%",
  },
  detailValue: {
    fontSize: wp(3.5),
    // fontWeight: "bold",
    color: "#333",
    marginTop: hp(0.25),
        width: "100%",
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2), // Add horizontal padding to the container
    width: '100%', // Ensure the container takes full width
    marginLeft: wp(-2),
  },
  addressContainer: {
    flex: 1, // Allow the address container to take up available space
    marginRight: wp(2),
  },
  deliveryAddress: {
    fontSize: wp(4),
    fontWeight: "bold",
  },
  addressName: {
    fontWeight: "light"
  },
  addressText: {
    fontSize: wp(3.5),
    paddingTop: hp(0.5),
    paddingRight: hp(1),
  },
  changeButton: {
    borderWidth: 1,
    borderRadius: wp(2),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
    flexShrink: 1, // Allow the button to shrink if necessary
  },
  changeButtonText: {
    color: "#47154B",
    fontSize: wp(3.5),
    fontWeight: "bold",
  },
  deliveryDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1),
  },
  deliveryIcon: {
    width: wp(6),
    height: wp(6),
    backgroundColor: "#47154B",
    borderRadius: wp(3),
    marginRight: wp(3),
  },
  returnIcon: {
    width: wp(6),
    height: wp(6),
    backgroundColor: "#FF4444",
    borderRadius: wp(3),
    marginRight: wp(3),
  },
  deliveryText: {
    fontSize: wp(3.8),
    color: "#333",
    flex: 1,
  },
  boldText: {
    // fontSize: wp(4),
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: hp(9),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "white",
  },
  heartButton: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(3),
    borderWidth: wp(0.5),
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  heartIcon: {
    fontSize: wp(7),
    color: "black",
  },
  addToCartButton: {
    backgroundColor: "#47154B",
    borderRadius: wp(3),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(22),
  },
  addToCartText: {
    color: "white",
    fontSize: wp(4),
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
