import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const womenProducts = [
  { id: '5', image: require('../assets/categories/women-rings.png'), name: 'Rings', screen: 'WomenRingsScreen' },
  { id: '6', image: require('../assets/categories/women-rings.png'), name: 'Ear Rings', screen: 'WomenEarRingsScreen' },
  { id: '7', image: require('../assets/categories/women-rings.png'), name: 'Bangles', screen: 'WomenBanglesScreen' },
  { id: '8', image: require('../assets/categories/women-rings.png'), name: 'Bracelets', screen: 'WomenBraceletsScreen' },
  { id: '9', image: require('../assets/categories/women-rings.png'), name: 'Chains', screen: 'WomenChainsScreen' },
  { id: '10', image: require('../assets/categories/women-rings.png'), name: 'Necklace', screen: 'WomenNecklaceScreen' },
  { id: '11', image: require('../assets/categories/women-rings.png'), name: 'Nosepin', screen: 'WomenNosepinScreen' },
  { id: '12', image: require('../assets/categories/women-rings.png'), name: 'Anklets', screen: 'WomenAnkletsScreen' },
  { id: '13', image: require('../assets/categories/women-rings.png'), name: 'Hipbelt', screen: 'WomenHipbeltScreen' },
  { id: '14', image: require('../assets/categories/women-rings.png'), name: 'Armlet', screen: 'WomenArmletScreen' },
  { id: '15', image: require('../assets/categories/women-rings.png'), name: 'Hair Extensions', screen: 'WomenHairExtensionsScreen' },
];

// Add an empty item if the number of products is odd
const adjustedProducts = [...womenProducts];
if (womenProducts.length % 2 !== 0) {
  adjustedProducts.push({ id: 'placeholder', empty: true });
}

const WomenScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={adjustedProducts}
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

export default WomenScreen;
