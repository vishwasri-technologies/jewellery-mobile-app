import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import OnboardingScreen1 from './Screens/OnboardingScreen1';
import OnboardingScreen2 from './Screens/OnboardingScreen2';
import OnboardingScreen3 from './Screens/OnboardingScreen3';
import { StatusBar } from 'expo-status-bar';
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Home from './Screens/Home';
import UpdatePasswordScreen from "./Screens/Forgot"; 
import Wishlist from './Screens/Wishlist';
import Cart from './Screens/Cart';
import Categories from './Screens/Categories';
import Profile from "./Screens/Profile";
import EditProfile from "./Screens/Editprofile";

const Stack = createStackNavigator();

export default function App() {
  return (
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
        <Stack.Screen name="wishlist" component={ Wishlist} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
