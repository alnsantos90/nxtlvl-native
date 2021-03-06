import * as React from 'react';
import { AppLoading } from 'expo'
import { StatusBar } from 'react-native';

import { 
  Poppins_900Black_Italic, 
  Poppins_800ExtraBold_Italic, 
  Poppins_200ExtraLight_Italic,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_800ExtraBold,
  Poppins_700Bold,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_900Black,
  useFonts } from '@expo-google-fonts/poppins'

import Routes from './src/routes'


export default function App() {

  const [fonstLoaded] = useFonts({
    Poppins_900Black_Italic,
    Poppins_800ExtraBold_Italic,
    Poppins_200ExtraLight_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_900Black
  })

  if(!fonstLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar bbarStyle='light-content' backgroundColor='transparent' translucent/>
      <Routes />
    </>
  );
}

