import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const menProducts = [
  { id: '68', image: require('../assets/categories/Men-bracelets.png'), name: 'Bracelets', screen: 'MenBraceletsScreen' },
  { id: '69', image: require('../assets/categories/Men-Chains.png'), name: 'Chains', screen: 'MenChainsScreen' },
  { id: '72', image: require('../assets/categories/Men-Earrings.png'), name: 'Ear Rings', screen: 'MenEarRingsScreen' },
  { id: '73', image: require('../assets/categories/Men-Fingerrings.png'), name: 'Finger Rings', screen: 'MenFingerRingsScreen' },
];

const MenScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={menProducts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: hp(5), // Adds spacing at the bottom
  },
  item: {
    flex: 1,
    margin: wp(2),
    alignItems: 'center',
  },
  image: {
    width: wp(40),
    height: hp(20),
    borderRadius: wp(3),
    marginTop: hp(3),
  },
  text: {
    marginTop: hp(1),
    fontSize: wp(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenScreen;
