import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchProducts = async (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      try {
        const response = await axios.get(`http://192.168.29.178:5000/api/products/search?query=${query}`);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setFilteredProducts([]); // Reset when no search
    }
  };

  return (
    <SearchContext.Provider value={{ searchQuery, searchProducts, allProducts, setAllProducts, filteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
