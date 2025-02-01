import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const kidsProducts = [
  { id: '16', image: require('../assets/categories/kids-rings.png'), name: 'Rings' },
  { id: '17', image: require('../assets/categories/kids-rings.png'), name: 'Ear Rings' },
  { id: '18', image: require('../assets/categories/kids-rings.png'), name: 'Bangles' },
  { id: '19', image: require('../assets/categories/kids-rings.png'), name: 'Bracelets' },
  { id: '20', image: require('../assets/categories/kids-rings.png'), name: 'Chains' },
  { id: '21', image: require('../assets/categories/kids-rings.png'), name: 'Necklace' },
  { id: '22', image: require('../assets/categories/kids-rings.png'), name: 'Nosepin' },
  { id: '23', image: require('../assets/categories/kids-rings.png'), name: 'Anklets' },
  { id: '24', image: require('../assets/categories/kids-rings.png'), name: 'Hipbelt' },
  { id: '25', image: require('../assets/categories/kids-rings.png'), name: 'Armlet' },
  { id: '26', image: require('../assets/categories/kids-rings.png'), name: 'Hair Extensions' },
];

// Add an empty placeholder if the number of items is odd
if (kidsProducts.length % 2 !== 0) {
  kidsProducts.push({ id: 'empty', image: null, name: '' });
}

const KidsScreen = () => (
  <FlatList
    data={kidsProducts}
    keyExtractor={(item) => item.id}
    numColumns={2}
    renderItem={({ item }) => (
      <View style={styles.item}>
        {item.image ? (
          <>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </>
        ) : (
          <View style={styles.placeholder} /> // Empty placeholder for last item
        )}
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  item: { flex: 1, margin: wp(2), alignItems: 'center' },
  placeholder: { width: wp(40), height: hp(20), marginTop: hp(3) }, // Placeholder style
  image: { width: wp(40), height: hp(20), borderRadius: wp(3), marginTop: hp(3) },
  text: { marginTop: hp(1), fontSize: wp(4), fontWeight: 'bold', textAlign: 'center' },
});

export default KidsScreen;
