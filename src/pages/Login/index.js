import React from 'react';
import {
  StyleSheet, ImageBackground, Dimensions, Text, View, Platform, TextInput, TouchableOpacity, Image
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const widthCemm = Dimensions.get('screen').width;

  const navigation = useNavigation()

  function handleNavigationToSignup() {
    navigation.navigate('Signup')
  }

  function handleNavigationToBio() {
    navigation.navigate('Bio')
  }

  return (

    <View style={styles.container}>
      <ImageBackground
        style={{}}
        source={require('../../temp/cover-bg.png')}
        imageStyle={{
          width: widthCemm,
          height: (Platform.OS === "ios") ? 650 : 550
        }}
      >


        <View style={styles.top}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>NXT</Text>
            <Text style={styles.titleDois}>LVL</Text>
          </View>
          <View style={styles.tattooBox}>
            <Text style={styles.tattoo}>Tattoo</Text>
            <Text style={styles.studio}>Studio</Text>
          </View>
        </View>


        <View style={styles.login}>
          <Text style={styles.loginTitle}>LOGIN</Text>
        </View>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputs}
            placeholder='Username'
            placeholderTextColor={'#989898'}
          />
          <Icon style={styles.iconUser} name='user' size={24} color='#989898' />

          <TextInput
            style={styles.inputs}
            placeholder='Password'
            secureTextEntry
            placeholderTextColor={'#989898'}
          />
          <Icon style={styles.iconUser} name='lock' size={24} color='#989898' />
        </View>


        <View style={styles.signupBox}>
          <TouchableOpacity activeOpacity={.7} onPress={handleNavigationToSignup}>
            <Text style={styles.signup}>SIGNUP</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.7} onPress={handleNavigationToBio}>
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
    marginTop: (Platform.OS === 'ios') ? 60 : 30,
    marginLeft: 30,
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
    color: '#FFF',
    fontFamily: 'Poppins_800ExtraBold_Italic',
    lineHeight: 27,
  },

  studio: {
    marginLeft: 5,
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Poppins_200ExtraLight_Italic',
    lineHeight: 27,
  },

  login: {
    alignItems: 'flex-end',
    marginRight: 36,
  },

  loginTitle: {
    fontSize: 50,
    fontFamily: 'Poppins_900Black_Italic',
    opacity: 0.12,
    letterSpacing: -3
  },

  inputBox: {
    alignItems: 'center'
  },

  inputs: {
    width: 360,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    paddingLeft: 30,
    paddingRight: 50,
    paddingVertical: 15,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: -15,
  },

  iconUser: {
    position: "relative",
    bottom: 28,
    left: 145,
    opacity: 0.3
  },
  signupBox: {
    height: 80,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
  },

  signup: {
    fontFamily: 'Poppins_500Medium',
    color: '#989898',
    fontSize: 18
  },

  linearGradient: {
    height: 40,
    width: 70,
    borderStyle: 'dotted',
    borderWidth: 1
  },

})

export default Login