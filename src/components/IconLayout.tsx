import { Image, ImageProps, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    IconImage: ImageSourcePropType, onPress?: () => void, text?: string
}
const IconLayout: React.FC<Props> = ({ IconImage, onPress, text }) => {
    return (
        <Pressable style={{ borderRadius: SCREEN_HEIGHT, height: SCREEN_HEIGHT * .04, width: SCREEN_HEIGHT * .04, borderColor: '#04050326', alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: SCREEN_WIDTH * .01 }} onPress={onPress}>
            {!text ? <Image source={IconImage} resizeMode='contain' /> : <Text style={{ color: colors.Primary_Green }}>{text}</Text>}

        </Pressable>
    )
}

export default IconLayout
