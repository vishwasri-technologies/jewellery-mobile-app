// import React from 'react';
// import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import BottomNavBar from './BottomNavbar';

// const categories = [
//   { name: 'Necklace', image: require('../assets/google-icon.png') },
//   { name: 'Bracelet', image: require('../assets/google-icon.png') },
//   { name: 'Bangles', image: require('../assets/google-icon.png') },
//   { name: 'Chains', image: require('../assets/google-icon.png') },
// ];

// const Home = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* Top Section with Location and Profile Icons */}
//       <View style={styles.header}>
//         <View style={styles.locationWrapper}>
//           <Icon name="map-marker" size={hp('3%')} color="white" style={styles.locationIcon} />
//           <View>
//             <Text style={styles.locationText}>Prakash Nagar</Text>
//             <Text style={styles.addressText}>H.no 777, near NST Colony...</Text>
//           </View>
//         </View>
//         <TouchableOpacity onPress={() => navigation.navigate('profile')}>
//           <Icon name="account-circle-outline" size={hp('4%')} color="white" />
//         </TouchableOpacity>
//       </View>

//       {/* Search Bar and Bell Icon */}
//       <View style={styles.searchSection}>
//         <TextInput style={styles.searchBar} placeholder="Search" />
//         <TouchableOpacity>
//           <Icon name="bell-outline" size={hp('3%')} color="white" />
//         </TouchableOpacity>
//       </View>

//       {/* Categories Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Picked for You</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {categories.map((category, index) => (
//             <View key={index} style={styles.category}>
//               <Image source={category.image} style={styles.categoryImage} />
//               <Text style={styles.categoryText}>{category.name}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Banner Image */}
//       <View style={styles.banner}>
//         <Image source={require('../assets/google-icon.png')} style={styles.bannerImage} />
//       </View>

//       <ScrollView>
//         {/* Example Product Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Our Bestseller</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.productRow}>
//               <View style={styles.product}>
//                 <Image source={require('../assets/google-icon.png')} style={styles.productImage} />
//                 <Text style={styles.productName}>Simple Butterfly Pearl Earrings</Text>
//                 <Text style={styles.productPrice}>₹250</Text>
//               </View>
//               <View style={styles.product}>
//                 <Image source={require('../assets/google-icon.png')} style={styles.productImage} />
//                 <Text style={styles.productName}>Elegant Gold Hoop Earrings</Text>
//                 <Text style={styles.productPrice}>₹300</Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation Bar */}
//       <BottomNavBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FFFFFF' },
//   header: {
//     backgroundColor: '#47154B',
//     paddingTop: hp('5%'),
//     paddingBottom: hp('2%'),
//     paddingHorizontal: wp('5%'),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   locationWrapper: { flexDirection: 'row', alignItems: 'center' },
//   locationIcon: { marginRight: wp('2%') },
//   locationText: { fontSize: hp('2.2%'), fontWeight: 'bold', color: 'white' },
//   addressText: { fontSize: hp('1.8%'), color: 'white' },
//   searchSection: {
//     backgroundColor: '#47154B',
//     paddingHorizontal: wp('5%'),
//     paddingBottom: hp('2%'),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   searchBar: {
//     height: hp('5%'),
//     width: wp('80%'),
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: wp('2%'),
//     paddingHorizontal: wp('4%'),
//     backgroundColor: 'white',
//     color: 'black',
//   },
//   section: { paddingHorizontal: wp('5%'), marginBottom: hp('2%') },
//   sectionTitle: { fontSize: hp('2.4%'), fontWeight: 'bold', color: '#4E1B50', marginBottom: hp('1.5%') },
//   category: { alignItems: 'center', marginRight: wp('4%') },
//   categoryImage: { width: wp('18%'), height: wp('18%'), borderRadius: wp('9%') },
//   categoryText: { marginTop: hp('1%'), fontSize: hp('1.8%'), color: '#4E1B50' },
//   banner: { paddingHorizontal: wp('5%'), marginBottom: hp('2%') },
//   bannerImage: { width: wp('90%'), height: hp('25%'), borderRadius: wp('3%') },
//   productRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('2%') },
//   product: { alignItems: 'center' },
//   productImage: { width: wp('40%'), height: hp('20%'), borderRadius: wp('2%') },
//   productName: { marginTop: hp('1%'), fontSize: hp('1.8%'), color: '#4E1B50', textAlign: 'center' },
//   productPrice: { fontSize: hp('1.8%'), color: '#957A97' },
// });

