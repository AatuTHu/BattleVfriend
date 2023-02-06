import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>BATTLE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
