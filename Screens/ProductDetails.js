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

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params; // Access the passed product data

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.productContainer}>
          <Image source={product.image} style={styles.image} />
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </ScrollView>

      {/* Fixed Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heartIcon}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures proper layout distribution
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: hp('100%'), // Prevents overlap with bottom buttons
    alignItems: "center",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  productContainer: {
    width: wp(90),
    marginTop: hp(5),
  },
  image: {
    marginTop: hp(2),
    width: wp(90),
    height: hp(50),
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    alignSelf: "center",
  },
  name: {
    fontSize: wp(5),
    fontWeight: "bold",
    marginVertical: hp(1),
  },
  price: {
    fontSize: wp(4.5),
    color: "black",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: hp(9),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // paddingVertical: hp('1%'),
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
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
    fontSize: wp(6),
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