// export default Home;





import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomNavBar from './BottomNavbar';

const categories = [
  { name: 'Necklace', image: require('../assets/necklace.png') },
  { name: 'Bracelet', image: require('../assets/bracelet.png') },
  { name: 'Bangles', image: require('../assets/bangles.png') },
  { name: 'Chains', image: require('../assets/chains.png') },
];

const products = [
  { name: 'Simple Butterfly Pearl Earrings', price: '₹250', image: require('../assets/earrings1.png') },
  { name: 'Elegant Gold Hoop Earrings', price: '₹300', image: require('../assets/earrings2.png') },
  { name: 'Heart-shaped Diamond Earrings', price: '₹500', image: require('../assets/earrings3.png') },
  { name: 'Classic Stud Earrings', price: '₹150', image: require('../assets/earrings4.png') },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Section with Location and Profile Icons */}
      <View style={styles.header}>
        <View style={styles.locationWrapper}>
          <Icon name="map-marker" size={hp('3%')} color="white" style={styles.locationIcon} />
          <View>
            <Text style={styles.locationText}>Prakash Nagar</Text>
            <Text style={styles.addressText}>H.no 777, near NST Colony...</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Icon name="account-circle-outline" size={hp('4%')} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar and Bell Icon */}
      <View style={styles.searchSection}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity>
          <Icon name="bell-outline" size={hp('3%')} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Picked for You</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <View key={index} style={styles.category}>
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Banner Image */}
        <View style={styles.banner}>
          <Image source={require('../assets/banner.png')} style={styles.bannerImage} />
        </View>

        {/* Product Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Bestseller</Text>
          <View style={styles.productGrid}>
            {products.map((product, index) => (
              <View key={index} style={styles.product}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    backgroundColor: '#47154B',
    paddingTop: hp('5%'),
    paddingBottom: hp('2%'),
    paddingHorizontal: wp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationWrapper: { flexDirection: 'row', alignItems: 'center' },
  locationIcon: { marginRight: wp('2%') },
  locationText: { fontSize: hp('2.2%'), fontWeight: 'bold', color: 'white' },
  addressText: { fontSize: hp('1.8%'), color: 'white' },
  searchSection: {
    backgroundColor: '#47154B',
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: hp('5%'),
    width: wp('80%'),
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: 'white',
    color: 'black',
  },
  section: { paddingHorizontal: wp('5%'), marginBottom: hp('2%') },
  sectionTitle: { fontSize: hp('2.4%'), fontWeight: 'bold', color: '#4E1B50', marginBottom: hp('1.5%') },
  category: { alignItems: 'center', marginRight: wp('4%') },
  categoryImage: { width: wp('18%'), height: wp('18%'), borderRadius: wp('9%') },
  categoryText: { marginTop: hp('1%'), fontSize: hp('1.8%'), color: '#4E1B50' },
  banner: { paddingHorizontal: wp('5%'), marginBottom: hp('2%') },
  bannerImage: { width: wp('90%'), height: hp('25%'), borderRadius: wp('3%') },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  product: { width: wp('45%'), alignItems: 'center', marginBottom: hp('2%') },
  productImage: { width: wp('40%'), height: hp('20%'), borderRadius: wp('2%') },
  productName: { marginTop: hp('1%'), fontSize: hp('1.8%'), color: '#4E1B50', textAlign: 'center' },
  productPrice: { fontSize: hp('1.8%'), color: '#957A97' },
});

export default Home;
