import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LandingPage } from '../screens'

type Props = {}

const AuthStack = (props: Props) => {
    const stack= createNativeStackNavigator()
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='landingPage' component={LandingPage}/>
    </stack.Navigator>
  )
}

export default AuthStack