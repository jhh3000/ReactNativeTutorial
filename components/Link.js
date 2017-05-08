import React, { PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Text>{children}</Text>
  }

  return (
    <Text onPress={onClick} style={styles.highlight}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  highlight: {
    textAlign: 'center',
    color: '#065b98',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
