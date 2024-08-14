import React from 'react'
import { Image, View } from 'react-native'

const ImageCircle = ({source}) => {
  return (
    <View
    style={{
      borderWidth: 1,
      borderColor: '#fff',
      width: 32,
      height: 32,
      borderRadius: 50,
    }}>
    <Image source={source} />
  </View>
  )
}

export default ImageCircle
