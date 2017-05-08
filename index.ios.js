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
import todoApp from './reducers'

let store = createStore(todoApp)

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addTodo('Learn more about Redux'))
store.dispatch(addTodo('Learn more about React'))
store.dispatch(addTodo('Learn more about stores'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe();

export default class ReactNativeTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

AppRegistry.registerComponent('ReactNativeTutorial', () => ReactNativeTutorial);
