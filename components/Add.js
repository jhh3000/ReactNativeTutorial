import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
    this.onSubmitEditing = props.onSubmitEditing;
  }

  _onSubmitEditing = () => {
    const value = this.state.text;
    this.onSubmitEditing(value);
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        onSubmitEditing={this._onSubmitEditing}
      />
    )
  }
}

export default Add;
