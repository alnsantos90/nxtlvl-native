import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Feather as Icon, FontAwesome as Font } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()

  const widthCemm = Dimensions.get('window').width;

  function handleNavigateToBack() {
    navigation.goBack()
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../temp/cover-signup.png')}
      imageStyle={{
        width: widthCemm,
        height: (Platform.OS === "ios") ? 460 : 432,
        paddingTop: 100
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
        <Icon onPress={handleNavigateToBack} style={styles.goBack} name='arrow-left' size={34} color='#ED3978' />
        <Text style={styles.loginTitle}>SIGNUP</Text>
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.fullName}
          placeholder='Full Name'
          placeholderTextColor={'#989898'}
        />

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
        <View >
          <Text style={styles.signup}>Signup using</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Font style={{ marginRight: 20, marginTop: 10 }} name="facebook-square" size={40} color='#43609c' />
            <Font style={{ marginTop: 10 }} name="google-plus" size={40} color='#cf473b' />
          </View>
        </View>

        <TouchableOpacity activeOpacity={.7}>
          <Image source={require('../../temp/goButton.png')}
            style={{ height: 120, width: 100, }} />
        </TouchableOpacity>
      </View>


    </ImageBackground>
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
    backgroundColor: '#e7e7e7'
  },

  top: {
    height: (Platform.OS === "ios") ? 360 : 320
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 36,
  },

  goBack: {
    marginLeft: 40,
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

  fullName: {
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
    marginBottom: 12,
    marginTop: 20,
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
    marginTop: (Platform.OS === 'ios') ? 80 : 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
  },

  signup: {
    fontFamily: 'Poppins_500Medium',
    color: '#989898',
    fontSize: 14
  },

  linearGradient: {
    height: 40,
    width: 70,
    borderStyle: 'dotted',
    borderWidth: 1
  },

})

export default Home