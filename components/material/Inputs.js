import { View, TextInput, Text } from 'react-native'
import style from '../styles/inputs'
import React from 'react'

export default function Inputs() {
  return (
      <View style = { style.center}>
        <View style = {style.subTitleContainer}>
          <Text style = {style.subTitle}>Username</Text></View>
        <TextInput style = { style.text } backgroundColor={'#323232'}></TextInput>

      <View style = {style.subTitleContainer}>
        <Text style = {style.subTitle}>Password</Text></View>
        <TextInput style = { style.text } backgroundColor={'#323232'}></TextInput>
      </View>
  )
}