import { Image, ImageProps, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    IconImage: ImageSourcePropType, onPress?: () => void
}
const IconLayout: React.FC<Props> = ({ IconImage, onPress }) => {
    return (
        <Pressable style={{ borderRadius: SCREEN_HEIGHT, height: SCREEN_HEIGHT * .04, width: SCREEN_HEIGHT * .04, borderColor: '#04050326', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }} onPress={onPress}>
            <Image source={IconImage} resizeMode='contain' />

        </Pressable>
    )
}

export default IconLayout
