

import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useWishlist } from './WishlistContext';
import BottomNavBar from './BottomNavbar';

const WishlistScreen = () => {
  const { wishlist } = useWishlist();

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, marginTop: 40 }}>
        My Wishlist
      </Text>

      <View style={{ flex: 1, justifyContent: wishlist.length === 0 ? 'center' : 'flex-start' }}>
        {wishlist.length === 0 ? (
          <Text style={{ fontSize: 16, textAlign: 'center' }}>No items in wishlist</Text>
        ) : (
          <FlatList
            data={wishlist}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            renderItem={({ item }) => (
              <View style={{ width: '48%', backgroundColor: '#fff', borderRadius: 8, padding: 10, margin: '1%', alignItems: 'center', elevation: 3 }}>
                <Image source={item.image} style={{ width: 100, height: 120, borderRadius: 5 }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: 'gray', textAlign: 'center' }}>{item.price}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Bottom Navigation Bar stays at the bottom */}
      <BottomNavBar />
    </View>
  );
};

export default WishlistScreen;

