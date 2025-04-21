import { Image, ImageSourcePropType, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { flexDirection, ImageTransform } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = { header: string, rightIcon?: any, leftIcon: any, onLeftPress: () => void }

const ServiceHeader: React.FC<Props> = ({ header, rightIcon, leftIcon, onLeftPress }) => {
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }, flexDirection()]}>
            {leftIcon ? <Pressable style={{ overflow: 'hidden' }} onPress={onLeftPress}>
                <Image source={leftIcon} style={ImageTransform()} />
            </Pressable> : null}
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{header}</Text>
            <View style={{ overflow: 'hidden' }}>
                {rightIcon}
            </View>
        </View>
    )
}
export default ServiceHeader
