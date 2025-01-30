import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const categories = [
  { name: 'Necklace', image: require('../assets/google-icon.png') },
  { name: 'Bracelet', image: require('../assets/google-icon.png') },
  { name: 'Bangles', image: require('../assets/google-icon.png') },
  { name: 'Chains', image: require('../assets/google-icon.png') },
];

const Home = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Top Section with Location and Profile Icons */}
      <View style={styles.header}>
        <View style={styles.locationWrapper}>
          <Icon name="map-marker" size={20} color="white" style={styles.locationIcon} />
          <View>
            <Text style={styles.locationText}>Prakash Nagar</Text>
            <Text style={styles.addressText}>H.no 777, near NST Colony...</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="account-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar and Bell Icon */}
      <View style={styles.searchSection}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity>
          <Icon name="bell-outline" size={25} color="white" />
        </TouchableOpacity>
      </View>

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
        <Image source={require('../assets/google-icon.png')} style={styles.bannerImage} />
      </View>

      <ScrollView>
        {/* Example Product Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Bestseller</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.productRow}>
              <View style={styles.product}>
                <Image source={require('../assets/google-icon.png')} style={styles.productImage} />
                <Text style={styles.productName}>Simple Butterfly Pearl Earrings</Text>
                <Text style={styles.productPrice}>₹250</Text>
              </View>
              <View style={styles.product}>
                <Image source={require('../assets/google-icon.png')} style={styles.productImage} />
                <Text style={styles.productName}>Elegant Gold Hoop Earrings</Text>
                <Text style={styles.productPrice}>₹300</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('home')}>
          <Icon name="home-outline" size={25} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('wishlist')}>
          <Icon name="heart-outline" size={25} color="white" />
          <Text style={styles.navText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('cart')}>
          <Icon name="cart-outline" size={25} color="white" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('categories')}>
          <Icon name="cog-outline" size={25} color="white" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    backgroundColor: '#47154B',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationWrapper: { flexDirection: 'row', alignItems: 'center' },
  locationIcon: { marginRight: 8 },
  locationText: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  addressText: { fontSize: 14, color: 'white' },
  searchSection: {
    backgroundColor: '#47154B',
    paddingHorizontal: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 40,
    width: '85%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    color: 'black',
  },
  section: { paddingHorizontal: 10, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#4E1B50', marginBottom: 10 },
  category: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 70, height: 70, borderRadius: 35 },
  categoryText: { marginTop: 5, fontSize: 14, color: '#4E1B50' },
  banner: { paddingHorizontal: 10, marginBottom: 20 },
  bannerImage: { width: '50%', height: 180, borderRadius: 15 },
  productRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  product: { alignItems: 'center' },
  productImage: { width: '50%', height: 120, borderRadius: 10 },
  productName: { marginTop: 5, fontSize: 14, color: '#4E1B50', textAlign: 'center' },
  productPrice: { fontSize: 14, color: '#957A97' },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#47154B',
  },
  navItem: { alignItems: 'center' },
  navText: { marginTop: 5, fontSize: 12, color: 'white' },
});

export default Home;
