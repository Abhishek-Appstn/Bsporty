import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LandingPage } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomBottomTab from '../components/CustomBottomTab'
import { NavigationContainer } from '@react-navigation/native'

type Props = {}
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = (props: Props) => {
  return (
    <Tab.Navigator tabBar={(props) => (<CustomBottomTab {...props} />)} screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={LandingPage} />
    </Tab.Navigator>
  )
}
const AuthStack = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BottomTabs' component={BottomTabs} />
    </Stack.Navigator>
  )
}

const Routes = (props: Props) => {
  return (
    <NavigationContainer>

      <AuthStack />
    </NavigationContainer>


  )
}


export default Routes