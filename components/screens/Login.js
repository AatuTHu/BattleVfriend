import { View, Text, StyleSheet } from 'react-native'
import Inputs from '../material/Inputs'
import Buttons from '../material/Buttons'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Text style = {styles.subTitle}>Login</Text>
        <Inputs/>
      <Buttons/>
    </View>
  )
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
})