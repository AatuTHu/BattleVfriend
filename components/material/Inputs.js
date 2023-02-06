import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize="characters"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    width:200,
  },
  input: {
    height: 60,
    padding: 10,
    fontSize: 25,
  },
});

export default Input;
