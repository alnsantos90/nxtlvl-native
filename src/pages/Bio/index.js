import React from 'react'
import { Dimensions, StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'


const Bio = () => {
  const navigation = useNavigation()
  const widthCem = Dimensions.get('screen').width

  function handleNavigationToFotoTattoo() {
    navigation.navigate('FotoTattoo')
  }

  function handleNavigationBack() {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../temp/cover-bio.png')}
        style={{}}
        imageStyle={{
          width: widthCem,
          height: 667,
        }}
      />

      <View style={styles.top}>
        <View style={styles.topBox}>
          <TouchableOpacity
            style={styles.backIconBox}
            activeOpacity={0.7}
            onPress={handleNavigationToFotoTattoo}
          >
            <Image source={require('../../temp/backIcon.png')}
              style={{ width: 19, height: 21 }} />
            <Text style={styles.menu}>FOTOS</Text>
          </TouchableOpacity>


          <View>
            <Text style={styles.title}>NXT</Text>
            <Text style={styles.titleDois}>LVL</Text>
          </View>
        </View>

        <View style={styles.goBackBox}>
          <TouchableOpacity
            activeOpacity={.7}
            onPress={handleNavigationBack}
          >
            <Image source={require('../../temp/goButton.png')}
              style={styles.goBackBtn} />
          </TouchableOpacity>
        </View>

      </View>




      <View style={styles.bioBox}>
        <Text style={styles.bioText}>bio</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.nameBox}>
          <Text style={styles.name}>Jake</Text>
          <Text style={styles.sobrenome}>DAVIES</Text>
        </View>

        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            I do art, I have constant contact with it. It’s not boring, and is something I really enjoy. I get to know a lot of people, different artists and very interesting customers and it pays well.
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 1,
  },

  bottom: {
    flex: 1,
  },

  bioBox: {
    alignItems: 'flex-end',
    marginBottom: (Platform.OS === 'ios') ? 50 : -50,
    marginRight: (Platform.OS === 'ios') ? 3 : 7,
  },

  bioText: {
    fontFamily: 'Poppins_900Black_Italic',
    fontSize: 150,
    color: '#e7e7e7',

  },

  topBox: {
    marginTop: 50,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  backIconBox: {
    flexDirection: 'column'
  },

  menu: {
    width: 50,
    fontFamily: 'Poppins_800ExtraBold',
    fontSize: 12,
    letterSpacing: 1.4,
    marginTop: 10,
    paddingTop: 34,
    transform: [{ rotate: '90deg' }],
    color: '#FFF',
    opacity: 0.3,
  },

  goBackBox: {
    marginTop: 30,
    marginLeft: -20
  },

  goBackBtn: {
    height: 120,
    width: 100,
    transform: [{ rotate: '180deg' }],
  },

  title: {
    fontFamily: 'Poppins_900Black_Italic',
    fontSize: 26,
    color: '#FFF',
  },

  titleDois: {
    fontFamily: 'Poppins_900Black_Italic',
    fontSize: 26,
    color: '#FFF',
    position: 'relative',
    bottom: (Platform.OS === 'ios') ? 20 : 28,
    left: 20,
  },

  nameBox: {
    alignItems: 'flex-end',
    paddingRight: 40,
    marginTop: (Platform.OS === 'ios') ? -30 : 30,
  },

  name: {
    fontFamily: 'Poppins_800ExtraBold_Italic',
    fontSize: 48,
    color: '#494949',
    letterSpacing: -1.8,
  },

  sobrenome: {
    position: 'relative',
    bottom: (Platform.OS === 'ios') ? 15 : 30,
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    letterSpacing: 2.3,
    color: '#555',
    opacity: 0.4,
  },

  descriptionBox: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: (Platform.OS === 'ios') ? 35 : 10
  },

  description: {
    textAlign: 'justify',
    lineHeight: 21,
    color: '#3F3F3F',
    fontSize: 14,
    fontFamily: 'Poppins_300Light',
  },
})

export default Bio