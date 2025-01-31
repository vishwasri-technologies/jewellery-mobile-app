// MenScreen.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const menProducts = [
  { id: '1', image: 'https://via.placeholder.com/100', name: 'Bracelet' },
  { id: '2', image: 'https://via.placeholder.com/100', name: 'Necklace' },
  { id: '3', image: 'https://via.placeholder.com/100', name: 'Cufflinks' },
];

const MenScreen = () => (
  <FlatList
    data={menProducts}
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

export default MenScreen;
