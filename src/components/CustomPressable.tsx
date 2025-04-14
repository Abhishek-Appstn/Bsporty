import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = {
    title: string
}

const CustomPressable: React.FC<Props> = ({ title }) => {
    return (
        <Pressable style={{ width: SCREEN_WIDTH * .9, backgroundColor: colors.Primary_Green, height: SCREEN_HEIGHT * .05, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: SCREEN_WIDTH * .02 }}>
            <Text style={{ color: colors.Text_White, fontWeight: '500', fontSize: 16 }}>{title}</Text>
        </Pressable>
    )
}

export default CustomPressable
