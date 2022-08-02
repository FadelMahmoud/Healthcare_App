/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import SplashScreen from '../screens/Splash';
import HomeScreenHeader from '../components/HomeScreenHeader';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <FontAwesome5 name={iconName} size={28} color={color} />
          } else if (route.name === 'Schedule') {
            iconName = 'calendar-clock';
            return <MaterialCommunityIcons name={iconName} size={29} color={color} />
          } else if (route.name === 'Messages') {
            iconName = 'message';
            return <MaterialIcons name={iconName} size={29} color={color} />
          } else if (route.name === 'Menu') {
            iconName = 'bars';
            return <FontAwesome name={iconName} size={29} color={color} />
          }

        },
        tabBarActiveTintColor: '#37D6CA',
        tabBarShowLabel: false,
      })}
    >

        <Tab.Screen
            name={'Home'}
            component={HomeScreen}
            options={{
                headerLeft: ()=> null,
                headerTitle: () => <HomeScreenHeader /> 
              }}
        />

        <Tab.Screen
            name={'Schedule'}
            component={SplashScreen}
        />

        <Tab.Screen
            name={'Messages'}
            component={HomeScreen}
        />

        <Tab.Screen
            name={'Menu'}
            component={SplashScreen}
        />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
