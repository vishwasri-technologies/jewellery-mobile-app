import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useWishlist } from "./WishlistContext"; // Import the useWishlist hook

const ProductDetailsScreen = ({ route }) => {
  const { product, allProducts } = route.params;
  const navigation = useNavigation();
  const { wishlist, toggleWishlist } = useWishlist(); // Use the wishlist context
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Check if the product is in the wishlist
  useEffect(() => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    setIsInWishlist(isProductInWishlist);
  }, [wishlist, product.id]);

  // Function to handle adding/removing a product from the wishlist
  const handleWishlistToggle = () => {
    toggleWishlist(product); // Add or remove the product from the wishlist
  };

  // Function to handle adding a product to the cart
  const handleAddToCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      let cart = cartData ? JSON.parse(cartData) : [];

      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].qty += 1;
      } else {
        cart.push({ ...product, qty: 1 });
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      Alert.alert("Success", `${product.name} added to cart!`);
    } catch (error) {
      console.error("Failed to add product to cart", error);
      Alert.alert("Error", "Failed to add product to cart. Please try again.");
    }
  };

  // Filter similar products based on the category of the current product
  const similarProducts = allProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Product Image */}
        <View style={styles.productContainer}>
          <Image source={product.image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.name}>{product.name}</Text>
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
              <Text style={styles.detailValue}>{product.Care}</Text>
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
            <Image
              source={require("../assets/productdetails/deliverIcon.png")}
              style={styles.deliveryIcon}
            />
            <Text style={styles.deliveryText}>
              Delivery within <Text style={styles.boldText}>3 hours</Text>.
              Express shipping options available for urgent deliveries.
            </Text>
          </View>
          <View style={styles.deliveryDetailRow}>
            <Image
              source={require("../assets/productdetails/returnicon.png")}
              style={styles.deliveryIcon}
            />
            <Text style={styles.deliveryText}>
              <Text style={styles.boldText}>Non-Returnable Product</Text>. Once
              purchased, it cannot be returned or exchanged.
            </Text>
          </View>
        </View>

        {/* Similar Products */}
        <View style={styles.similarsection}>
          <Text style={styles.similarsectionTitle}>Similar Products</Text>
          <FlatList
            data={similarProducts}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.push("ProductDetails", { // Use navigation.push
                    product: item,
                    allProducts: allProducts,
                  });
                }}
              >
                <Image source={item.image} style={styles.image1} />
                <Text style={styles.name1}>{item.name}</Text>
                <Text style={styles.price1}>{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

      {/* Fixed Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.heartButton]}
          onPress={handleWishlistToggle} // Toggle wishlist
        >
          <Icon
            name="heart"
            color={isInWishlist ? "red" : "#bfbfbf"}
            style={[styles.heartIcon]}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[
            styles.heartButton,
            { color: isInWishlist ? "red" : "black" },
          ]}
          onPress={handleWishlistToggle} // Toggle wishlist
        >
          <Image
            source={require("../assets/productdetails/heartIcon.png")}
            style={[
              styles.heartButton,
              { color: isInWishlist ? "red" : "black" },
            ]}
          ></Image>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: hp("10%"),
    paddingHorizontal: wp(5),
  },
  productContainer: {
    alignItems: "center",
  },
  image: {
    marginTop: hp(8),
    width: wp(90),
    height: hp(50),
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  category: {
    fontSize: wp(4.4),
    fontWeight: "bold",
    marginTop: hp(2),
    paddingLeft: hp(0.2),
  },
  name: {
    fontSize: wp(4.2),
    marginTop: hp(0.2),
    paddingLeft: hp(0.3),
  },
  price: {
    fontSize: wp(4.3),
    fontWeight: "bold",
    color: "black",
    marginTop: hp(0.2),
    marginBottom: hp(),
    paddingLeft: hp(0.3),
  },
  section: {
    marginTop: hp(3),
    marginBottom: hp(1),
    paddingLeft: hp(0.2),
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
    gap: wp(15),
  },
  detailsColumn: {
    width: "48%",
  },
  detailLabel: {
    fontSize: wp(3.5),
    color: "black",
    marginTop: hp(0.8),
    width: "100%",
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: wp(3.5),
    color: "#333",
    marginTop: hp(0.25),
    width: "100%",
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
    width: "100%",
    marginLeft: wp(-2),
  },
  addressContainer: {
    flex: 1,
    marginRight: wp(2),
  },
  deliveryAddress: {
    fontSize: wp(4),
    fontWeight: "bold",
  },
  addressName: {
    fontWeight: "light",
  },
  addressText: {
    fontSize: wp(3.5),
    paddingTop: hp(0.5),
    paddingRight: hp(1),
  },
  changeButton: {
    borderWidth: 1,
    borderColor: "#FF3F6C",
    borderRadius: wp(2),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
    flexShrink: 1,
  },
  changeButtonText: {
    color: "#FF3F6C",
    fontSize: wp(3.5),
    fontWeight: "bold",
  },
  deliveryDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1),
  },
  deliveryIcon: {
    width: wp(7.5),
    height: wp(7.5),
    backgroundColor: "blue",
    borderRadius: wp(1),
    marginRight: wp(3),
  },
  deliveryText: {
    fontSize: wp(3.8),
    color: "#333",
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
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
    fontSize: wp(6.5)
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
  similarsectionTitle: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    marginTop: hp(2),
    marginBottom: hp(3),
  },
  // listContainer: {
  //   paddingTop: hp(3),
  // },
  item: {
    width: wp(45),
    marginBottom: hp(3),
    alignItems: "center",
  },
  image1: {
    width: wp(40),
    height: wp(55),
    // borderRadius: wp(2),
  },
  name1: {
    fontSize: wp(4),
    fontWeight: "400",
    marginTop: hp(1),
    textAlign: "center",
  },
  price1: {
    fontSize: wp(3.8),
    fontWeight: "bold",
    color: "black",
    marginTop: hp(0.5),
    textAlign: "center",
    // marginBottom: hp(1.5),
  },
});

export default ProductDetailsScreen;
