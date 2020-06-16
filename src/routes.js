import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Signup from './pages/Signup'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: '#e7e7e7'
          }
        }}
        >
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Signup' component={Signup} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes