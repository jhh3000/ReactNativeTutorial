/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

export default class ReactNativeTutorial extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTutorial', () => ReactNativeTutorial);
