import React, { PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const Todo = ({ onPress, completed, text }) => (
  <Text
    style={{
        textDecorationLine: completed ? 'line-through' : 'none'
    }}
    onPress={onPress}
  >
    {text}
  </Text>
)

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
