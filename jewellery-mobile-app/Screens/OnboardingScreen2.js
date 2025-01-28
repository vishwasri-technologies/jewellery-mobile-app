import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function OnboardingScreen2({ navigation }) {
      useEffect(() => {
        setTimeout(() => {
          navigation.replace('Onboarding3');
        }, 3000); 
      }, [navigation]);
  return (
    <View style={styles.container2}>
      {/* Background shape */}
      <View style={styles.backgroundShape} />
       {/* Bottom cone shape */}
            <View style={styles.bottomCone} />

      {/* Image */}
      <Image source={require('../assets/ob-ring.png')} style={styles.image2} />

      {/* Title */}
      <Text style={styles.title2}>Quality That Shine Bright</Text>

      {/* Description */}
      <Text style={styles.description2}>
        Enjoy premium-grade jewelry made with precision. Designed to last and dazzle every day.
      </Text>

      

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton2} onPress={() => navigation.navigate('Onboarding3')}>
        <Text style={styles.nextText2}>→</Text>
      </TouchableOpacity>
      {/* Dots for slides */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#F7F1F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundShape: {
    position: 'absolute',
    top: 0,
    left: 0,
    right:0,
    width: '150%',
    height: '45%',
    backgroundColor: '#957A97', 
    marginTop:50,
 borderTopLeftRadius:250,
  borderBottomRightRadius:250,

 
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
  image2: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
    marginTop: 30,
    alignSelf: 'center', 
  },
  title2: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#4E1B50',
    textAlign: 'center',
    marginVertical: 10,
  },
  description2: {
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
    marginRight:-250,
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
  nextButton2: {
    backgroundColor: '#4E1B50',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginRight:-250,
    marginBottom:30,
   
  },
  nextText2: {
    color: 'white',
    fontSize: 28, 
  },
});
