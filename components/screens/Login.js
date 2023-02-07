import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Inputs from '../material/Inputs'
import Buttons from '../material/Buttons'
import Alerts from '../material/Alerts'
import Lobby from './Lobby'
import styles from './styles/login'


export default function Login({setScreen, getName}) {
  const [username, setUsername] = useState()
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = () => {
    if (!username){
      setShowAlert(true)  
    } else {
      setScreen(2)
      getName(username)
    }
  }


  return (
    <View>
    { showAlert && (
      <Alerts
        title="Whoops!"
        message="Please enter a username"
        onConfirm={() => setShowAlert(false)}
      />
    )}

    <Text style = {styles.subTitle}>Enter your username</Text>

      <Inputs
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="GAMER123"
        secureTextEntry={false}
      />

      <Buttons
        title="LOGIN"
        onPress={() => handleSubmit(true)}
      />
      
  </View>
)
}
