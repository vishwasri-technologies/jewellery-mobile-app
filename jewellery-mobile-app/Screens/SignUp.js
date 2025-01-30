// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for the eye icon

// import googleIcon from "../assets/google-icon.png";
// import facebookIcon from "../assets/fb-icon.png";
// import appleIcon from "../assets/apple-iconn.png";
// import signup from "../assets/signup-img.png";

// const SignUp = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [emailPhone, setEmailPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [securePassword, setSecurePassword] = useState(true);

//   const handleSignUp = () => {
//     // Basic validation
//     if (!name || !emailPhone || !password) {
//       Alert.alert('Error', 'All fields are required!');
//       return;
//     }

//     const emailPhonePattern = /^[a-zA-Z0-9]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
//     const phonePattern = /^[0-9]{10}$/;

//     if (!emailPhonePattern.test(emailPhone) && !phonePattern.test(emailPhone)) {
//       Alert.alert('Error', 'Please enter a valid email or phone number');
//       return;
//     }

//     // Proceed with signup logic
//     Alert.alert('Success', 'Signed up successfully');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         {/* Logo and Image Container */}
//         <View style={styles.logoContainer}>
//           <Text style={styles.logo}>ViShu's</Text>
//           <Image source={signup} style={styles.image} />
//         </View>

//         {/* Form Container */}
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Sign up</Text>

//           {/* Full Name Input */}
//           <Text style={styles.inputHeading}>Full Name</Text>
//           <TextInput
//             placeholder="Name"
//             style={styles.input}
//             value={name}
//             onChangeText={setName}
//           />

//           {/* Email/Mobile Input */}
//           <Text style={styles.inputHeading}>Email/Mobile no</Text>
//           <TextInput
//             placeholder="Enter your email or phone number"
//             style={styles.input}
//             value={emailPhone}
//             onChangeText={setEmailPhone}
//             keyboardType="email-address"
//           />

//           {/* Password Input */}
//           <Text style={styles.inputHeading}>Password</Text>
//           <View style={styles.passwordContainer}>
//             <TextInput
//               placeholder="New password"
//               style={styles.input}
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={securePassword}
//             />
//             <TouchableOpacity
//               onPress={() => setSecurePassword(!securePassword)}
//               style={styles.eyeIconContainer}
//             >
//               <Icon
//                 name={securePassword ? 'eye-off-outline' : 'eye-outline'}
//                 size={24}
//                 color="black"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Sign Up Button */}
//           <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//             <Text style={styles.buttonText}>Sign up</Text>
//           </TouchableOpacity>

//          {/* Social Login Icons */}
// <View style={styles.socialContainer}>
//   <TouchableOpacity onPress={() => console.log("Google Login Clicked")}>
//     <Image source={googleIcon} style={styles.icon} />
//   </TouchableOpacity>

//   <TouchableOpacity onPress={() => console.log("Facebook Login Clicked")}>
//     <Image source={facebookIcon} style={styles.icon} />
//   </TouchableOpacity>

//   <TouchableOpacity onPress={() => console.log("Apple Login Clicked")}>
//     <Image source={appleIcon} style={styles.icon2} />
//   </TouchableOpacity>
// </View>

          

