import React  from 'react';
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
    paddingHorizontal: wp('5%'), 
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: hp('50%'), 
    marginTop: hp('3%'), 
    marginLeft:wp('9%'),
  },
  bottomCone: {
    position: 'absolute',
    bottom: 0,
    left: -wp('25%'), 
    width: wp('50%'), 
    height: hp('12%'), 
    backgroundColor: '#957A97',
    transform: [{ rotate: '270deg' }],
    borderBottomRightRadius: wp('25%'),
    borderBottomLeftRadius: wp('25%'),
  },
  image1: {
    width: wp('57%'), 
    height: hp('35%'), 
    resizeMode: 'contain',
    marginTop: hp('6%'), 
    marginLeft:wp('35%'),

  },
  title1: {
    fontSize: wp('5%'), 
    fontWeight: 'bold',
    color: '#4E1B50',
    textAlign: 'center',
    marginVertical: hp('2%'), 
  },
  description1: {
    fontSize: wp('4%'), 
    color: '#4E1B50',
    textAlign: 'center',
    lineHeight: hp('3%'), 
    width: '80%',
    
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'), 
    marginLeft:wp("52%"),
  },
  dot: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: wp('1.25%'),
    backgroundColor: '#D3C5D6',
    marginHorizontal: wp('1.5%'),
    bottom:hp(-4),
   
    
  },
  activeDot: {
    backgroundColor: '#4E1B50',
  },
  nextButton1: {
    backgroundColor: '#4E1B50',
    borderRadius: 50,
    paddingVertical: hp('1.5%'), 
    paddingHorizontal: wp('6%'), 
    marginBottom: hp('2%'), 
    marginLeft:wp("52%"),
    bottom:hp(-4),
  
  },
  nextText1: {
    color: 'white',
    fontSize: wp('7%'),
  },
});









// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// export default function OnboardingScreen1({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/* Background image */}
//       <ImageBackground
//         source={require('../assets/bg-1.png')}
//         style={styles.backgroundImage}
//       >
//         <View style={styles.innerContainer}>
//           {/* Image Container */}
//           <View style={styles.imageContainer}>
//             <Image source={require('../assets/woman.png')} style={styles.image} />
//           </View>

//           {/* Title */}
//           <Text style={styles.title}>Jewellery for Every Budget</Text>

//           {/* Description */}
//           <Text style={styles.description}>
//             Discover affordable pieces without compromising on quality. Sparkle your way within your price range.
//           </Text>

//           {/* Next Button */}
//           <TouchableOpacity
//             style={styles.nextButton}
//             onPress={() => navigation.navigate('Onboarding2')}
//           >
//             <Text style={styles.nextText}>→</Text>
//           </TouchableOpacity>

//           {/* Dots for slides */}
//           <View style={styles.dotsContainer}>
//             <View style={[styles.dot, styles.activeDot]} />
//             <View style={styles.dot} />
//             <View style={styles.dot} />
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     position: 'absolute',
//   },
//   innerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     paddingBottom: hp('5%'),
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: hp('40%'), 
//   },
//   image: {
//     width: wp('50%'),
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: wp('5%'),
//     fontWeight: 'bold',
//     color: '#4E1B50',
//     textAlign: 'center',
//     marginTop: hp('2%'),
//   },
//   description: {
//     fontSize: wp('4%'),
//     color: '#4E1B50',
//     textAlign: 'center',
//     lineHeight: hp('3%'),
//     marginHorizontal: wp('10%'),
//     marginTop: hp('1%'),
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: hp('2%'),
//   },
//   dot: {
//     width: wp('2%'),
//     height: wp('2%'),
//     borderRadius: wp('1%'),
//     backgroundColor: '#D3C5D6',
//     marginHorizontal: wp('1%'),
//   },
//   activeDot: {
//     backgroundColor: '#4E1B50',
//   },
//   nextButton: {
//     backgroundColor: '#4E1B50',
//     borderRadius: 25,
//     paddingVertical: hp('1%'),
//     paddingHorizontal: wp('5%'),
//     marginTop: hp('2%'),
//   },
//   nextText: {
//     color: 'white',
//     fontSize: wp('5%'),
//   },
// });
