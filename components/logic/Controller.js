import { View } from 'react-native'
import Header from '../material/Header'
import Login from '../screens/Login'
import styles from './styles/controller'

export default function Controller() {

  return(
    <View style={styles.container}>

      <Header/>

      <View style={styles.loginContainer}>
        <Login/>
      </View>  

    </View>  
  );
}
