import React from 'react';
import {
  StyleSheet, ImageBackground, Dimensions, Text, View, Platform, TextInput, TouchableOpacity, Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  
  const widthCemm = Dimensions.get('screen').width;

  const navigation = useNavigation()

  function handleNavigationToSignup() {
    navigation.navigate('Signup')
  }

  function handleNavigationToLogin() {
    navigation.navigate('Login')
  }

  return (

    <View style={styles.container}>
      <ImageBackground
        style={{}}
        source={require('../../temp/splash.png')}
        imageStyle={{
          width: widthCemm,
          height: (Platform.OS === "ios") ? 850 : 790
        }}
      >


        <View style={styles.top}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>NXT</Text>
            <Text style={styles.titleDois}>LVL</Text>
          </View>
        </View>

        <View style={styles.signupBox}>
          <TouchableOpacity activeOpacity={.7} onPress={handleNavigationToSignup}>
            <View style={{flexDirection: 'row',}}>
              <Text style={styles.tattoo}>Tattoo</Text>
              <Text style={styles.studio}>Studio</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.7} onPress={handleNavigationToLogin}>
            <Image 
              source={require('../../temp/goButton.png')}
              style={{ height: 120, width: 100, }} 
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  top: {
    height: (Platform.OS === "ios") ? 500 : 420
  },

  bottom: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },

  titleBox: {
    marginTop: (Platform.OS === 'ios') ? 100 : 70,
    marginLeft: 240,
  },

  title: {
    fontFamily: 'Poppins_900Black_Italic',
    color: '#FFF',
    fontSize: 55,
  },

  titleDois: {
    marginTop: (Platform.OS === 'ios') ? -45 : -60,
    marginLeft: 35,
    fontFamily: 'Poppins_900Black_Italic',
    color: '#FFF',
    fontSize: 55,
  },

  tattooBox: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: -10,
  },

  tattoo: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Poppins_800ExtraBold_Italic',
    lineHeight: 27,
  },

  studio: {
    marginLeft: 5,
    fontSize: 22,
    color: '#000',
    fontFamily: 'Poppins_200ExtraLight_Italic',
    lineHeight: 27,
  },

  signupBox: {
    width: '100%',
    height: 80,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    position: 'relative',
    top: (Platform.OS === 'ios') ? 250 : 260,
    zIndex: 99
  },


  linearGradient: {
    height: 40,
    width: 70,
    borderStyle: 'dotted',
    borderWidth: 1
  },

})

export default Login