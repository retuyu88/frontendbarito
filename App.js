/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import todo from './src/screens/todo'
//import { Provider } from 'react-redux'
//import { store ,persistor} from './src/_redux/store'
import { createAppContainer, createSwitchNavigator, NavigationActions } from 'react-navigation'

const switchContainer = createSwitchNavigator({
  todo: todo,
  initialRouteName: 'todo'})

const AppContainer = createAppContainer(switchContainer)

export default class App extends Component {
  render() {
    return (
      //<Provider store={store}>
        <AppContainer/>
      //</Provider>
    )
  }
};



