import { View, StyleSheet, Dimensions } from 'react-native'
import Header from '../material/Header'
import Login from '../screens/Login'

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

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#aed581'
  },
  loginContainer:{
    marginTop: Dimensions.get('window').height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  }
})