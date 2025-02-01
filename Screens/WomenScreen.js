import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const womenProducts = [
  { id: '5', image: require('../assets/categories/women-rings.png'), name: 'Rings' },
  { id: '6', image: require('../assets/categories/women-rings.png'), name: 'Ear Rings' },
  { id: '7', image: require('../assets/categories/women-rings.png'), name: 'Bangles' },
  { id: '8', image: require('../assets/categories/women-rings.png'), name: 'Bracelets' },
  { id: '9', image: require('../assets/categories/women-rings.png'), name: 'Chains' },
  { id: '10', image: require('../assets/categories/women-rings.png'), name: 'Necklaces' },
  { id: '11', image: require('../assets/categories/women-rings.png'), name: 'Nosepin' },
  { id: '12', image: require('../assets/categories/women-rings.png'), name: 'Anklets' },
  { id: '13', image: require('../assets/categories/women-rings.png'), name: 'Hipbelt' },
  { id: '14', image: require('../assets/categories/women-rings.png'), name: 'Armlet' },
  { id: '15', image: require('../assets/categories/women-rings.png'), name: 'Hair Extensions' },
];

// Add an empty item if the number of products is odd
const adjustedProducts = [...womenProducts];
if (womenProducts.length % 2 !== 0) {
  adjustedProducts.push({ id: 'placeholder', empty: true });
}

const WomenScreen = () => (
  <FlatList
    data={adjustedProducts}
    keyExtractor={(item) => item.id}
    numColumns={2}
    renderItem={({ item }) => (
      item.empty ? (
        <View style={[styles.item, { backgroundColor: 'transparent' }]} /> // Empty placeholder to maintain alignment
      ) : (
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )
    )}
  />
);

const styles = StyleSheet.create({
  item: { flex: 1, margin: wp(2), alignItems: 'center' },
  image: { width: wp(40), height: hp(20), borderRadius: wp(3), marginTop: hp(3) },
  text: { marginTop: hp(1), fontSize: wp(4), fontWeight: 'bold', textAlign: 'center' },
});

export default WomenScreen;
