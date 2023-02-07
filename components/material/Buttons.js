import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles/buttons'

export default function Buttons({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}


