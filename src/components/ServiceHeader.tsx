import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = { header: string, rightIcon?: any }

const ServiceHeader: React.FC<Props> = ({ header, rightIcon }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: SCREEN_HEIGHT * .007 }}>{header}</Text>
            <View style={{ overflow: 'hidden' }}>
                {rightIcon}
            </View>
        </View>
    )
}
export default ServiceHeader
