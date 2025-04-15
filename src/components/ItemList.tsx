import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ActivityIcon from './ActivityIcon'
import { EventData, SCREENDIMENSIONS, SportList } from '../constants/constants'
import { Filter } from '../assets/images'
import { colors } from '../constants/colors'
import ActionSheet from 'react-native-actions-sheet'
import CustomPressable from './CustomPressable'
import ActionsheetHeader from './ActionsheetHeader'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type FlatlistProps = {
    title: string
    selected: boolean, onPress?: () => void
}
const FlatlistRenderItem: React.FC<FlatlistProps> = ({ title, selected, onPress }) => {
    return (
        <Pressable style={{ width: SCREEN_WIDTH * .28, height: SCREEN_HEIGHT * .05, alignItems: 'center', justifyContent: 'center', backgroundColor: selected ? colors.Primary_Green : colors.Grey_bg, paddingHorizontal: SCREEN_WIDTH * .02, paddingVertical: SCREEN_HEIGHT * .01, borderRadius: SCREEN_WIDTH * .03, marginHorizontal: SCREEN_WIDTH * .01 }} onPress={onPress}>
            <Text style={{ color: selected ? colors.Text_White : colors.Text, fontWeight: '500', fontSize: 12 }}>{title}</Text>
        </Pressable>
    )
}

type Props = {
    selectedActivityIndex: Number, setselectedActivityIndex: (index: number) => void
}
type EventType = {
    activefilter: string
    setactivefilter: (name: string) => void
}

const EventType: React.FC<EventType> = ({ activefilter, setactivefilter }) => {
    return (
        <View style={{ marginVertical: SCREEN_HEIGHT * .015 }}>
            <Text style={{ fontWeight: '500', fontSize: 12, opacity: 0.4, }}>Type</Text>
            <FlatList scrollEnabled={false} contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1, marginTop: SCREEN_HEIGHT * .015, }} horizontal data={EventData} style={{ flexDirection: 'row', }} renderItem={(item) => <FlatlistRenderItem title={item.item.title} selected={activefilter === item.item.title ? true : false} onPress={() => setactivefilter(item.item.title)} />} />
        </View>

    )
}
type SportFilter = {

}

const SportFilter: React.FC<Filter> = ({ activefilter, setactivefilter, data }) => {
    return (
        <View>
            <Text style={{ fontWeight: '500', fontSize: 12, opacity: 0.4, }}>Sports</Text>
            <FlatList ListEmptyComponent={<Text style={{ fontWeight: '500', fontSize: 12, color: colors.Text, opacity: 0.4, marginTop: SCREEN_HEIGHT * .01 }}>No sport Selection Available</Text>} scrollEnabled={false} columnWrapperStyle={{ marginVertical: SCREEN_HEIGHT * .01, }} showsVerticalScrollIndicator={false} numColumns={3} data={data} renderItem={(item) => < ActivityIcon title={item.item.title} icon={item.item.image} selected={item?.item.title === activefilter ? true : false} onPress={() => setactivefilter(item.item.title)} maxwidth={SCREEN_WIDTH * .3} />} />
        </View>


    )
}
type Filter = {
    Ref: Ref,
    activefilter, setactivefilter,
    data
}

const FilterActionsheet: React.FC<Filter> = ({ activefilter, setactivefilter, Ref, data }) => {
    return (
        <ActionSheet ref={Ref} containerStyle={{ height: SCREEN_HEIGHT * .5, paddingHorizontal: SCREEN_WIDTH * .04, justifyContent: 'space-between' }} >
            <ActionsheetHeader />
            <Text style={{ fontWeight: '600', fontSize: 16 }}>Filter By</Text>
            <EventType activefilter={activefilter} setactivefilter={setactivefilter} />
            <SportFilter data={data} />
            <View style={{}}>
                <CustomPressable title='Filter' />
            </View>

        </ActionSheet>
    )
}

const ItemList: React.FC<Props> = ({ selectedActivityIndex, setselectedActivityIndex }) => {
    const [activefilter, setactivefilter] = useState(EventData[0].title)
    const [SportData, setSportData] = useState(SportList)

    useEffect(() => {
        var Data = SportList.filter((item) => item.type === activefilter)
        setSportData(Data)
    }, [activefilter])


    const Ref = useRef()<ActionSheet>
    return (
        <ScrollView bounces={false} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ marginVertical: SCREEN_HEIGHT * .01 }}>
            <Pressable style={{ height: SCREEN_HEIGHT * .045, width: SCREEN_HEIGHT * .045, borderRadius: SCREEN_HEIGHT, backgroundColor: colors.UpdateText, alignItems: 'center', justifyContent: 'center' }} onPress={() => { Ref?.current.show() }}>
                <Image source={Filter} resizeMode='contain' style={{ height: SCREEN_HEIGHT * .02, }} />
            </Pressable>
            <FlatList showsHorizontalScrollIndicator={false} scrollEnabled={false} horizontal data={SportList} renderItem={(item) => < ActivityIcon title={item.item.title} icon={item.item.image} selected={item?.index === selectedActivityIndex ? true : false} onPress={() => setselectedActivityIndex(item.index)} />} />
            <FilterActionsheet Ref={Ref} activefilter={activefilter} setactivefilter={setactivefilter} data={SportData} />
        </ScrollView>
    )
}

export default ItemList
