import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    borderColor: '#7da453',
    borderWidth: 3,
    margin: 15,
    marginLeft: 35,
    width: 160,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#e1ffb1',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:17,
  },
});

export default Button;
