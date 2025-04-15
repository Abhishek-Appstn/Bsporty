import React from 'react'
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { App_logo } from './src/assets/images'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes'

type Props = {}

const App = (props: Props) => {
  return (
    <Routes />
  )
}

export default App