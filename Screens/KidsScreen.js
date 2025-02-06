import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const kidsProducts = [
  { id: '54', image: require('../assets/categories/kids-rings.png'), name: 'Rings', screen: 'KidsRingsScreen' },
  { id: '65', image: require('../assets/categories/kids-rings.png'), name: 'Ear Rings', screen: 'KidsEarRingsScreen' },
  { id: '56', image: require('../assets/categories/kids-rings.png'), name: 'Bangles', screen: 'KidsBanglesScreen' },
  { id: '57', image: require('../assets/categories/kids-rings.png'), name: 'Bracelets', screen: 'KidsBraceletsScreen' },
  { id: '58', image: require('../assets/categories/kids-rings.png'), name: 'Chains', screen: 'KidsChainsScreen' },
  { id: '59', image: require('../assets/categories/kids-rings.png'), name: 'Necklace', screen: 'KidsNecklaceScreen' },
  { id: '61', image: require('../assets/categories/kids-rings.png'), name: 'Nosepin', screen: 'KidsNosepinScreen' },
  { id: '62', image: require('../assets/categories/kids-rings.png'), name: 'Anklets', screen: 'KidsAnkletsScreen' },
  { id: '63', image: require('../assets/categories/kids-rings.png'), name: 'Hipbelt', screen: 'KidsHipbeltScreen' },
  { id: '64', image: require('../assets/categories/kids-rings.png'), name: 'Armlet', screen: 'KidsArmletScreen' },
  { id: '67', image: require('../assets/categories/kids-rings.png'), name: 'Hair Extensions', screen: 'KidsHairExtensionsScreen' },
];

// Add an empty placeholder if the number of items is odd
if (kidsProducts.length % 2 !== 0) {
  kidsProducts.push({ id: 'empty', empty: true });
}

const KidsScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={kidsProducts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) =>
        item.empty ? (
          <View style={[styles.item, { backgroundColor: 'transparent' }]} />
        ) : (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  item: { flex: 1, margin: wp(2), alignItems: 'center' },
  image: { width: wp(40), height: hp(20), borderRadius: wp(3), marginTop: hp(3) },
  text: { marginTop: hp(1), fontSize: wp(4), fontWeight: 'bold', textAlign: 'center' },
});

export default KidsScreen;
