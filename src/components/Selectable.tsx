import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SCREENDIMENSIONS, SportList } from '../constants/constants'
import { colors } from '../constants/colors'
import { chevronDown } from '../assets/images'
import { localizer } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    selectedService: string, setSelectedService: () => void
}
type ItemProps = {
    title: string, index: Number, onPress: () => void, isSelected: boolean
}

const ListRenderItem: React.FC<ItemProps> = ({ title, index, onPress, isSelected }) => {
    return (
        <Pressable style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * .04, paddingHorizontal: SCREEN_WIDTH * .02, justifyContent: 'center', }} onPress={onPress}>
            <Text style={{ color: isSelected ? colors.Primary_Green : colors.Text }}>{localizer(title)}</Text>
        </Pressable >
    )
}

const Selectable: React.FC<Props> = ({ selectedService, setSelectedService }) => {
    const [isVisible, setisVisible] = useState(false)
    return (
        <View style={{ position: 'relative' }}>
            <Pressable style={{ height: SCREEN_HEIGHT * .05, borderRadius: SCREEN_WIDTH * .01, borderColor: colors.border, borderWidth: SCREEN_WIDTH * .0015, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: SCREEN_WIDTH * .02 }} onPress={() => setisVisible(!isVisible)}>
                <Text style={{ fontWeight: '400', opacity: 0.3, fontSize: 14 }}>{localizer(selectedService)}</Text>
                <Image source={chevronDown} style={{ height: SCREEN_HEIGHT * .01 }} resizeMode='contain' />
            </Pressable>
            {isVisible ? <View style={{ position: 'absolute', top: SCREEN_HEIGHT * .05, height: SCREEN_HEIGHT * .13, elevation: 10, borderColor: colors.UpdateText, borderWidth: 0.2, borderRadius: 5, zIndex: 1, backgroundColor: colors.Surface_light, overflow: 'hidden' }}>
                <FlatList bounces={false} data={SportList} contentContainerStyle={{ overflow: 'hidden' }} renderItem={(item) => <ListRenderItem title={item?.item?.title} index={item.index} isSelected={item?.item?.title === selectedService} onPress={() => { setSelectedService(item?.item?.title), setisVisible(false) }} />} />
            </View> : null}
        </View>


    )
}

export default Selectable
