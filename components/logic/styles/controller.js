import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
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