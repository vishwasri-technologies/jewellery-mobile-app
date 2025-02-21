import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import BottomNavBar from "./BottomNavbar";
import HeartIcon from "./HeartIcon";
import { Ionicons } from "@expo/vector-icons"; 

const chainProducts = [
  {
    id: "7",

    category: 'Chains',
    image: require('../assets/categories/Mens/Men-Chains.png'),

    name: "Gold Colour Simple Chain With Pendant\n(1 gram gold)",
    price: "\u20B9499",
    material: "Gold",
    care: "Clean with a soft, dry cloth",
    colour: "Gold Colour",
  },
];

const MenChainsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={wp(6)} color="#47154B" />
        </TouchableOpacity>
        <Text style={styles.heading}>Chains</Text>
      </View>

      <FlatList
        data={chainProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                product: item,
                allProducts: chainProducts,
              })
            }
          >
            <HeartIcon item={item} />
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(5),
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
    marginBottom: hp(2),
  },
  backButton: {
    padding: wp(4),
   paddingLeft:wp(0),
  },
  heading: {
    fontSize: wp(6),
    fontWeight: "bold",
    color: "#47154B",
    marginLeft: wp(2),
  },
  item: {
    width: wp(46),
    borderRadius: wp(2),
    padding: wp(0),
    margin: wp(2),
    alignItems: "center",
  },
  image: {
    width: wp(47),
    height: wp(65),
  },
  name: {
    fontSize: wp(4),
    fontWeight: "400",
    marginVertical: hp(0.5),
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: wp(2),
  },
  price: {
    fontSize: wp(3.8),
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: wp(2),
  },
});

export default MenChainsScreen;
