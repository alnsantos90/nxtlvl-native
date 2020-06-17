import React from 'react'
import { Dimensions, StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const FotoTattoo = () => {
  const navigation = useNavigation()
  const widthCem = Dimensions.get('screen').width


  const images = [
    'https://miro.medium.com/max/7776/0*xLXjzoXoUnZpRF1N',
    'https://i.pinimg.com/originals/ac/0a/58/ac0a582edccf401cd84262634ad30451.jpg',
    'https://demo.phlox.pro/tattoo/wp-content/uploads/sites/92/2019/02/steven-erixon-715059-unsplash.jpg',
    'https://images.squarespace-cdn.com/content/v1/53eadbbae4b0ba68f27e6191/1561764489544-QA96OLPYBJGVI0Y0QQ44/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/samuel-foster-trS4ergP-KM-unsplash.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4WK_0nMvSCisYDE2dYgiWR89mYHBF7v6OjLyleBnP6NwvD1ha&usqp=CAU',
    'https://mccrindle.com.au/wp-content/uploads/images/mohammad-faruque-197300-unsplash-1-2.jpg',
    'https://pbs.twimg.com/media/EBZOT2OX4AIIftS.jpg',
    'https://i2.wp.com/multisport.ph/wp-content/uploads/2017/08/jake-davies-170903-unsplash.jpg?resize=570%2C370&ssl=1',
    'https://www.inkme.tattoo/wp-content/uploads/2016/05/lion-tattoo-designs-for-boys-and-girls21.jpg',
    'https://images.unsplash.com/photo-1522687533888-1078974f88ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  ]

  function handleNavigationBack() {
    navigation.goBack()
  }
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
          <TouchableOpacity
            style={styles.backIconBox}
            activeOpacity={0.7}
          >
            <Image source={require('../../temp/backIcon.png')}
              style={{ width: 19, height: 21 }} />
            <Text style={styles.menu}>MENU</Text>
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


      <View style={styles.fotoBox}>
        <Text style={styles.fotoText}>foto</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.numberBox}>
          <Text style={styles.number}>{images.length}</Text>
          <Text style={styles.fotoDescription}>PHOTOS</Text>
        </View>

        <View style={styles.carousel}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              paddingHorizontal: 40,
              marginTop: 10,
            }}
          >
            {
              images.map((image, index) => (
                <Image 
                  key={index}
                  source={{uri: image}}
                  style={{width: 80, height: 120, resizeMode: 'cover', marginRight: 10, borderRadius: 6,}}
                />
              ))
            }


          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.viewBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.viewText}>VIEW ALL</Text>
        </TouchableOpacity>

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

  goBackBox: {
    marginTop: 30,
    marginLeft: -20
  },

  goBackBtn: {
    height: 120,
    width: 100,
    transform: [{ rotate: '180deg' }],
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
    marginTop: (Platform.OS === 'ios') ? -60 : -20,
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
    // marginLeft: 65,
    marginTop: (Platform.OS === 'ios') ? 0 : -30,
    paddingLeft: (Platform.OS === 'ios') ? 5 : 17
  },

  viewBtn: {
    alignSelf: 'center',
    marginTop: (Platform.OS === 'ios') ? 30 : 20,
    width: 120,
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },

  viewText: {
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4a4a4a',
  },

})

export default FotoTattoo