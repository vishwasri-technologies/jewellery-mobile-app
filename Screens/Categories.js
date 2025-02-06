import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MenScreen from './MenScreen';
import WomenScreen from './WomenScreen';
import KidsScreen from './KidsScreen';

const TopTab = createMaterialTopTabNavigator();

const Categories = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Heading */}
      <View style={{ alignItems: 'flex-start', marginTop: 50, paddingLeft: 20,backgroundColor:'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#47154B' }}>
          Categories
        </Text>
      </View>

      {/* Tab Navigator */}
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', marginTop: 20, width: 'auto' },
          tabBarIndicatorStyle: { backgroundColor: 'purple' },
          swipeEnabled: false,  // Disable swipe navigation
        }}
      >
        <TopTab.Screen
          name="Men"
          component={MenScreen}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault(); // Prevent default behavior
              navigation.navigate('Men'); // Explicitly navigate
            },
          })}
        />
        <TopTab.Screen
          name="Women"
          component={WomenScreen}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault(); // Prevent default behavior
              navigation.navigate('Women'); // Explicitly navigate
            },
          })}
        />
        <TopTab.Screen
          name="Kids"
          component={KidsScreen}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault(); // Prevent default behavior
              navigation.navigate('Kids'); // Explicitly navigate
            },
          })}
        />
      </TopTab.Navigator>
    </View>
  );
};

export default Categories;
