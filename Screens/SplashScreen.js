import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding1');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Vishu-logo.png')}
        style={styles.logo}
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8,  
    height: height * 0.5,
  },
});
