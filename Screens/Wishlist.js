



import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useWishlist } from './WishlistContext';
import BottomNavBar from './BottomNavbar';

const WishlistScreen = () => {
  const { wishlist } = useWishlist();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Wishlist</Text>
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>No items in wishlist</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          )}
        />
      
      )}
        <>
        <BottomNavBar/>
        </>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, marginTop: 25 },
  emptyText: { fontSize: 16, textAlign: 'center', marginTop: 20 },
  item: { width: '48%', backgroundColor: '#fff', borderRadius: 8, padding: 10, margin: '1%', alignItems: 'center', elevation: 3 },
  image: { width: 100, height: 120, borderRadius: 5 },
  name: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 5 },
  price: { fontSize: 14, color: 'gray', textAlign: 'center' },
});

export default WishlistScreen;
