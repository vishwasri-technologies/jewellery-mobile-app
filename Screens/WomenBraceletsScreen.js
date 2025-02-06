import React from 'react';
import { View, Text, Image, FlatList, StyleSheet} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomNavBar from './BottomNavbar';
import HeartIcon from './HeartIcon';


const womenbraceletProducts = [
  { id: '16', image: require('../assets/categories/Men-bracelets.png'), name: 'Gold Bracelet', price: '\u20B9150' },
  { id: '17', image: require('../assets/categories/Men-bracelets.png'), name: 'Silver Bracelet', price: '\u20B9120' },

];

const WomenBraceletsScreen = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bracelets</Text>
      <FlatList
        data={womenbraceletProducts}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a two-column grid
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Heart Icon Component */}
            <HeartIcon item={item} />
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
      <BottomNavBar/>
    </View>
  );
};

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

export default WomenBraceletsScreen;
