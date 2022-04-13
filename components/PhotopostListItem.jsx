import React, { useRef, useState, useEffect } from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'
import * as Sharing from 'expo-sharing'
import * as FileSystem from 'expo-file-system'
import { nanoid } from 'nanoid/non-secure'
import { getImageSize, PHOTOPOST_WIDTH } from '../utils/image'
import { primary } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'

const PhotopostListItem = ({ url }) => {
  const imageUri = useRef('')
  const [size, setSize] = useState({
    width: PHOTOPOST_WIDTH,
    height: PHOTOPOST_WIDTH
  })

  useEffect(() => {
    getImageSize(url).then(setSize)
  }, [])

  const share = async () => {
    const downloadResumable = FileSystem.createDownloadResumable(
      url,
      `${FileSystem.documentDirectory}${nanoid()}.png`
    )

    try {
      if (!imageUri.current) {
        const { uri } = await downloadResumable.downloadAsync()
        imageUri.current = uri
      }
      await Sharing.shareAsync(imageUri.current)
    } catch (e) {
      alert('Maalesef bir hata oluştu, paylaşmayı tekrar deneyebilirsin.')
      console.error(e)
    }
  }

  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
      <View
        style={{
          padding: 24,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: '#f1f1f1',
          backgroundColor: 'white'
        }}
      >
        <Image
          source={{ uri: url }}
          style={{ ...size, borderRadius: 24, marginBottom: 12 }}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{
            width: '100%',
            height: 48
          }}
          onPress={share}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: primary(),
              borderRadius: 8
            }}
          >
            <Ionicons name="share-social-outline" color={primary()} size={24} />
            <Text
              style={{
                fontSize: 20,
                lineHeight: 28,
                fontFamily: 'sans-regular',
                color: primary(),
                marginLeft: 12
              }}
            >
              Paylaş
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PhotopostListItem
