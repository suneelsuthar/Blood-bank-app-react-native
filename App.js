/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import {Login,Signup} from './src/Screen'

import {
  
  AppRegistry
} from 'react-native';
import SatckNavigation from './src/Config/Navigation/StackNavigation'
import {Provider} from 'react-redux'
import store from './src/Store'


  class App extends React.Component{
    render(){
  return (
    <Provider store={store}>
   <SatckNavigation />
   </Provider>
  );
}};



AppRegistry.registerComponent('Point', () => Point)
export default App;

