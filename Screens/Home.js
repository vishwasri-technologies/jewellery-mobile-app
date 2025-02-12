import React, { useState, useEffect  } from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, Dimensions,ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BottomNavBar from './BottomNavbar';
import * as Location from 'expo-location';

const { width: screenWidth } = Dimensions.get('window'); 

const categories = [
  { name: 'Men', image: require('../assets/categories/Men.png') },
  { name: 'Women', image: require('../assets/categories/Women.png') },
  { name: 'Explore', image: require('../assets/categories/Explore.png') },
];

const products = [
  { id: 1, name: 'Simple Butterfly Pearl Earrings', price: '₹250', image: require('../assets/pr-1.png') },
  { id: 2, name: 'Elegant Gold Hoop Earrings', price: '₹300', image: require('../assets/pr-2.png') },
  { id: 3, name: 'Heart-shaped Diamond Earrings', price: '₹500', image: require('../assets/pr-3.png') },
  { id: 4, image: require('../assets/pr-4.png') },
  { id: 5, image: require('../assets/pr-5.png') },
  { id: 6, image: require('../assets/pr-6.png') },
];

const allProducts = [

  { id: '131', image: require('../assets/categories/Women/Ear-1.png'), name: 'Gold Bracelet', price: '\u20B9150', category: "EarRings" },
  { id: '140', image: require('../assets/categories/Women/Ear-2.png'), name: 'Silver Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '150', image: require('../assets/categories/Women/Ear-3.png'), name: 'Platinum Bracelet', price: '\u20B9170', category: "EarRings" },
  { id: '160', image: require('../assets/categories/Women/Ear-4.png'), name: 'Titanium Bracelet', price: '\u20B9200', category: "EarRings" },
  { id: '170', image: require('../assets/categories/Women/Ear-5.png'), name: 'Leather Bracelet', price: '\u20B980', category: "EarRings" },
  { id: '180', image: require('../assets/categories/Women/Ear-6.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '190', image: require('../assets/categories/Women/Ear-7.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '200', image: require('../assets/categories/Women/Ear-8.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '210', image: require('../assets/categories/Women/Ear-9.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '220', image: require('../assets/categories/Women/Ear-10.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '230', image: require('../assets/categories/Women/Ear-11.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '240', image: require('../assets/categories/Women/Ear-12.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '250', image: require('../assets/categories/Women/Ear-13.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '260', image: require('../assets/categories/Women/Ear-14.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '270', image: require('../assets/categories/Women/Ear-15.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '280', image: require('../assets/categories/Women/Ear-16.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '290', image: require('../assets/categories/Women/Ear-17.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '300', image: require('../assets/categories/Women/Ear-18.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '310', image: require('../assets/categories/Women/Ear-19.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  { id: '320', image: require('../assets/categories/Women/Ear-20.png'), name: 'Chain Bracelet', price: '\u20B9120', category: "EarRings" },
  
  
];

const Home = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0); // State to track current page
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("Fetching location...");

  useEffect(() => { //code for location
    (async () => {
      // Request permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission Denied", "Enable location permissions in settings.");
        return;
      }

      try {
        // Get current location
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);

        // Reverse geocode to get address
        let geocode = await Location.reverseGeocodeAsync(currentLocation.coords);
        if (geocode.length > 0) {
          const { name, street, subregion, district, city, region, country } = geocode[0];
          // ✅ Show precise area name in Hyderabad
          let formattedAddress = `${name || street || subregion || district}, ${city || region}`;
          setAddress(formattedAddress);
        }
      } catch (error) {
        console.log("Error fetching location:", error);
        setAddress("Unable to fetch location");
      }
    })();
  }, []);          //code for location


  

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / screenWidth); // Calculate current page
    setCurrentPage(pageIndex);
  };

 // Handle Search Input
 const handleSearchChange = (query) => {
  setSearchTerm(query);
  setDropdownVisible(true);
};

// Select an Option from Dropdown
const handleOptionSelect = (selectedProduct) => {
  setSearchTerm(selectedProduct.name);
  setDropdownVisible(false);
  handleSearchSubmit(selectedProduct.name);
};

// Handle Search Submit
const handleSearchSubmit = () => {
  if (searchTerm.trim()) {
    const matchedProduct = allProducts.find(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (matchedProduct) {
//       if (matchedProduct.category === "Kids") {
//         navigation.navigate("KidsAnkletsScreen", { search: searchTerm.trim() });
//       } else {
//         Alert.alert("Product Not Found", "No matching category found.");
//       }
//   }
// }

   // ✅ **Mapping categories to corresponding screens**
   const categoryToScreen = {
    kidsanklets: "KidsAnkletsScreen",
    kidsarmlets: "KidsArmletScreen",
    kidsbangles: "KidsBanglesScreen",
    EarRings: "WomenEarRingsScreen"
   
    
  };

  //  **Check if category exists in the mapping**
  const screenName = categoryToScreen[matchedProduct.category];

  if (screenName) {
    // 🔹 **Navigate to the correct screen dynamically**
    navigation.navigate(screenName, { searchedProduct: matchedProduct });
  } else {
    //  **Show an alert if no matching category found**
    Alert.alert("Product Not Found", "No matching category found.");
  }
} else {
  Alert.alert("Product Not Found", "No matching product found.");
}
}
  setDropdownVisible(false);
};

// Filtered Search Options
const filteredOptions = allProducts.filter((product) =>
  product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.category?.toLowerCase().includes(searchTerm.toLowerCase())
);






  return (
    <View style={styles.container}>
      {/* Top Section with Location and Profile Icons */}
      <View style={styles.header}>
        <View style={styles.locationWrapper}>
          <Icon name="map-marker" size={hp('3%')} color="white" style={styles.locationIcon} />
          <View>
            <Text style={styles.locationText}>{address} {/* ✅ Display Area Name Instead of Lat/Lng */}</Text>
            <Text style={styles.addressText}>Updating in real-time...</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Icon name="account-circle-outline" size={hp('4%')} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar and Bell Icon */}
      <View style={styles.searchSection}>

        <TextInput style={styles.searchBar} placeholder="Search" value={searchTerm}
          onChangeText={handleSearchChange} />
        <TouchableOpacity onPress={() => handleSearchSubmit(searchTerm)} />

        {/* <TextInput style={styles.searchBar} placeholder="Search" /></TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('notify')}>

          <Icon name="bell-outline" size={hp('3%')} color="white" />
        </TouchableOpacity>
      </View>
       {/* ✅ **Dropdown List for Search Results** */}
      {dropdownVisible && searchTerm && (
        <ScrollView style={styles.searchResults}>
          {filteredOptions.map((product, index) => (
            <TouchableOpacity key={index} onPress={() => handleOptionSelect(product)} style={styles.searchItem}>
              <Image source={product.image} style={styles.searchImage} />
              <View>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
  </ScrollView>
)}

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

        {/* Banner Section with Pagination */}
        <View style={styles.banner}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <Image source={require('../assets/hs-2.png')} style={styles.bannerImage} />
            <Image source={require('../assets/hs-1.png')} style={styles.bannerImage} />
            <Image source={require('../assets/hs-3.png')} style={styles.bannerImage} />
            <Image source={require('../assets/hs-4.png')} style={styles.bannerImage} />
          </ScrollView>
          <View style={styles.pagination}>
            {[0, 1, 2, 3].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentPage === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Product Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Bestseller</Text>

          {/* Horizontal Scroll for IDs 1, 2, 3 */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {products.slice(0, 3).map((product, index) => (
              <View key={index} style={styles.horizontalProduct}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Centered Product ID 4 */}
          <View style={styles.centeredProduct}>
            <Image source={products[3].image} style={styles.productImage4} />
          </View>

          {/* Bottom Row for IDs 5, 6 */}
          <View style={styles.bottomRow}>
            {products.slice(4).map((product, index) => (
              <View key={index} style={styles.bottomProduct}>
                <Image source={product.image} style={styles.productImage} />
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
    height: hp('6%'),
    width: wp('80%'),
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: 'white',
    color: 'black',
  },
  section: { paddingHorizontal: wp('5%'), marginBottom: hp('2%') },
  sectionTitle: { fontSize: hp('2.4%'), fontWeight: 'bold', color: '#4E1B50', marginBottom: hp('1.5%'),marginTop:hp('1.5%'),color:"black" },
  category: { alignItems: 'center', marginRight: wp('2%') },
  categoryImage: { width: wp('28%'), height: wp('28%') },
  categoryText: { marginTop: hp('1%'), fontSize: hp('1.8%'), color: 'black' },
  banner: { marginBottom: hp('2%') },
  bannerImage: { width: screenWidth, height: hp('25%'), resizeMode: 'cover', borderRadius: wp('4%') },
  pagination: { flexDirection: 'row', justifyContent: 'center', marginTop: hp('1%') },
  dot: { width: wp('2%'), height: wp('2%'), borderRadius: wp('1%'), marginHorizontal: wp('1%') },
  activeDot: { backgroundColor: '#4E1B50' },
  inactiveDot: { backgroundColor: '#CCCCCC' },
  horizontalScroll: { marginBottom: hp('2%') },
  horizontalProduct: { width: wp('40%'), alignItems: 'center', marginRight: wp('4%') },
  centeredProduct: { alignItems: 'center', marginBottom: hp('2%'),  },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between' },
  bottomProduct: { width: wp('45%'), alignItems: 'center' },
  productImage: { width: wp('40%'), height: hp('20%'), borderRadius: wp('2%') },
  productImage4: { 
    width: wp('90%'),  
    height: hp('25%'), 
    borderRadius: wp('2%'),
  },
  productName: { marginTop: hp('1%'), fontSize: hp('1.8%'), color: 'gray', textAlign: 'left' },
  productPrice: {marginRight:'85' , color: 'red',marginTop:'5' },

  searchResults: {
    position: "absolute",
    top: hp("18.5%"), // Position right below the search bar
    left: wp("5%"), // Align it with the search bar
    width: wp("80%"), // Match the search bar width
    backgroundColor: "white",
    borderRadius: wp("2%"), // Rounded edges for better UI
    maxHeight: hp("30%"), // Limit dropdown height
    overflow: "hidden", // Prevent content from overflowing
    zIndex: 10, // Ensure it appears above other elements
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
  },
  
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("3%"),
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0", // Subtle separator
    backgroundColor: "white", // Consistent background
  },
  
  searchImage: {
    width: wp("10%"),
    height: hp("5%"),
    borderRadius: wp("1%"), // Rounded corners for the image
    marginRight: wp("3%"),
  },
  
  productName: {
    fontSize: hp("1.8%"),
    fontWeight: "bold",
    color: "#333", // Neutral text color
  },
  
  productPrice: {
    fontSize: hp("1.6%"),
    color: "red",
    fontWeight: "bold",
    marginTop: hp("0.3%"),
  },
 
  
  
  
  
});

export default Home;
