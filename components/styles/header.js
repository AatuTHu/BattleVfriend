import { StyleSheet } from "react-native";
import  Constants  from 'expo-constants';

export default StyleSheet.create({
    titleBlock: {
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'black',
      marginTop: Constants.statusBarHeight,
      borderBottomWidth: 3,
    },
    text: {
      color: 'white',
      padding: 15,
      fontSize: 40,
    }
  });
  