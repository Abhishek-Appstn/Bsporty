import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    Title: string,
    image: ImageSourcePropType
}

const ItemListingLayout: React.FC<Props> = ({ Title, image }) => {
    return (
        <Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginVertical: SCREEN_HEIGHT * .01 }}>
            <View style={{ backgroundColor: colors.Grey_bg, borderRadius: 10, height: SCREEN_HEIGHT * .064, width: SCREEN_HEIGHT * .08, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Image source={image} style={{ height: SCREEN_HEIGHT * .08, width: SCREEN_HEIGHT * .09 }} resizeMode='contain' />
            </View>
            <View style={{ flex: 1, marginTop: SCREEN_HEIGHT * .01 }} >
                <Text style={{ fontSize: 11, fontWeight: '500', textAlign: 'center', maxWidth: SCREEN_WIDTH * .2, }}>{Title}</Text>
            </View>
        </Pressable>
    )
}

export default ItemListingLayout
