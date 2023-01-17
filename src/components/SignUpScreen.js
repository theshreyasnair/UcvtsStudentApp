import React, {Component} from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {auth} from '@react-native-firebase/auth';

export default function SignUpScreen() {
  return (
    // og styles: {flex: 1, alignItems: "center", justifyContent: "center"}
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput placeholder = "Username" />
      <TextInput placeholder="Email" />
      <TextInput secureTextEntry={true} placeholder="Password" />
    </View>
  );
}
