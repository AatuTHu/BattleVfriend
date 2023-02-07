import { View } from 'react-native'
import { useState } from 'react'
import Header from '../material/Header'
import Login from '../screens/Login'
import Lobby from '../screens/Lobby'
import Room from '../screens/Room'
import styles from './styles/controller'
import JoinRoom from '../screens/JoinRoom'

export default function Controller() {

  const [screen, setScreen] = useState(1)
  const [username, setUsername] = useState("")

  const createKey = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
      while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
    return result;
  }

  const handleScreenChange = () => {
    if(screen === 1) {
      return (<Login setScreen = {setScreen} getName={setUsername}/>)
    } else if(screen === 2) {
      return (<Lobby setScreen = {setScreen} username={username}/>)
    } else if(screen === 3) {
      return (<Room setScreen = {setScreen} username={username}/>)
    } else if(screen === 4) {
      return (<JoinRoom setScreen={setScreen}/>)
    }
  }

  return(
    <View style={styles.container}>

      <Header/>

      <View style={styles.loginContainer}>
        {handleScreenChange()}
      </View>  

    </View>  
  );
}
