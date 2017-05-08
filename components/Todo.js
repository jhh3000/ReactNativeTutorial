import React, { PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const Todo = ({ onClick, completed, text }) => (
  <Text
    onPress={onClick}
    style={{
        textDecorationLine: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </Text>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
