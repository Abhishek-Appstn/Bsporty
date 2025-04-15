import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import { chevronDown } from '../assets/images'
import { Picker } from '@react-native-picker/picker'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    selectedService: string, setSelectedService: () => void
}

const Selectable: React.FC<Props> = ({ selectedService, setSelectedService }) => {
    return (
        <>
            <Pressable style={{ height: SCREEN_HEIGHT * .05, borderRadius: SCREEN_WIDTH * .01, borderColor: colors.border, borderWidth: SCREEN_WIDTH * .0015, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: SCREEN_WIDTH * .02 }}>
                <Text style={{ fontWeight: '400', opacity: 0.3, fontSize: 14 }}>{selectedService}</Text>
                <Image source={chevronDown} style={{ height: SCREEN_HEIGHT * .01 }} resizeMode='contain' />
            </Pressable>

        </>


    )
}

export default Selectable
