import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LandingPage, SearchResult } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomBottomTab from '../components/CustomBottomTab'
import { NavigationContainer } from '@react-navigation/native'
import TodaysActivity from '../screens/TodaysActivity'
import ActivityClasses from '../screens/ActivityClasses'
import { colors } from '../constants/colors'
import ClubDetails from '../screens/ClubDetails'

type Props = {}
const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const BottomTabs = (props: Props) => {
  return (
    <Tab.Navigator tabBar={(props) => (<CustomBottomTab {...props} />)} screenOptions={{ headerShown: false }}>
      <Tab.Screen name='LandingPage' component={LandingPage} />
    </Tab.Navigator>
  )
}
const AuthStack = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false,animation:'fade' }}>
      <Stack.Screen name='Home' component={BottomTabs} />
      <Stack.Screen name='SearchResults' component={SearchResult} />
      <Stack.Screen name='TodaysActivities' component={TodaysActivity} />
      <Stack.Screen name='ActivityClasses' component={ActivityClasses} />
      <Stack.Screen name='ClubDetails' component={ClubDetails} />




    </Stack.Navigator>
  )
}


const Routes = (props: Props) => {
  return (
    <>
<StatusBar backgroundColor={colors.Surface_light} barStyle={'dark-content'}/>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    </>



  )
}


export default Routes