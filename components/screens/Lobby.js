import { View, Text } from 'react-native'
import Buttons from '../material/Buttons'
import styles from './styles/lobby'

export default function Lobby({username, setScreen}) {
  return (
    <View>
      <Text>Lobby</Text>
      <Text>WELCOME {username}</Text>

      <Buttons
        title="Join A ROOM!"
        onPress={() => setScreen(4)}
        />

      <Buttons
        title="Make A ROOM"
        onPress={() => setScreen(3)}
        />

      <Buttons
        title="GO BACK"
        onPress={() => setScreen(1)}
        />
    </View>
  )
}