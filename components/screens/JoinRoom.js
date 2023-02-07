import { View, Text } from 'react-native'
import React from 'react'
import Buttons from '../material/Buttons'

export default function JoinRoom({setScreen,key}) {
  return (
    <View>
      <Buttons
        title="Go Back"
        onPress={() => setScreen(2)}
        />
      <Text>JoinRoom</Text>
    </View>
  )
}