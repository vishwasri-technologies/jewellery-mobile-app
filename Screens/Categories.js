
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MenScreen from './MenScreen';
import WomenScreen from './WomenScreen';
import BottomNavBar from './BottomNavbar';

const Categories = () => {
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(route.params?.selectedTab || 'Men');
  
  useEffect(() => {
    if (route.params?.selectedTab) {
      setActiveTab(route.params.selectedTab);
    }
  }, [route.params?.selectedTab]);
  
  const renderContent = () => {
    if (activeTab === 'Men') {
      return <MenScreen />;
    } else {
      return <WomenScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Heading */}
      <View style={{ alignItems: 'flex-start', marginTop: 35, paddingLeft: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#47154B' }}>
          Categories
        </Text>
      </View>
      
      {/* Custom Tab Navigation */}
      <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 30,gap:25, }}>
        <TouchableOpacity
          onPress={() => setActiveTab('Men')}
          style={{ 
            paddingVertical: 15,
            marginRight: 30,
            borderBottomWidth: activeTab === 'Men' ? 2 : 0,
            borderBottomColor: 'purple'
          }}
        >
          <Text style={{ 
            fontSize: 16, 
            fontWeight: 'bold',
            color: activeTab === 'Men' ? 'purple' : 'gray'
          }}>
            Men
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setActiveTab('Women')}
          style={{ 
            paddingVertical: 15,
            borderBottomWidth: activeTab === 'Women' ? 2 : 0,
            borderBottomColor: 'purple'
          }}
        >
          <Text style={{ 
            fontSize: 16, 
            fontWeight: 'bold',
            color: activeTab === 'Women' ? 'purple' : 'gray'
          }}>
            Women
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Content */}
      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>
      
      <BottomNavBar />
    </View>
  );
};

export default Categories;



