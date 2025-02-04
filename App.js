// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './Screens/SplashScreen';
// import OnboardingScreen1 from './Screens/OnboardingScreen1';
// import OnboardingScreen2 from './Screens/OnboardingScreen2';
// import OnboardingScreen3 from './Screens/OnboardingScreen3';
// import { StatusBar } from 'expo-status-bar';
// import SignIn from "./Screens/SignIn";
// import SignUp from "./Screens/SignUp";
// import Home from './Screens/Home';
// import UpdatePasswordScreen from "./Screens/Forgot"; 

// import Cart from './Screens/Cart';
// import Categories from './Screens/Categories';
// import Profile from "./Screens/Profile";
// import EditProfile from "./Screens/Editprofile";
// import MenBraceletsScreen from './Screens/MenBraceletsScreen';
// import MenChainsScreen from './Screens/MenChainsScreen';
// import MenEarRingsScreen from './Screens/MenEarRingsScreen';
// import Wishlist from "./Screens/Wishlist";

// import MenFingerRingsScreen from './Screens/MenFingerRingsScreen';
// import WomenRingsScreen from './Screens/WomenRingsScreen';
// import WomenEarRingsScreen from './Screens/WomenEarRingsScreen';
// import WomenBanglesScreen from './Screens/WomenBanglesScreen';
// import WomenBraceletsScreen from './Screens/WomenBraceletsScreen';
// import WomenChainsScreen from './Screens/WomenChainsScreen';
// import WomenNecklaceScreen from './Screens/WomenNecklaceScreen';
// import WomenNosepinScreen from './Screens/WomenNosepinScreen';
// import WomenAnkletsScreen from './Screens/WomenAnkletsScreen';
// import WomenHipbeltScreen from './Screens/WomenHipbeltScreen';
// import WomenArmletScreen from './Screens/WomenArmletScreen';
// import WomenHairExtensionsScreen from './Screens/WomenHairExtensionsScreen';
// import KidsRingsScreen from './Screens/KidsRingsScreen';
// import KidsEarRingsScreen from './Screens/KidsEarRingsScreen';
// import KidsBanglesScreen from './Screens/KidsBanglesScreen';
// import KidsBraceletsScreen from './Screens/KidsBraceletsScreen';
// import KidsChainsScreen from './Screens/KidsChainsScreen';
// import KidsNecklaceScreen from './Screens/KidsNecklaceScreen';
// import KidsNosepinScreen from './Screens/KidsNosepinScreen';
// import KidsAnkletsScreen from './Screens/KidsAnkletsScreen';
// import KidsHipbeltScreen from './Screens/KidsHipbeltScreen';
// import KidsArmletScreen from './Screens/KidsArmletScreen';
// import KidsHairExtensionsScreen from './Screens/KidsHairExtensionsScreen';




// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar style="light" backgroundColor="#47154B" /> 
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
//         <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
//         <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
//         <Stack.Screen name="SignIn" component={SignIn} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//         <Stack.Screen name="forgot" component={UpdatePasswordScreen} />
//         <Stack.Screen name="home" component={Home} />
//         <Stack.Screen name="Wishlist" component={Wishlist} />
    
//         <Stack.Screen name="cart" component={Cart} />
//         <Stack.Screen name="categories" component={Categories} />
//         <Stack.Screen name="profile" component={Profile} />
//         <Stack.Screen name="EditProfile" component={EditProfile} />
//         <Stack.Screen name="MenBraceletsScreen" component={MenBraceletsScreen} />
//         <Stack.Screen name="MenChainsScreen" component={MenChainsScreen} />
//         <Stack.Screen name="MenEarRingsScreen" component={MenEarRingsScreen} />
//         <Stack.Screen name="MenFingerRingsScreen" component={MenFingerRingsScreen} />
//         <Stack.Screen name="WomenRingsScreen" component={WomenRingsScreen} />
//         <Stack.Screen name="WomenEarRingsScreen" component={WomenEarRingsScreen} />
//         <Stack.Screen name="WomenBanglesScreen" component={WomenBanglesScreen} /> 
//         <Stack.Screen name="WomenBraceletsScreen" component={WomenBraceletsScreen} />
//         <Stack.Screen name="WomenChainsScreen" component={WomenChainsScreen} />
//         <Stack.Screen name="WomenNecklaceScreen" component={WomenNecklaceScreen} />
//         <Stack.Screen name="WomenNosepinScreen" component={WomenNosepinScreen} />
//         <Stack.Screen name="WomenAnkletsScreen" component={WomenAnkletsScreen} />
//         <Stack.Screen name="WomenHipbeltScreen" component={WomenHipbeltScreen} />
//         <Stack.Screen name="WomenArmletScreen" component={WomenArmletScreen} />
//         <Stack.Screen name="WomenHairExtensionsScreen" component={WomenHairExtensionsScreen} />
//         <Stack.Screen name="KidsRingsScreen" component={KidsRingsScreen} />
//         <Stack.Screen name="KidsEarRingsScreen" component={KidsEarRingsScreen} />
//         <Stack.Screen name="KidsBanglesScreen" component={KidsBanglesScreen} /> 
//         <Stack.Screen name="KidsBraceletsScreen" component={KidsBraceletsScreen} />
//         <Stack.Screen name="KidsChainsScreen" component={KidsChainsScreen} />
//         <Stack.Screen name="KidsNecklaceScreen" component={KidsNecklaceScreen} />
//         <Stack.Screen name="KidsNosepinScreen" component={KidsNosepinScreen} />
//         <Stack.Screen name="KidsAnkletsScreen" component={KidsAnkletsScreen} />
//         <Stack.Screen name="KidsHipbeltScreen" component={KidsHipbeltScreen} />
//         <Stack.Screen name="KidsArmletScreen" component={KidsArmletScreen} />
//         <Stack.Screen name="KidsHairExtensionsScreen" component={KidsHairExtensionsScreen} />
      
        

