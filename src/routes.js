import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Splash from './pages/Splash'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Bio from './pages/Bio'
import FotoTattoo from './pages/FotoTattoo'
import Gallery from './pages/Gallery'
import Details from './pages/Details'
import { Platform } from 'react-native';

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
        <AppStack.Screen name='Splash' component={Splash} />
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Signup' component={Signup} />
        <AppStack.Screen name='Bio' component={Bio} />
        <AppStack.Screen name='FotoTattoo' component={FotoTattoo} />
        <AppStack.Screen name='Gallery' component={Gallery} />
        <AppStack.Screen name='Details' component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes