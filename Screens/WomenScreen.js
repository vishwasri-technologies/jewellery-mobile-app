import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const womenProducts = [
  { id: '55', image: require('../assets/categories/Women/Ring-main.png'), name: 'Rings', screen: 'WomenRingsScreen' },
  { id: '66', image: require('../assets/categories/Women/Earrings-main.png'), name: 'Ear Rings', screen: 'WomenEarRingsScreen' },
  { id: '77', image: require('../assets/categories/Women/Bangles-main.png'), name: 'Bangles', screen: 'WomenBanglesScreen' },
  { id: '88', image: require('../assets/categories/Women/Bracelet-main.png'), name: 'Bracelets', screen: 'WomenBraceletsScreen' },
  { id: '99', image: require('../assets/categories/Women/Blackbeeds-3.png'), name: 'Black beeds', screen: 'WomenBlackBeedsScreen' },
  { id: '111', image: require('../assets/categories/Women/Necklace-main.png'), name: 'Necklace', screen: 'WomenNecklaceScreen' },
  { id: '122', image: require('../assets/categories/Women/Chain-main.png'), name: 'Chains', screen: 'WomenChainsScreen' },
  
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
