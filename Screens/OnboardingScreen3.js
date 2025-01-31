






import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function OnboardingScreen3({ navigation }) {
 

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
    paddingHorizontal: wp(5),
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wp(100),
    height: hp(50),
    marginTop: hp(4),
  },
  bottomCone: {
    position: 'absolute',
    bottom: 0,
    left: wp(-15),
    width: wp(50),
    height: hp(20),
    backgroundColor: '#957A97',
    transform: [{ rotate: '270deg' }],
    borderBottomRightRadius: wp(50),
  },
  image3: {
    width: wp(80),
    height: hp(47),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: hp(0),
    marginRight: wp(20),
  },
  title3: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#4E1B50',
    textAlign: 'center',
    marginVertical: hp(1),
    marginTop: hp(7),
  },
  description3: {
    fontSize: wp(4),
    color: '#4E1B50',
    textAlign: 'center',
    marginBottom: hp(2),
    lineHeight: wp(6),
    width: wp(70),
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: hp(0),
    marginRight: wp(-60),
  },
  dot: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.25),
    backgroundColor: '#D3C5D6',
    marginHorizontal: wp(1.25),
    bottom:hp(6),
   
  },
  activeDot: {
    backgroundColor: '#4E1B50',
  },
  nextButton3: {
    backgroundColor: '#4E1B50',
    borderRadius: wp(50),
    padding: hp(1.5),
    paddingHorizontal: wp(6),
    marginTop: hp(2),
    marginRight: wp(-60),
    marginBottom: hp(9),
  },
  nextText3: {
    color: 'white',
    fontSize: wp(7),
  },
});

