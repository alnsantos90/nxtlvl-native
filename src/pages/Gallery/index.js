import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Gallery = () => {

  const galleryImage = [
    {
      id: 1,
      image: 'https://miro.medium.com/max/7776/0*xLXjzoXoUnZpRF1N',
      categoria: 'body'
    },
    {
      id: 2,
      image: 'https://demo.phlox.pro/tattoo/wp-content/uploads/sites/92/2019/02/steven-erixon-715059-unsplash.jpg',
      categoria: 'body'
    },
    {
      id: 3,
      image: 'https://images.squarespace-cdn.com/content/v1/53eadbbae4b0ba68f27e6191/1561764489544-QA96OLPYBJGVI0Y0QQ44/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/samuel-foster-trS4ergP-KM-unsplash.jpg',
      categoria: 'body'
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4WK_0nMvSCisYDE2dYgiWR89mYHBF7v6OjLyleBnP6NwvD1ha&usqp=CAU',
      categoria: 'body'
    },
    {
      id: 5,
      image: 'https://mccrindle.com.au/wp-content/uploads/images/mohammad-faruque-197300-unsplash-1-2.jpg',
      categoria: 'body'
    },
    {
      id: 6,
      image: 'https://pbs.twimg.com/media/EBZOT2OX4AIIftS.jpg',
      categoria: 'body'
    },
    {
      id: 7,
      image: 'https://i2.wp.com/multisport.ph/wp-content/uploads/2017/08/jake-davies-170903-unsplash.jpg?resize=570%2C370&ssl=1',
      categoria: 'body'
    },
    {
      id: 10,
      image: 'https://rattatattoo.com/wp-content/uploads/2013/01/Brilliant-photorealistic-tattoo-design-by-Dmitriy-Samohin-of-a-tribal-African-boy-with-a-bird-696x687.jpg',
      categoria: 'realistic'
    },

    {
      id: 11,
      image: 'https://i.imgur.com/Yk9P9IJ.jpg',
      categoria: 'realistic'
    },
    {
      id: 12,
      image: 'https://www.instagram.com/p/B0wbBQHoFP3/media?size=l',
      categoria: 'realistic'
    },
    {
      id: 13,
      image: 'https://i.ytimg.com/vi/kbZpTPSmntg/maxresdefault.jpg',
      categoria: 'realistic'
    },
    {
      id: 14,
      image: 'https://www.inkedmag.com/.image/t_share/MTU5MDMyMDU0ODMyNzY4Nzky/75-portrait-feat.jpg',
      categoria: 'realistic'
    },
    {
      id: 15,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkJQG7mmQIFNbZ7nhInohOtKWjuPOUaNzaSylOkmfH3mo5s3SK&usqp=CAU',
      categoria: 'realistic'
    },
    {
      id: 16,
      image: 'https://66.media.tumblr.com/b07572dad860f8ad38af6bcec6fe96fa/tumblr_inline_pjzohpNjQo1s571wf_500.jpg',
      categoria: 'realistic'
    },
    {
      id: 17,
      image: 'https://www.inkme.tattoo/wp-content/uploads/2016/12/symbol-tattoo-designs0381.jpg',
      categoria: 'symbol'
    },
    {
      id: 18,
      image: 'https://nextluxury.com/wp-content/uploads/symbolic-tattoos-for-men-enso-meaning.jpg',
      categoria: 'symbol'
    },
    {
      id: 19,
      image: 'https://www.inkme.tattoo/wp-content/uploads/2016/12/symbol-tattoo-designs0751.jpg',
      categoria: 'symbol'
    },
    {
      id: 20,
      image: 'https://cdn2.stylecraze.com/wp-content/uploads/2013/05/Om-Tattoo.jpg',
      categoria: 'symbol'
    },
    {
      id: 21,
      image: 'https://d2l0wy9lsui5uy.cloudfront.net/c/u/f67894297b6134a6b759b3a9ec15b6cb/2018/11/19052509/dharma-wheel.jpg',
      categoria: 'symbol'
    },
    {
      id: 22,
      image: 'https://img.culturacolectiva.com/content/2016/10/Tattoo-Symbols-oroborus.jpg',
      categoria: 'symbol'
    },
    {
      id: 23,
      image: 'https://cdn.tattoosboygirl.com/wp-content/uploads/2017/04/Sibling-Tattoos.jpg',
      categoria: 'symbol'
    },

  ]

  const body = galleryImage.filter(bodyTattoo => bodyTattoo.categoria == 'body')
  const photorealistic = galleryImage.filter(realisticTattoo => realisticTattoo.categoria === 'realistic')
  const symbolic = galleryImage.filter(symbolicTattoo => symbolicTattoo.categoria === 'symbol')

  const navigation = useNavigation()

  function handleNavigationBack() {
    navigation.goBack()
  }


  function handleToDetails(id, categoria, ArrayImages) {
    navigation.navigate('Details', {
      id,
      categoria,
      ArrayImages: galleryImage
    })
  }

  console.log(galleryImage);
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
        <View style={styles.numberBox}>
          <Text style={styles.number}>{galleryImage.length}</Text>
          <Text style={styles.fotoDescription}>PHOTOS</Text>
        </View>

        <View style={styles.carousel}>
          <Text style={styles.titleScroll}>full body</Text>
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
              body.map(image => (
                <TouchableOpacity
                  key={image.id}
                  onPress={() => handleToDetails(image.id, image.categoria, null)}
                >
                  <Image
                    source={{ uri: image.image }}
                    style={{ width: 80, height: 120, resizeMode: 'cover', marginRight: 10, borderRadius: 6, }}
                  />
                </TouchableOpacity>
              ))
            }
          </ScrollView>



          <Text style={styles.titleScroll}>Photorealistic</Text>
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
              photorealistic.map(photo => (
                <TouchableOpacity
                  key={photo.id}
                  onPress={() => handleToDetails(photo.id, photo.categoria, null)}
                >
                  <Image
                    source={{ uri: photo.image }}
                    style={{ width: 80, height: 120, resizeMode: 'cover', marginRight: 10, borderRadius: 6, }}
                  />
                </TouchableOpacity>
              ))
            }
          </ScrollView>


          <Text style={styles.titleScroll}>SYMBOLIC</Text>
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

              symbolic.map(symbol => (
                <TouchableOpacity
                  key={symbol.id}
                  onPress={() => handleToDetails(symbol.id, symbol.categoria, null)}
                >
                  <Image
                    source={{ uri: symbol.image }}
                    style={{ width: 80, height: 120, resizeMode: 'cover', marginRight: 10, borderRadius: 6, }}
                  />
                </TouchableOpacity>
              ))
            }
          </ScrollView>

        </View>
      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    flex: 1,
  },

  bottom: {
    flex: 3,
    marginTop: (Platform.OS === 'ios') ? 40 : 20
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
    bottom: (Platform.OS === 'ios') ? 20 : 28,
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
    marginTop: (Platform.OS === 'ios') ? 0 : -60,
    paddingLeft: (Platform.OS === 'ios') ? 5 : 17
  },

  titleScroll: {
    marginTop: 20,
    marginLeft: 42,
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#4a4a4a',
    letterSpacing: 2.2,
  },

})

export default Gallery;