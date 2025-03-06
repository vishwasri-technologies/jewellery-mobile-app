import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeartIcon from "./HeartIcon";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useWishlist } from "./WishlistContext";

const ProductDetailsScreen = ({ route }) => {
  const { product, allProducts = [] } = route.params;
 const navigation = useNavigation();
  const { wishlist, toggleWishlist } = useWishlist();
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    setIsInWishlist(isProductInWishlist);
  }, [wishlist, product.id]);

  const handleWishlistToggle = () => {
    toggleWishlist(product);
  };

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

  const similarProducts = allProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const modifiedIconStyle = {
    position: "absolute",
    top: 9,
    right: -7,
    zIndex: 15,
  };

  const renderSimilarItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.push("ProductDetails", {
          product: item,
          allProducts: allProducts,
        });
      }}
    >
      <HeartIcon item={item} iconStyle={modifiedIconStyle} />
      <Image source={item.image} style={styles.image1} />
      <Text style={styles.name1}>{item.name}</Text>
      <Text style={styles.price1}>{item.price}</Text>
    </TouchableOpacity>
  );

  const listHeader = (
    <View>
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={wp("6%")} color="#47154B" />
      </TouchableOpacity>
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
            <Text style={styles.detailValue}>{product.care}</Text>
          </View>
          <View style={styles.detailsColumn}>
            <Text style={styles.detailLabel}>Colour:</Text>
            <Text style={styles.detailValue}>{product.colour}</Text>
          </View>
        </View>
      </View>

      {/* Delivery Address */}
      {/* <View style={styles.section}>
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
            <Text onPress={() => navigation.navigate("editaddress")} style={styles.changeButtonText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </View> */}

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
            <Text style={styles.boldText}>7 Days Easy Returns.</Text> Item can be
            returned within 7 days of delivery for a refund or exchange.
          </Text>
        </View>
      </View>

      {/* Similar Products Title */}
      {similarProducts.length >= 1 && (
        <View style={styles.similarsection}>
          <Text style={styles.similarsectionTitle}>Similar Products</Text>
        </View>
      )}
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={similarProducts}
          renderItem={renderSimilarItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListHeaderComponent={listHeader}
          contentContainerStyle={styles.listContainer}
        />

        {/* Fixed Bottom Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.heartButton]}
            onPress={handleWishlistToggle}
          >
            <Icon
              name="heart"
              color={isInWishlist ? "red" : "#bfbfbf"}
              style={[styles.heartIcon]}
            />
          </TouchableOpacity>
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

  productContainer: {
    alignItems: "center",
  },
  backbutton: {
    position: "absolute",
    zIndex: 1,
    top: 20,
    left: 20,
    width: wp(5),
    height: wp(5),
    objectFit: "contain",
  },
  image: {
    width: wp(91),
    height: hp(50),
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  category: {
    fontSize: wp(4.3),
    fontWeight: "bold",
    marginTop: hp(2),
    paddingHorizontal: hp(0.5),
  },
  name: {
    fontSize: wp(4),
    marginTop: hp(0.2),
    paddingHorizontal: hp(0.5),
  },
  price: {
    fontSize: wp(4),
    fontWeight: "bold",
    color: "black",
    marginTop: hp(0.2),
    marginBottom: hp(),
    paddingHorizontal: hp(0.5),
  },
  section: {
    marginTop: hp(1.5),
    marginBottom: hp(2),
    paddingHorizontal: hp(0.5),
  },
  sectionTitle: {
    fontSize: wp(3.7),
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
    fontSize: wp(3.7),
    color: "black",
    marginTop: hp(0.8),
    width: "100%",
    fontWeight: "500",
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
    fontSize: wp(3.7),
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
    fontSize: wp(3.4),
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
    fontSize: wp(3.6),
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
    boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
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
    fontSize: wp(6.5),
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
    marginHorizontal: hp(0.5),
  },
  listContainer: {
    paddingHorizontal: hp(2),
    paddingTop: hp(7),
    paddingBottom: hp(9),
  },
  item: {
    width: wp(35),
    marginBottom: hp(3),
    marginLeft: wp(1),
    marginRight: wp(11),
  },
  image1: {
    width: wp(43),
    height: wp(57),
  },
  name1: {
    fontSize: wp(3.5),
    fontWeight: "400",
    marginTop: hp(1),
  },
  price1: {
    fontSize: wp(3.8),
    fontWeight: "bold",
    color: "black",
    marginTop: hp(0.5),
  },
  // heartContainer: { top: 14, right: 12 },
  // // heartIcon1: {
  // //   marginLeft: wp(),
  // // }
});

export default ProductDetailsScreen;
