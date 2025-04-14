import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ComponentLifecycle, RefObject, useState } from 'react'
import ActionSheet from 'react-native-actions-sheet'
import { EventData, SCREENDIMENSIONS, SportList } from '../constants/constants'
import { colors } from '../constants/colors'
import ItemList, { GameSelector } from './ItemList'
import ActivityIcon from './ActivityIcon'
import CustomPressable from './CustomPressable'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type FlatlistProps = {
    title: string
    selected: boolean, onPress?: () => void
}
const FlatlistRenderItem: React.FC<FlatlistProps> = ({ title, selected, onPress }) => {
    return (
        <Pressable style={{ width: SCREEN_WIDTH * .3, alignItems: 'center', backgroundColor: selected ? colors.Primary_Green : colors.Grey_bg, paddingHorizontal: SCREEN_WIDTH * .02, paddingVertical: SCREEN_HEIGHT * .01, borderRadius: SCREEN_WIDTH * .03 }} onPress={onPress}>
            <Text style={{ color: selected ? colors.Text_White : colors.Text, fontWeight: '500', fontSize: 12 }}>{title}</Text>
        </Pressable>
    )
}

type EventType = {
    activefilter: string
    setactivefilter: (name: string) => void
}

const EventType: React.FC<EventType> = ({ activefilter, setactivefilter }) => {
    return (
        <View style={{ marginVertical: SCREEN_HEIGHT * .015 }}>
            <Text style={{ fontWeight: '500', fontSize: 12, opacity: 0.4, }}>Type</Text>
            <FlatList contentContainerStyle={{ justifyContent: 'space-between', flex: 1, marginTop: SCREEN_HEIGHT * .015 }} horizontal data={EventData} style={{ flexDirection: 'row' }} renderItem={(item) => <FlatlistRenderItem title={item.item.title} selected={activefilter === item.item.title ? true : false} onPress={() => setactivefilter(item.item.title)} />} />
        </View>

    )
}
type SportFilter = {

}

const SportFilter: React.FC<EventType> = ({ activefilter, setactivefilter }) => {
    return (
        <View>
            <Text style={{ fontWeight: '500', fontSize: 12, opacity: 0.4, }}>Sports</Text>
            <FlatList columnWrapperStyle={{ marginVertical: SCREEN_HEIGHT * .01, }} showsVerticalScrollIndicator={false} numColumns={3} data={SportList} renderItem={(item) => < ActivityIcon title={item.item.title} icon={item.item.image} selected={item?.item.title === activefilter ? true : false} onPress={() => setactivefilter(item.item.title)} />} />
        </View>


    )
}
type Props = {
    SearchRef: RefObject<Actionsheet>
}

const Search: React.FC<Props> = ({ SearchRef }) => {
    const [activefilter, setactivefilter] = useState(EventData[0].title)
    return (

        <ActionSheet ref={SearchRef} containerStyle={{ height: SCREEN_HEIGHT * .5, borderRadius: 0, }}>
            <View style={{ marginVertical: SCREEN_HEIGHT * .03, paddingHorizontal: SCREEN_WIDTH * .03, }}>
                <Text style={{ fontWeight: '600', fontSize: 16 }}>Filter By</Text>
                <EventType activefilter={activefilter} setactivefilter={setactivefilter} />
                <SportFilter />
                <View style={{ marginTop: SCREEN_HEIGHT * .03 }}>
                    <CustomPressable title='Filter' />

                </View>
            </View>
        </ActionSheet>

    )
}

export default Search

const styles = StyleSheet.create({})