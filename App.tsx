import React from 'react'
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { App_logo } from './src/assets/images'
import AuthStack from './src/routes/AuthStack'
import { NavigationContainer } from '@react-navigation/native'

type Props = {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
  <AuthStack/>
  </NavigationContainer>
  )
}

export default App