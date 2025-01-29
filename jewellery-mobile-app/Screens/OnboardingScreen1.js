import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function OnboardingScreen1({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding2');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container1}>
      {/* Background image */}
      <ImageBackground 
        source={require('../assets/bg-1.png')} 
        style={styles.backgroundImage}
      >
        {/* Bottom cone shape */}
        <View style={styles.bottomCone} />

        {/* Image */}
        <Image source={require('../assets/woman.png')} style={styles.image1} />

        {/* Title */}
        <Text style={styles.title1}>Jewellery for Every Budget</Text>

        {/* Description */}
        <Text style={styles.description1}>
          Discover affordable pieces without compromising on quality. Sparkle your way within your price range.
        </Text>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton1} onPress={() => navigation.navigate('Onboarding2')}>
          <Text style={styles.nextText1}>→</Text>
        </TouchableOpacity>

        {/* Dots for slides */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60%',
    marginTop:42,
    marginRight:-40,
    
  },
  bottomCone: {
    position: 'absolute',
    bottom: 0,
    left: -100,
    width: 200,
    height: 100,
    backgroundColor: '#957A97',
    transform: [{ rotate: '270deg' }],
    // borderBottomRightRadius: 200,
    borderBottomRightRadius:100,
    borderBottomLeftRadius:100,
  },
  image1: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
    marginTop: 120,
    marginRight: -70,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4E1B50',
    textAlign: 'center',
    marginVertical: 10,
    marginLeft:-40,
   
    marginTop: 40,
  },
  description1: {
    fontSize: 16,
    color: '#4E1B50',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    width: '70%',
    marginLeft:-40,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -2,
    marginRight: -200,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D3C5D6',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4E1B50',
  },
  nextButton1: {
    backgroundColor: '#4E1B50',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
   
    marginBottom: 10,
    marginRight: -200,
  },
  nextText1: {
    color: 'white',
    fontSize: 28,
  },
});