//           {/* Switch to SignIn */}
//           <Text style={styles.switchText}>
//             Already have an account?{' '}
//             <Text
//               style={styles.linkText}
//               onPress={() => navigation.navigate('SignIn')}
//             >
//               Sign in
//             </Text>
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   logoContainer: {
//     backgroundColor: "#47154B",
//     paddingVertical: 20,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 30,
//     width: '113%',
//   },
//   logo: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: -160,
//     marginTop: 20,
//   },
//   image: {
//     width: 320,
//     height: 200,
//     resizeMode: 'contain',
//     marginTop: -22,
//     position: "relative"
//   },
//   formContainer: {
//     width: '100%',
//     backgroundColor: '#fff',
//     paddingLeft: 12,
//     paddingRight: 12,
//     borderRadius: 10,
//     marginTop: -100,
//   },
//   title: {
//     fontSize: 24,
//     color: '#4A154B',
//     marginVertical: 10,
//     fontWeight: '600',
//     textAlign: "center",
//   },
//   inputHeading: {
//     fontSize: 16,
//     color: '#4A154B',
//     marginVertical: 5,
//     fontWeight: '500',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginVertical: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//   },
//   passwordContainer: {
//     position: 'relative',
//   },
//   eyeIconContainer: {
//     position: 'absolute',
//     right: 10,
//     top: 22,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#6A0E77',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   socialContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   icon: {
//     width: 45,
//     height: 40,
//     marginHorizontal: 15,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
   
//   },
//   icon2: {
//     width: 40,
//     height: 39,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     marginHorizontal: 10,
//   },
//   switchText: {
//     fontSize: 16,
//     color: 'black',
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   linkText: {
//     color: '#6A0E77',
//     fontWeight: 'bold',
//     textDecorationLine: "underline",
//   },
// });

// export default SignUp;












import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for the eye icon
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/fb-icon.png";
import appleIcon from "../assets/apple-iconn.png";
import signup from "../assets/signup-img.png";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);

  const handleSignUp = () => {
    // Basic validation
    if (!name || !emailPhone || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    const emailPhonePattern = /^[a-zA-Z0-9]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPhonePattern.test(emailPhone) && !phonePattern.test(emailPhone)) {
      Alert.alert('Error', 'Please enter a valid email or phone number');
      return;
    }

    // Proceed with signup logic
    Alert.alert('Success', 'Signed up successfully');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo and Image Container */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>ViShu's</Text>
          <Image source={signup} style={styles.image} />
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign up</Text>

          {/* Full Name Input */}
          <Text style={styles.inputHeading}>Full Name</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          {/* Email/Mobile Input */}
          <Text style={styles.inputHeading}>Email/Mobile no</Text>
          <TextInput
            placeholder="Enter your email or phone number"
            style={styles.input}
            value={emailPhone}
            onChangeText={setEmailPhone}
            keyboardType="email-address"
          />

          {/* Password Input */}
          <Text style={styles.inputHeading}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="New password"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={securePassword}
            />
            <TouchableOpacity
              onPress={() => setSecurePassword(!securePassword)}
              style={styles.eyeIconContainer}
            >
              <Icon
                name={securePassword ? 'eye-off-outline' : 'eye-outline'}
                size={wp(6)}
                color="black"
              />
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          {/* Social Login Icons */}
          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => console.log("Google Login Clicked")}>
              <Image source={googleIcon} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Facebook Login Clicked")}>
              <Image source={facebookIcon} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Apple Login Clicked")}>
              <Image source={appleIcon} style={styles.icon2} />
            </TouchableOpacity>
          </View>

          {/* Switch to SignIn */}
          <Text style={styles.switchText}>
            Already have an account?{' '}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate('SignIn')}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  logoContainer: {
    backgroundColor: "#47154B",
    paddingVertical: hp(2.5),
    paddingHorizontal: wp(10),
    borderRadius: wp(2),
    alignItems: 'center',
    marginBottom: hp(3),
    width: wp(113),
  },
  logo: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp(-40),
    marginTop: hp(2),
  },
  image: {
    width: wp(80),
    height: hp(25),
    resizeMode: 'contain',
    marginTop: hp(-2),
    position: "relative",
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: wp(3),
    paddingRight: wp(3),
    borderRadius: wp(2),
    marginTop: hp(-10),
  },
  title: {
    fontSize: wp(6),
    color: '#4A154B',
    marginVertical: hp(1),
    fontWeight: '600',
    textAlign: "center",
  },
  inputHeading: {
    fontSize: wp(4),
    color: '#4A154B',
    marginVertical: hp(0.5),
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: hp(6.5),
    backgroundColor: '#f5f5f5',
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    marginVertical: hp(1),
    borderColor: '#ccc',
    borderWidth: 1,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: wp(3),
    top: hp(2.5),
  },
  button: {
    width: '100%',
    height: hp(7),
    backgroundColor: '#6A0E77',
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  icon: {
    width: wp(12),
    height: hp(6),
    marginHorizontal: wp(3),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp(1),
  },
  icon2: {
    width: wp(10),
    height: hp(5),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp(1),
    marginHorizontal: wp(2.5),
  },
  switchText: {
    fontSize: wp(4),
    color: 'black',
    textAlign: "center",
    marginBottom: hp(2),
  },
  linkText: {
    color: '#6A0E77',
    fontWeight: 'bold',
    textDecorationLine: "underline",
  },
});

export default SignUp;

