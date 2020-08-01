import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App () {
  console.log('App executed')
  return (
    <View style={styles.container}>
      <Text>Welcome to my app</Text>
      <Button title='button' onPress={() => alert('button has been pressed')} />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
