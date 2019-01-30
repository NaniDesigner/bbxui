/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, DrawerNavigator } from 'react-navigation'

import ManiScreen from './Components/ManiScreen'
import HomeTab from './Components/AppTabNavigator/HomeTab'
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const myApp = DrawerNavigator ({
  
    HomeTab:{
        screen: HomeTab
    },
    // SearchTab:{
    //     screen: SearchTab
    // },
    // AddMediaTab:{
    //     screen: AddMediaTab
    // },
    // LikesTab:{
    //     screen:LikesTab
    // },
    // ProfileTab:{
    //     screen: ProfileTab
    // },
})

const  AppStackNavigator = createStackNavigator ({
  Mani: {
    screen: ManiScreen
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
