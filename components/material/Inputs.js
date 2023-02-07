import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles/inputs'

export default function Input({ value, onChangeText, placeholder, secureTextEntry }) {
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


