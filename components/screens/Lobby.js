import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Buttons from '../material/Buttons'
import Login from './Login'
import styles from './styles/lobby'

export default function Lobby({username}) {
    const [showLogin, setShowLogin] = useState(false)

    if(showLogin) {
        return <Login/>
    }

  return (
    <View>
      <Text>Lobby</Text>
      <Text>WELCOME {username}</Text>

      <Buttons
        title="GO BACK"
        onPress={() => setShowLogin(true)}
        />
    </View>
  )
}