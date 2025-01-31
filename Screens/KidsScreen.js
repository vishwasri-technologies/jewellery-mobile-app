// KidsScreen.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const kidsProducts = [
  { id: '7', image: 'https://via.placeholder.com/100', name: 'Bracelet' },
  { id: '8', image: 'https://via.placeholder.com/100', name: 'Anklet' },
  { id: '9', image: 'https://via.placeholder.com/100', name: 'Rings' },
];

const KidsScreen = () => (
  <FlatList
    data={kidsProducts}
    keyExtractor={(item) => item.id}
    numColumns={2}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  item: { flex: 1, margin: 10, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 10 },
  text: { marginTop: 5, fontSize: 14, fontWeight: 'bold' },
});

export default KidsScreen;
