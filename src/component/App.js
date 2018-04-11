/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Movies from './Movies'
import Confirmation from './Confirmation';


const RootStack = StackNavigator({
  movies: {
    screen: Movies,
  },
  confirmation: {
    screen : Confirmation
  }
  },
  {
    initialRouteName: 'movies',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,

    }
  }
);


export default class App extends Component {
  render() {
    return (
       <RootStack />
    );
  }
} 

