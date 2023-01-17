/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import SignUpScreen from './src/components/SignUpScreen';
import LoginScreen from './src/components/LoginScreen/LogInScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sign Up" component={SignUpScreen} />
        <Tab.Screen name="Log In" component = {LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
