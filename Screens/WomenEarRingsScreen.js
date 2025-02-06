import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';

const womenearringsProducts = [
  { id: '131', image: require('../assets/categories/Women/Ear-1.png'), name: 'Gold Bracelet', price: '\u20B9150' },
  { id: '140', image: require('../assets/categories/Women/Ear-2.png'), name: 'Silver Bracelet', price: '\u20B9120' },
  { id: '150', image: require('../assets/categories/Women/Ear-3.png'), name: 'Platinum Bracelet', price: '\u20B9170' },
  { id: '160', image: require('../assets/categories/Women/Ear-4.png'), name: 'Titanium Bracelet', price: '\u20B9200' },
  { id: '170', image: require('../assets/categories/Women/Ear-5.png'), name: 'Leather Bracelet', price: '\u20B980' },
  { id: '180', image: require('../assets/categories/Women/Ear-6.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '190', image: require('../assets/categories/Women/Ear-7.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '200', image: require('../assets/categories/Women/Ear-8.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '210', image: require('../assets/categories/Women/Ear-9.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '220', image: require('../assets/categories/Women/Ear-10.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '230', image: require('../assets/categories/Women/Ear-11.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '240', image: require('../assets/categories/Women/Ear-12.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '250', image: require('../assets/categories/Women/Ear-13.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '260', image: require('../assets/categories/Women/Ear-14.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '270', image: require('../assets/categories/Women/Ear-15.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '280', image: require('../assets/categories/Women/Ear-16.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '290', image: require('../assets/categories/Women/Ear-17.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '300', image: require('../assets/categories/Women/Ear-18.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '310', image: require('../assets/categories/Women/Ear-19.png'), name: 'Chain Bracelet', price: '\u20B9120' },
  { id: '320', image: require('../assets/categories/Women/Ear-20.png'), name: 'Chain Bracelet', price: '\u20B9120' },
];

const WomenEarRingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>EarRings</Text>
      <FlatList
        data={womenearringsProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a two-column grid
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('ProductDetails', {
              product: item,
            })}
          >
            <HeartIcon item={item} />

            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <BottomNavBar/>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingHorizontal: wp(0),
//     paddingTop: hp(5),
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: wp(6),
//     fontWeight: 'bold',
//     marginBottom: hp(2),
//     marginLeft: wp(4),
//     color:"#47154B",
    
//   },
//   // listContainer: {
//   //   paddingHorizontal: wp(2),
//   // },
//   item: {
//     width: wp(46),
  
//     // backgroundColor: '#fff',
//     borderRadius: wp(2),
//     padding: wp(0),
//     margin: wp(2),
//     alignItems: 'center',
//     // elevation: 3,
//   },
//   image: {
//     width: wp(47),
//     height: wp(56),
//     // borderRadius: wp(2),
//   },
//   name: {
//     fontSize: wp(4),
//     fontWeight: 'bold',
//     marginVertical: hp(1),
//     textAlign: 'left',
//     alignItems:'flex-start',
   
//   },
//   price: {
//     fontSize: wp(3.5),
//     color: 'gray',
//     textAlign:'left',
//   },

// });

// export default WomenEarRingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(5),
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: wp(6),
    fontWeight: 'bold',
    marginBottom: hp(2),
    marginLeft: wp(4),
    color: "#47154B",
  },
  item: {
    width: wp(46),
    borderRadius: wp(2),
    padding: wp(0),
    margin: wp(2),
    alignItems: 'center',
  },
  image: {
    width: wp(47),
    height: wp(65),  // Increased height
  },
  name: {
    fontSize: wp(4),
    fontWeight: '400',  // Reduced thickness
    marginVertical: hp(0.5),  // Reduced space
    textAlign: 'left',
    alignSelf: 'flex-start',  // Align to the left
    marginLeft: wp(2),  // Small left margin for spacing
  },
  price: {
    fontSize: wp(3.8),  // Slightly increased size
    fontWeight: 'bold',  // Increased thickness
    color: 'black',  // Changed to black
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: wp(2),
  },
});

export default WomenEarRingsScreen;

