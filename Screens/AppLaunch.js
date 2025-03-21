import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AppLaunch = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkSession = async () => {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        // Token exists, navigate to Home/Welcome Screen
        navigation.replace("home");
      } else {
        // No token, navigate to Login Screen
        navigation.replace("SignIn");
      }
    };
    checkSession();
  }, [navigation]);

  return null; // Splash screen or loading animation can be added here
};

export default AppLaunch;