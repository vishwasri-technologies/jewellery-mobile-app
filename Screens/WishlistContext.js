

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Wishlist Context
const WishlistContext = createContext();

// Custom Hook to use Wishlist Context
export const useWishlist = () => useContext(WishlistContext);

// Wishlist Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from AsyncStorage on app start
  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const savedWishlist = await AsyncStorage.getItem('wishlist');
        if (savedWishlist) {
          setWishlist(JSON.parse(savedWishlist));
        }
      } catch (error) {
        console.error('Failed to load wishlist:', error);
      }
    };

    loadWishlist();
  }, []);

  // Save wishlist to AsyncStorage whenever it changes
  useEffect(() => {
    const saveWishlist = async () => {
      try {
        await AsyncStorage.setItem('wishlist', JSON.stringify(wishlist));
      } catch (error) {
        console.error('Failed to save wishlist:', error);
      }
    };

    saveWishlist();
  }, [wishlist]);

  // Toggle Wishlist Function (Add/Remove)
  const toggleWishlist = (item) => {
    if (!item || !item.id || !item.image || !item.name || !item.price) {
      console.warn("Invalid item cannot be added to wishlist:", item);
      return;
    }

    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some((wishlistItem) => wishlistItem.id === item.id);
      return itemExists
        ? prevWishlist.filter((wishlistItem) => wishlistItem.id !== item.id) 
        : [...prevWishlist, item]; // Add if valid
    });
  };

  // Function to Remove Item from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};







