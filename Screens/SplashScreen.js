import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding1');
    }, 3000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>ViShu’s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E1B50',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05, 
  },
  logoText: {
    fontSize: height * 0.08,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'KeaniaOne',
    textAlign: 'center', 
  },
});
