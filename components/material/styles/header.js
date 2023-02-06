import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    headerContainer: {
        backgroundColor: '#000000',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
      },
      headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      },
})