import { Pressable, PressableProps, StyleSheetProperties, Text, TextProps, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import { localizer } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = {
    title: string, onPress?: () => void,
    buttonStyles?: PressableProps,
    textStyles: TextProps
}

const CustomPressable: React.FC<Props> = ({ title, onPress, buttonStyles, textStyles }) => {
    return (
        <Pressable style={[{ width: SCREEN_WIDTH * .9, backgroundColor: colors.Primary_Green, height: SCREEN_HEIGHT * .05, alignItems: 'center', justifyContent: 'center', borderRadius: SCREEN_WIDTH * .02 }, buttonStyles]} onPress={onPress}>
            <Text style={[{ color: colors.Text_White, fontWeight: '500', fontSize: 16, textTransform: 'capitalize' }, textStyles]}>{localizer(title)}</Text>
        </Pressable>
    )
}

export default CustomPressable
