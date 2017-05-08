import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Add from '../components/Add'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitEditing: (value) => {
      console.log(value);
      dispatch(addTodo(value))
    }
  }
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(Add)

export default AddTodo