//       </Stack.Navigator>
//     </NavigationContainer>
    
//   );
// }















import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { WishlistProvider } from './Screens/WishlistContext'; // Import WishlistProvider

import SplashScreen from './Screens/SplashScreen';
import OnboardingScreen1 from './Screens/OnboardingScreen1';
import OnboardingScreen2 from './Screens/OnboardingScreen2';
import OnboardingScreen3 from './Screens/OnboardingScreen3';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import UpdatePasswordScreen from './Screens/Forgot';
import Cart from './Screens/Cart';
import Categories from './Screens/Categories';
import Profile from './Screens/Profile';
import EditProfile from './Screens/Editprofile';
import MenBraceletsScreen from './Screens/MenBraceletsScreen';
import MenChainsScreen from './Screens/MenChainsScreen';
import MenEarRingsScreen from './Screens/MenEarRingsScreen';
import Wishlist from './Screens/Wishlist';
import MenFingerRingsScreen from './Screens/MenFingerRingsScreen';
import WomenRingsScreen from './Screens/WomenRingsScreen';
import WomenEarRingsScreen from './Screens/WomenEarRingsScreen';
import WomenBanglesScreen from './Screens/WomenBanglesScreen';
import WomenBraceletsScreen from './Screens/WomenBraceletsScreen';
import WomenChainsScreen from './Screens/WomenChainsScreen';
import WomenNecklaceScreen from './Screens/WomenNecklaceScreen';
import WomenNosepinScreen from './Screens/WomenNosepinScreen';
import WomenAnkletsScreen from './Screens/WomenAnkletsScreen';
import WomenHipbeltScreen from './Screens/WomenHipbeltScreen';
import WomenArmletScreen from './Screens/WomenArmletScreen';
import WomenHairExtensionsScreen from './Screens/WomenHairExtensionsScreen';
import KidsRingsScreen from './Screens/KidsRingsScreen';
import KidsEarRingsScreen from './Screens/KidsEarRingsScreen';
import KidsBanglesScreen from './Screens/KidsBanglesScreen';
import KidsBraceletsScreen from './Screens/KidsBraceletsScreen';
import KidsChainsScreen from './Screens/KidsChainsScreen';
import KidsNecklaceScreen from './Screens/KidsNecklaceScreen';
import KidsNosepinScreen from './Screens/KidsNosepinScreen';
import KidsAnkletsScreen from './Screens/KidsAnkletsScreen';
import KidsHipbeltScreen from './Screens/KidsHipbeltScreen';
import KidsArmletScreen from './Screens/KidsArmletScreen';
import KidsHairExtensionsScreen from './Screens/KidsHairExtensionsScreen';
import WishlistScreen from './Screens/Wishlist';

const Stack = createStackNavigator();

export default function App() {
  return (
    <WishlistProvider> {/* Wrap the app with the WishlistProvider */}
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#47154B" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
          <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
          <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="forgot" component={UpdatePasswordScreen} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Wishlist" component={WishlistScreen} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="MenBraceletsScreen" component={MenBraceletsScreen} />
          <Stack.Screen name="MenChainsScreen" component={MenChainsScreen} />
          <Stack.Screen name="MenEarRingsScreen" component={MenEarRingsScreen} />
          <Stack.Screen name="MenFingerRingsScreen" component={MenFingerRingsScreen} />
          <Stack.Screen name="WomenRingsScreen" component={WomenRingsScreen} />
          <Stack.Screen name="WomenEarRingsScreen" component={WomenEarRingsScreen} />
          <Stack.Screen name="WomenBanglesScreen" component={WomenBanglesScreen} />
          <Stack.Screen name="WomenBraceletsScreen" component={WomenBraceletsScreen} />
          <Stack.Screen name="WomenChainsScreen" component={WomenChainsScreen} />
          <Stack.Screen name="WomenNecklaceScreen" component={WomenNecklaceScreen} />
          <Stack.Screen name="WomenNosepinScreen" component={WomenNosepinScreen} />
          <Stack.Screen name="WomenAnkletsScreen" component={WomenAnkletsScreen} />
          <Stack.Screen name="WomenHipbeltScreen" component={WomenHipbeltScreen} />
          <Stack.Screen name="WomenArmletScreen" component={WomenArmletScreen} />
          <Stack.Screen name="WomenHairExtensionsScreen" component={WomenHairExtensionsScreen} />
          <Stack.Screen name="KidsRingsScreen" component={KidsRingsScreen} />
          <Stack.Screen name="KidsEarRingsScreen" component={KidsEarRingsScreen} />
          <Stack.Screen name="KidsBanglesScreen" component={KidsBanglesScreen} />
          <Stack.Screen name="KidsBraceletsScreen" component={KidsBraceletsScreen} />
          <Stack.Screen name="KidsChainsScreen" component={KidsChainsScreen} />
          <Stack.Screen name="KidsNecklaceScreen" component={KidsNecklaceScreen} />
          <Stack.Screen name="KidsNosepinScreen" component={KidsNosepinScreen} />
          <Stack.Screen name="KidsAnkletsScreen" component={KidsAnkletsScreen} />
          <Stack.Screen name="KidsHipbeltScreen" component={KidsHipbeltScreen} />
          <Stack.Screen name="KidsArmletScreen" component={KidsArmletScreen} />
          <Stack.Screen name="KidsHairExtensionsScreen" component={KidsHairExtensionsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WishlistProvider>
  );
}

