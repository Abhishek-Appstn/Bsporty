import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActivityIcon from './ActivityIcon'
import { SCREENDIMENSIONS, SportList } from '../constants/constants'
import { Filter } from '../assets/images'
import { colors } from '../constants/colors'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    selectedActivityIndex: Number, setselectedActivityIndex: (index: number) => void
}

const ItemList: React.FC<Props> = ({ selectedActivityIndex, setselectedActivityIndex }) => {
    return (
        <ScrollView bounces={false} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ marginVertical: SCREEN_HEIGHT * .01 }}>
            <Pressable style={{ height: SCREEN_HEIGHT * .045, width: SCREEN_HEIGHT * .045, borderRadius: SCREEN_HEIGHT, backgroundColor: colors.UpdateText, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={Filter} resizeMode='contain' style={{ height: SCREEN_HEIGHT * .02, }} />
            </Pressable>
            <FlatList showsHorizontalScrollIndicator={false} scrollEnabled={false} horizontal data={SportList} renderItem={(item) => < ActivityIcon title={item.item.title} icon={item.item.image} selected={item?.index === selectedActivityIndex ? true : false} onPress={() => setselectedActivityIndex(item.index)} />} />

        </ScrollView>
    )
}

export default ItemList
