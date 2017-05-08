import React, { PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <View>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onPress={() => onTodoClick(todo.id)}
      />
    )}
  </View>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
