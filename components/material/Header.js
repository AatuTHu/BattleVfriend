import { View, Text } from 'react-native'
import styles from '../styles/header'
import React from 'react'

export default function Header() {
  return (
    <View style = {styles.titleBlock}>
      <Text style = {styles.text}>Battle</Text>
    </View>
  )
}