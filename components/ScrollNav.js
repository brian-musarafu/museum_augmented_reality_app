import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ScrollNav = ({title}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ScrollNav;

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight: 20,
  },
  titleStyle: {
    fontFamily: 'SemiBold',
    fontSize: 16,
    color: 'grey',
  },
});
