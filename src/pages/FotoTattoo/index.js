import React from 'react'
import { Dimensions, StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Platform, ScrollView } from 'react-native'


const FotoTattoo = () => {
  const widthCem = Dimensions.get('screen').width

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../temp/cover-foto-tattoo.png')}
        style={{}}
        imageStyle={{
          width: widthCem,
          height: 667,
        }}
      />

      <View style={styles.top}>
        <View style={styles.topBox}>
          <TouchableOpacity style={styles.backIconBox} activeOpacity={0.7}>
            <Image source={require('../../temp/backIcon.png')}
              style={{ width: 19, height: 21 }} />
            <Text style={styles.menu}>MENU</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.title}>NXT</Text>
            <Text style={styles.titleDois}>LVL</Text>
          </View>
        </View>
      </View>


      <View style={styles.fotoBox}>
        <Text style={styles.fotoText}>foto</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.numberBox}>
          <Text style={styles.number}>20</Text>
          <Text style={styles.fotoDescription}>PHOTOS</Text>
        </View>

        <View style={styles.carousel}>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          >
            <Image source={require('../../temp/pictures/1.png')} style={{marginHorizontal: 5}} />

            <Image source={require('../../temp/pictures/2.png')} style={{marginHorizontal: 5}} />

            <Image source={require('../../temp/pictures/3.png')} style={{marginHorizontal: 5}} />

            <Image source={require('../../temp/pictures/4.png')} style={{marginHorizontal: 5}} />

          </ScrollView>
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

  fotoBox: {
    alignItems: 'flex-end',
    marginBottom: (Platform.OS === 'ios') ? 50 : -50,
    marginRight: (Platform.OS === 'ios') ? 3 : 7,
  },

  fotoText: {
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
    width: 45,
    fontFamily: 'Poppins_800ExtraBold',
    fontSize: 12,
    letterSpacing: 1.4,
    marginTop: 10,
    paddingTop: 28,
    transform: [{ rotate: '90deg' }],
    color: '#FFF',
    opacity: 0.3,
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
    bottom: 20,
    left: 20,
  },

  numberBox: {
    alignItems: 'flex-end',
    paddingRight: 40,
    marginTop: (Platform.OS === 'ios') ? -30 : 30,
  },

  number: {
    fontFamily: 'Poppins_800ExtraBold_Italic',
    fontSize: 48,
    color: '#494949',
    letterSpacing: -1.8,
  },

  fotoDescription: {
    position: 'relative',
    bottom: (Platform.OS === 'ios') ? 15 : 30,
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    letterSpacing: 2.3,
    color: '#555',
    opacity: 0.4,
  },

  carousel: {
    justifyContent: 'center',
    marginLeft: 65,
  },

})

export default FotoTattoo