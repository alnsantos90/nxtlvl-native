import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  nativeEvent
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Detail = ({ route }) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const { width, height } = Dimensions.get('window')

  const { id } = route.params
  const { categoria } = route.params
  const { ArrayImages } = route.params

  const filteredImages = ArrayImages.filter(images => images.categoria === categoria)


  const navigation = useNavigation()

  function handleNavigationBack() {
    navigation.goBack()
  }

  function handleClose() {
    navigation.goBack()
  }

  function setCurrent(event) {
    const viewSize = event.nativeEvent.layoutMeasurement.width
    const contentOffset = event.nativeEvent.contentOffset.x

    const currentIndex = Math.floor(contentOffset / viewSize)
    setCurrentIndex(currentIndex)
    console.log(viewSize);
  }



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../temp/cover-gallery.png')}
        style={{}}
        imageStyle={{
          width: '100%',
          height: 330,
        }}
      />


      <View style={styles.top}>
        <View style={styles.topBox}>
          <TouchableOpacity
            style={styles.backIconBox}
            activeOpacity={0.7}
            onPress={handleNavigationBack}
          >
            <Image source={require('../../temp/backIcon.png')}
              style={{ width: 19, height: 21 }} />
            <Text style={styles.menu}>BACK</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.title}>NXT</Text>
            <Text style={styles.titleDois}>LVL</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 0 }}>
          <Text style={styles.titleGallery}>
            FULL BODY
          </Text>
          <Text style={styles.totalFoto}>
            01 of {filteredImages.length}
          </Text>
        </View>
      </View>

      <ScrollView
        horizontal
        onMomentumScrollEnd={setCurrent}
        showsHorizontalScrollIndicator={false}
        snapToInterval={430}
        decelerationRate={'fast'}
        contentContainerStyle={{
          paddingHorizontal: 30,
          position: 'relative',
          top: 20,
        }}
      >
        {filteredImages.map(teste => (
          <View
            style={{ width: (Platform.OS === 'ios') ? 350 : 330, marginRight: (Platform.OS === 'ios') ? 80 : 100,}}
            key={teste.id}
          >
            <Image
              source={{ uri: teste.image }}
              style={{ width: '100%', height: (Platform.OS === 'ios') ? 670 : '100%', resizeMode: 'cover', borderRadius: (Platform.OS === 'ios') ? 10 : 0, }}
            />
          </View>
        ))}
      </ScrollView>

      <View style={{ position: 'absolute', top: 200, left: (Platform.OS === 'ios') ? 45 : 36, flexDirection: 'row' }}>
        {filteredImages.map((images, index) => (
          <View
            key={index}
            style={[styles.widthSlide, { opacity: index === currentIndex ? 1 : 0.5 }]}
          />
        ))}
      </View>

      <View style={{}}>
        <TouchableOpacity
          style={styles.viewBtn}
          activeOpacity={0.7}
          onPress={handleClose}
        >
          <Text style={styles.viewText}>CLOSE</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },


  bottom: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 10 : 20,
    paddingHorizontal: 30
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

  titleGallery: {
    color: '#fff',
    fontFamily: 'Poppins_900Black',
    fontSize: 14,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
  },

  totalFoto: {
    color: '#9b9b9b',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },

  viewBtn: {
    alignSelf: 'center',
    width: 100,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    position: 'relative',
    bottom: 70,
  },

  viewText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
  },

  widthSlide: {
    width: 40,
    height: 5,
    backgroundColor: '#fff',
    marginRight: 6
  },

  widthSlideWhite: {
    width: 40,
    height: 5,
    backgroundColor: '#fff',
    marginRight: 6
  },

})

export default Detail