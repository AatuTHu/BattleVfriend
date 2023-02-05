import { View, StyleSheet,SafeAreaView } from 'react-native'
import Header from '../material/Header'
import Register from '../screens/Register'
import Login from '../screens/Login'

export default function Controller() {

  return(
    <SafeAreaView>
      <Header/>
        <View style = { styles.container}> 
        <Register/>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#232323',
    alignItems: 'center',
  }
})