/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import SplashScreen from '../screens/Splash';
import doctorsData from '../../assets/data/doctorsData';
import DoctorComponent from '../components/Doctor';
import { View } from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name={'Splash'}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
       />

        <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{
              headerLeft: ()=> null,
              headerTitle: () => <HomeScreenHeader /> 
            }}
        />
        
        {/* <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{ 
              headerLeft: ()=> null,
              //headerTitle: () => <HomeScreenHeader /> 
              // headerTitle: () => <DoctorComponent data={doctorsData[0]} /> 
            // options={{
            // headerShown: false,
            // title: 'Search your destination',
            }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
