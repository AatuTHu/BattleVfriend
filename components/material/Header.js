import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/header'

export default function Header()  {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>BATTLE</Text>
    </View>
  );
};

