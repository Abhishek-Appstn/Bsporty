import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import ModalOverlay from './ModalOverlay'
import { MatchFilterData, SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import CustomPressable from './CustomPressable'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    title: string,
    isSelected: boolean,
    setSelectedIndex: Function, index: Number
}


const SelectorComponent: React.FC<Props> = ({ title, isSelected, setSelectedIndex, index }) => {
    return (
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: SCREEN_HEIGHT * .01 }} onPress={() => setSelectedIndex(index)}>
            <Text style={{ color: colors.Text, fontWeight: '500', fontSize: 14, marginVertical: SCREEN_HEIGHT * .01 }}>{title}</Text>
            <View style={{ width: SCREEN_WIDTH * .05, height: SCREEN_WIDTH * .05, borderRadius: SCREEN_HEIGHT, borderColor: colors.Primary_Green, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: SCREEN_WIDTH * .03, height: SCREEN_WIDTH * .03, borderRadius: SCREEN_HEIGHT, backgroundColor: isSelected ? colors.Primary_Green : null }} />
            </View>
        </Pressable>
    )
}

const MatchFilter: React.FC<Props> = ({ }) => {
    const [visible, setVisible] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <ModalOverlay modalVisible={visible} setModalVisible={setVisible} height={SCREEN_HEIGHT * .4}>
            <View>
                <Text style={{ color: colors.Text, opacity: 0.4, fontWeight: '500', fontSize: 12 }}>Choose</Text>
                <Text style={{ color: colors.Text, fontWeight: '500', fontSize: 16, marginVertical: SCREEN_HEIGHT * .01 }}>Match Type</Text>
            </View>
            {MatchFilterData.map((item, index) => (
                <SelectorComponent key={index} index={index} title={item.title} isSelected={selectedIndex === index ? true : false} setSelectedIndex={setSelectedIndex} />
            ))}
            <View style={{ marginTop: SCREEN_HEIGHT * .01 }}>
                <Text style={{ color: colors.Text, opacity: 0.4, fontWeight: '500', fontSize: 12 }}>Choose Level</Text>

            </View>
            <CustomPressable title='FIlter' />
        </ModalOverlay>
    )
}

export default MatchFilter