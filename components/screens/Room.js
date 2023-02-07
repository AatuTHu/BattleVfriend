import { View, Text } from 'react-native'
import Buttons from '../material/Buttons'
import { useState} from 'react'
import React from 'react'
import styles from './styles/room'

export default function Room({setScreen, username, key}) {


  

  return (
    <View>
      <Text>Your room key: {key}</Text>
        <Text>{username} is making a room</Text>{/** just something for now. Not hittet to the stone as they say in somewhere */}
      <Buttons
        title="GO BACK"
        onPress={() => setScreen(2)}
        />
    </View>
  )
}