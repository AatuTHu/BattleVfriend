import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Inputs from '../material/Inputs'
import Buttons from '../material/Buttons'

export default function Login() {
  const [username, setUsername] = useState()
  return (
    <View>

      <Text style = {styles.subTitle}>Enter your username</Text>

        <Inputs
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder="GAMER123"
          secureTextEntry={false}
        />

        <Buttons
          title="LOGIN"
          onPress={() => console.log('button pressed')}
        />
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