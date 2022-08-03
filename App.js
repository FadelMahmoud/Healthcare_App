/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import HomeScreen from './src/screens/Home';
import BodyPart from './src/components/BodyPart';
import bodyPartsData from './assets/data/bodyPartsData';
import SplashScreen from './src/screens/Splash';
import Router from './src/navigation/Router';
import HomeScreenHeader from './src/components/HomeScreenHeader';
import HomeTabNavigator from './src/navigation/HomeTabNavigator';
import MakeAppointmentScreen from './src/screens/MakeAppointment';

const App: () => Node = () => {
  return (
    <>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <StatusBar barStyle="dark-content" /> */}

      {/* <MakeAppointmentScreen /> */}
      <Router />
      {/* <HomeScreen /> */}
      {/* <BodyPart /> */}
      {/* <DoctorComponent data={bodyPartsData[0]} /> */}
    </>
  );
};

export default App;
