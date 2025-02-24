



// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import MenScreen from './MenScreen';
// import WomenScreen from './WomenScreen';
// import BottomNavBar from './BottomNavbar';

// const TopTab = createMaterialTopTabNavigator();

// const Categories = () => {
//   const route = useRoute();
//   const [activeTab, setActiveTab] = useState(route.params?.selectedTab || 'Men'); 

//   useEffect(() => {
//     if (route.params?.selectedTab) {
//       setActiveTab(route.params.selectedTab);
//     }
//   }, [route.params?.selectedTab]);

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Heading */}
//       <View style={{ alignItems: 'flex-start', marginTop: 50, paddingLeft: 20, backgroundColor: 'white' }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#47154B' }}>
//           Categories
//         </Text>
//       </View>

//       {/* Tab Navigator */}
//       <TopTab.Navigator
//         initialRouteName={activeTab} 
//         screenOptions={{
//           tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', marginTop: 20, width: 'auto' },
//           tabBarIndicatorStyle: { backgroundColor: 'purple' },
//           swipeEnabled: false, 
//         }}
//       >
//         <TopTab.Screen name="Men" component={MenScreen} />
//         <TopTab.Screen name="Women" component={WomenScreen} />
//       </TopTab.Navigator>

//       <BottomNavBar />
//     </View>
//   );
// };

// export default Categories;


import React, { useEffect, useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import MenScreen from './MenScreen';
import WomenScreen from './WomenScreen';
import BottomNavBar from './BottomNavbar';

const TopTab = createMaterialTopTabNavigator();

const Categories = () => {
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(route.params?.selectedTab || 'Men');
  const lastTabSwitchTime = useRef(0);
  const DEBOUNCE_DELAY = 300; // 300ms delay between tab switches

  const handleTabPress = (e, tabName) => {
    const currentTime = Date.now();
    
    // Check if enough time has passed since the last tab switch
    if (currentTime - lastTabSwitchTime.current < DEBOUNCE_DELAY) {
      e.preventDefault(); // Prevent tab switch if switching too fast
      return;
    }

    lastTabSwitchTime.current = currentTime;
    setActiveTab(tabName);
  };

  useEffect(() => {
    if (route.params?.selectedTab) {
      setActiveTab(route.params.selectedTab);
    }
  }, [route.params?.selectedTab]);

  return (
    <View style={{ flex: 1 }}>
      {/* Heading */}
      <View style={{ 
        alignItems: 'flex-start', 
        marginTop: 50, 
        paddingLeft: 20, 
        backgroundColor: 'white' 
      }}>
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          color: '#47154B' 
        }}>
          Categories
        </Text>
      </View>

      {/* Tab Navigator */}
      <TopTab.Navigator
        initialRouteName={activeTab}
        screenOptions={{
          tabBarLabelStyle: { 
            fontSize: 14, 
            fontWeight: 'bold', 
            marginTop: 20, 
            width: 'auto' 
          },
          tabBarIndicatorStyle: { backgroundColor: 'purple' },
          swipeEnabled: false,
          tabBarPressOpacity: 1,
        }}
      >
        <TopTab.Screen 
          name="Men" 
          component={MenScreen}
          listeners={{
            tabPress: (e) => handleTabPress(e, 'Men'),
            focus: () => setActiveTab('Men')
          }}
        />
        <TopTab.Screen 
          name="Women" 
          component={WomenScreen}
          listeners={{
            tabPress: (e) => handleTabPress(e, 'Women'),
            focus: () => setActiveTab('Women')
          }}
        />
      </TopTab.Navigator>

      <BottomNavBar />
    </View>
  );
};

export default Categories;