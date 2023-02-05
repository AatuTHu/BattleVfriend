import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/buttons'
import React from 'react'

export default function Buttons() {
  return (
    <View style = {styles.buttonContainer}>
      <TouchableOpacity style = {styles.button}><Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.button}><Text style = {styles.buttonText}>Register</Text></TouchableOpacity>
    </View>
  )
}