import React, {Component} from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import inputBox from './LoginStyles';
import {auth} from '@react-native-firebase/auth';

export default function LoginScreen() {
  return (
    // og styles: {flex: 1, alignItems: "center", justifyContent: "center"}
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput placeholder="Email" />
      <View style={inputBox}>
        <TextInput secureTextEntry={true} placeholder="Password" />
      </View>
    </View>
  );
}
