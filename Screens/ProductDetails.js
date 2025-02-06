import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params; // Access the passed product data

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image source={product.image} style={styles.image} />
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </ScrollView>
      <View style={styles.productBottom}>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    width: wp(90),
    height: hp(50),
    marginBottom: hp(2),
    marginTop: hp(5),
    marginLeft: wp(3),
    marginRight: wp(3),
    alignSelf: "center",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  name: {
    fontSize: 20,
    fontWeight: 450,
  },
  price: {
    fontSize: 18,
    color: "black",
  },
  productBottom: {
    
  }
});

export default ProductDetailsScreen;
