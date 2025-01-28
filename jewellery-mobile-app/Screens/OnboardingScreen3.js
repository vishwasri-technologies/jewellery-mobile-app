import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function OnboardingScreen3({ navigation }) {
   useEffect(() => {
          setTimeout(() => {
            navigation.replace('SignUp');
          }, 3000); 
        }, [navigation]);
  return (
    <View style={styles.container3}>
      {/* Background image */}
      <Image source={require('../assets/bg-3.png')} style={styles.backgroundImage} />
       
      {/* Bottom cone shape */}
      <View style={styles.bottomCone} />

      {/* Image */}
      <Image source={require('../assets/woman1.png')} style={styles.image3} />

      {/* Title */}
      <Text style={styles.title3}>Seamless & Secure Shopping</Text>

      {/* Description */}
      <Text style={styles.description3}>
        Enjoy a worry-free shopping experience. Trusted payments and quick delivery, every time.
      </Text>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton3} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.nextText3}>→</Text>
      </TouchableOpacity>
      
      {/* Dots for slides */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    marginTop:30,
  },
  bottomCone: {
    position: 'absolute',
    bottom: 0,
    left: -90,
    width: 200,
    height: 150,
    backgroundColor: '#957A97',
    transform: [{ rotate: '270deg' }],
    borderBottomRightRadius: 200,
  },
  image3: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 100,
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4E1B50',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 70,
  },
  description3: {
    fontSize: 16,
    color: '#4E1B50',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    width: '70%',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -10,
    marginRight: -250,
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
  nextButton3: {
    backgroundColor: '#4E1B50',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginRight: -250,
    marginBottom: 30,
  },
  nextText3: {
    color: 'white',
    fontSize: 28,
  },
});
