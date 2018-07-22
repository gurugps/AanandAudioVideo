/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import { StackNavigator } from 'react-navigation';
 // import Store from '../Store/Store'
 import { Provider } from 'react-redux'
 import {persistStore} from 'redux-persist'

 import store from './core/Store/store'
 import ListScene from './core/Component/ListScene'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

           <ListScene />

     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
