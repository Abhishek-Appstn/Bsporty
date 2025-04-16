import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { roundBack } from '../assets/images'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../constants/colors'
import { SCREENDIMENSIONS } from '../constants/constants'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = {

}

const ActionsheetHeader = (props: Props) => {
    return (
        <View style={{ marginBottom: SCREEN_HEIGHT * .025 }}>
            <Image source={roundBack} style={{ position: 'absolute' }} />
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.Grey_bg, colors.Primary_Green, colors.Grey_bg]} style={{
                height: 2, marginTop: .5, borderRadius: 50, width: SCREEN_WIDTH * .98, alignSelf: 'center',
            }} />
            <View style={{ width: SCREEN_WIDTH * .09, backgroundColor: colors.CarousalGray, height: SCREEN_HEIGHT * .004, alignSelf: 'center', marginTop: SCREEN_HEIGHT * .01 }} />

        </View>

    )
}

export default ActionsheetHeader

