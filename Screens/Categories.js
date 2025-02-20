






import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import MenScreen from './MenScreen';
import WomenScreen from './WomenScreen';
import BottomNavBar from './BottomNavbar';

const TopTab = createMaterialTopTabNavigator();

const Categories = () => {
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(route.params?.selectedTab || 'Men'); // Default to Men

  useEffect(() => {
    if (route.params?.selectedTab) {
      setActiveTab(route.params.selectedTab);
    }
  }, [route.params?.selectedTab]);

  return (
    <View style={{ flex: 1 }}>
      {/* Heading */}
      <View style={{ alignItems: 'flex-start', marginTop: 50, paddingLeft: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#47154B' }}>
          Categories
        </Text>
      </View>

      {/* Tab Navigator */}
      <TopTab.Navigator
        initialRouteName={activeTab} 
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', marginTop: 20, width: 'auto' },
          tabBarIndicatorStyle: { backgroundColor: 'purple' },
          swipeEnabled: false, 
        }}
      >
        <TopTab.Screen name="Men" component={MenScreen} />
        <TopTab.Screen name="Women" component={WomenScreen} />
      </TopTab.Navigator>

      <BottomNavBar />
    </View>
  );
};

export default Categories;









// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useRoute } from '@react-navigation/native';
// import MenScreen from './MenScreen';
// import WomenScreen from './WomenScreen';
// import BottomNavBar from './BottomNavbar';

// const TopTab = createMaterialTopTabNavigator();

// const Categories = () => {
//   const route = useRoute();
//   const [activeTab, setActiveTab] = useState(route.params?.selectedTab || 'Men'); // Default to Men

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
//         screenOptions={({ navigation }) => ({
//           tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', marginTop: 20, width: 'auto' },
//           tabBarIndicatorStyle: { backgroundColor: 'purple' },
//           swipeEnabled: false,
//         })}
//       >
//         <TopTab.Screen 
//           name="Men" 
//           component={MenScreen} 
//           listeners={({ navigation }) => ({
//             tabPress: (e) => {
//               e.preventDefault(); // Prevent default behavior
//               if (activeTab !== 'Men') {
//                 setActiveTab('Men');
//                 navigation.navigate('Men'); // Ensuring the tab stays selected
//               }
//             },
//           })}
//         />
//         <TopTab.Screen 
//           name="Women" 
//           component={WomenScreen} 
//           listeners={({ navigation }) => ({
//             tabPress: (e) => {
//               e.preventDefault(); // Prevent default behavior
//               if (activeTab !== 'Women') {
//                 setActiveTab('Women');
//                 navigation.navigate('Women'); // Ensuring the tab stays selected
//               }
//             },
//           })}
//         />
//       </TopTab.Navigator>

//       <BottomNavBar />
//     </View>
//   );
// };

// export default Categories;
