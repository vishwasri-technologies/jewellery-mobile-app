import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ImageBackground 
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function OnboardingScreen2({ navigation }) {
 

  return (
    <View style={styles.container}>
      {/* Background image */}
      <ImageBackground 
        source={require('../assets/bg-2.png')} 
        style={styles.backgroundImage}
      >
        {/* Bottom Cone Shape */}
        <View style={styles.bottomCone} />

        {/* Main Image */}
        <Image source={require('../assets/ob-ring.png')} style={styles.image} />

        {/* Title */}
        <Text style={styles.title}>Quality That Shines Bright</Text>

        {/* Description */}
        <Text style={styles.description}>
          Enjoy premium-grade jewelry made with precision. Designed to last and dazzle every day.
        </Text>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton2} onPress={() => navigation.navigate('Onboarding3')}>
          <Text style={styles.nextText}>→</Text>
        </TouchableOpacity>

        {/* Pagination Dots */}
        <View style={styles.dotsContainer2}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: wp('100%'),
    height: hp('65%'),
    justifyContent: 'center', 
    alignItems: 'center',
  },
  bottomCone: {
    position: 'absolute',
    bottom: -hp('5%'),
    left: -wp('18%'),
    width: wp('50%'),
    height: hp('25%'),
    backgroundColor: '#957A97',
    transform: [{ rotate: '270deg' }],
    borderBottomRightRadius: wp('50%'),
  },
  image: {
    width: wp('70%'),
    height: hp('35%'),
    resizeMode: 'contain',
    marginTop: hp('3%'),
    alignSelf: 'center',
  },
  title: {
    fontSize: wp('5%'), 
    fontWeight: 'bold',
    color: '#4E1B50',
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
  description: {
    fontSize: wp('4%'),
    color: '#4E1B50',
    textAlign: 'center',
    lineHeight: hp('3%'),
    width: wp('75%'),
    marginBottom: hp('3%'),
  },
 

  dotsContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('-10%'), 
    marginLeft:wp("59%"),
  },
  dot: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: wp('1.25%'),
    backgroundColor: '#D3C5D6',
    marginHorizontal: wp('1.5%'),
    bottom:hp(-3),
    
  },
  activeDot: {
    backgroundColor: '#4E1B50',
  },
 
  nextButton2: {
    backgroundColor: '#4E1B50',
    borderRadius: 40,
    paddingVertical: hp('1.1%'), 
    paddingHorizontal: wp('4%'), 
    marginBottom: hp('2%'), 
    marginLeft:wp("59%"),
    bottom:hp(-3),

  },
  nextText: {
    color: 'white',
    fontSize: wp('7%'),
    bottom:hp("0.3"),
  },
});
