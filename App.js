import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import { WishlistProvider } from "./Screens/WishlistContext"; 

import SplashScreen from "./Screens/SplashScreen";
import OnboardingScreen1 from "./Screens/OnboardingScreen1";
import OnboardingScreen2 from "./Screens/OnboardingScreen2";
import OnboardingScreen3 from "./Screens/OnboardingScreen3";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import UpdatePasswordScreen from "./Screens/Forgot";
import Cart from "./Screens/Cart";
import Categories from "./Screens/Categories";
import Profile from "./Screens/Profile";
import EditProfile from "./Screens/Editprofile";

import MenChainsScreen from "./Screens/MenChainsScreen";


import MenFingerRingsScreen from "./Screens/MenFingerRingsScreen";
import WomenRingsScreen from "./Screens/WomenRingsScreen";
import WomenEarRingsScreen from "./Screens/WomenEarRingsScreen";
import WomenBanglesScreen from "./Screens/WomenBanglesScreen";
import WomenBraceletsScreen from "./Screens/WomenBraceletsScreen";
import WomenBlackBeedsScreen from "./Screens/WomenBlackBeedsScreen";
import WomenNecklaceScreen from "./Screens/WomenNecklaceScreen";
import WomenChainsScreen from "./Screens/WomenChainsScreen";

import WishlistScreen from "./Screens/Wishlist";
import ProductDetails from "./Screens/ProductDetails";
import LocationScreen from "./Screens/Location";
import ProfileOrder from "./Screens/ProfileOrder";
import AddressList from "./Screens/ProfileAddress";
import EditAddress from "./Screens/EditAddress";
import AddAddress from "./Screens/Addaddress";
import TermsAndConditions from "./Screens/Terms";
import ReturnRefundPolicy from "./Screens/Refund";
import AboutUs from "./Screens/About";
import NotificationScreen from "./Screens/Notify";

import All from "./Screens/All";

import PaymentMethod from "./Screens/PaymentMethod";
import OrderConfirmation from './Screens/OrderConfirmation';


import OrderTracking from "./Screens/Tracking";
import ExistingOrder from "./Screens/ExistingOrder";


const Stack = createStackNavigator();

export default function App() {
  return (
    <WishlistProvider>
     
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
         
          <Stack.Screen name="MenChainsScreen" component={MenChainsScreen} />
         
          <Stack.Screen
            name="MenFingerRingsScreen"
            component={MenFingerRingsScreen}
          />
          <Stack.Screen name="WomenRingsScreen" component={WomenRingsScreen} />
          <Stack.Screen
            name="WomenEarRingsScreen"
            component={WomenEarRingsScreen}
          />
          <Stack.Screen
            name="WomenBanglesScreen"
            component={WomenBanglesScreen}
          />
          <Stack.Screen
            name="WomenBraceletsScreen"
            component={WomenBraceletsScreen}
          />
          <Stack.Screen
            name="WomenBlackBeedsScreen"
            component={WomenBlackBeedsScreen}
          />
          <Stack.Screen
            name="WomenNecklaceScreen"
            component={WomenNecklaceScreen}
          />
          <Stack.Screen
            name="WomenChainsScreen"
            component={WomenChainsScreen}
          />

          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="location" component={LocationScreen} />
          <Stack.Screen name="profileorder" component={ProfileOrder} />
          <Stack.Screen name="addresslist" component={AddressList} />
          <Stack.Screen name="editaddress" component={EditAddress} />
          <Stack.Screen name="addaddress" component={AddAddress} />
          <Stack.Screen name="terms" component={TermsAndConditions} />
          <Stack.Screen name="return" component={ReturnRefundPolicy} />
          <Stack.Screen name="about" component={AboutUs} />
          <Stack.Screen name="notify" component={NotificationScreen} />

          {/* <Stack.Screen name="Men" component={MenScreen} />
          <Stack.Screen name="Women" component={WomenScreen} /> */}
           <Stack.Screen name="all" component={All} />
           <Stack.Screen name="paymentMethod" component={PaymentMethod} />
           <Stack.Screen name="orderconfirmation" component={OrderConfirmation} />


          <Stack.Screen name="tracking" component={OrderTracking} />
          <Stack.Screen name="existingorder" component={ExistingOrder} />

        </Stack.Navigator>
      </NavigationContainer>
    </WishlistProvider>
  );

}


