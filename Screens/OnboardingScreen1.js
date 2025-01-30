import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    paddingHorizontal: wp('5%'), // 5% of screen width
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: hp('60%'), // 60% of screen height
    marginTop: hp('5%'), // 5% of screen height
    marginLeft:wp('9%'),
  },
  bottomCone: {
    position: 'absolute',
    bottom: 0,
    left: -wp('25%'), // 25% of screen width
    width: wp('50%'), // 50% of screen width
    height: hp('12%'), // 12% of screen height
    backgroundColor: '#957A97',
    transform: [{ rotate: '270deg' }],
    borderBottomRightRadius: wp('25%'),
    borderBottomLeftRadius: wp('25%'),
  },
  image1: {
    width: wp('80%'), // 80% of screen width
    height: hp('35%'), // 35% of screen height
    resizeMode: 'contain',
    marginTop: hp('16%'), // 15% of screen height
    marginLeft:wp('24%'),

  },
  title1: {
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: 'bold',
    color: '#4E1B50',
    textAlign: 'center',
    marginVertical: hp('2%'), // 2% of screen height
  },
  description1: {
    fontSize: wp('4%'), // 4% of screen width
    color: '#4E1B50',
    textAlign: 'center',
    lineHeight: hp('3%'), // 3% of screen height
    width: '80%',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'), // 2% of screen height
    marginLeft:wp("59%"),
  },
  dot: {
    width: wp('2.5%'), // 2.5% of screen width
    height: wp('2.5%'),
    borderRadius: wp('1.25%'), // Half of width
    backgroundColor: '#D3C5D6',
    marginHorizontal: wp('1.5%'), // 1.5% of screen width
    
  },
  activeDot: {
    backgroundColor: '#4E1B50',
  },
  nextButton1: {
    backgroundColor: '#4E1B50',
    borderRadius: 50,
    paddingVertical: hp('1.5%'), // 1.5% of screen height
    paddingHorizontal: wp('6%'), // 6% of screen width
    marginBottom: hp('2%'), // 2% of screen height
    marginLeft:wp("59%"),
  },
  nextText1: {
    color: 'white',
    fontSize: wp('7%'), // 7% of screen width
  },
});
