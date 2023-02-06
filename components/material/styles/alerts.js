import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      alertContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
      },
      message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
      },
      button: {
        backgroundColor: '#7da453',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        borderWidth: 2,
      },
      buttonText: {
        fontSize: 16,
        color: 'white'
      }
})