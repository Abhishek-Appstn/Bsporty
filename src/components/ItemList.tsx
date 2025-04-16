import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivityIcon from './ActivityIcon'
import { EventData, SCREENDIMENSIONS, SportList } from '../constants/constants'
import { colors } from '../constants/colors'

import FilterData from './FilterData'
import { Filter } from '../assets/images'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {

}


const ItemList: React.FC<Props> = ({ }) => {
    const [activefilter, setactivefilter] = useState(EventData[0].title)
    const [FilterVisible, setFilterVisible] = useState(false)
    const [SportData, setSportData] = useState(SportList)
    const [selectedData, setSelectedData] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setSportData([
                ...SportData.filter((item) => selectedData.includes(item)),
                ...SportData.filter((item) => !selectedData.includes(item))
            ]);
        }, 500);

    }, [selectedData]);


    return (
        <ScrollView bounces={false} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ marginVertical: SCREEN_HEIGHT * .01 }}>
            <Pressable style={{ height: SCREEN_HEIGHT * .045, width: SCREEN_HEIGHT * .045, borderRadius: SCREEN_HEIGHT, backgroundColor: colors.UpdateText, alignItems: 'center', justifyContent: 'center' }} onPress={() => { setFilterVisible(true) }}>
                <Image source={Filter} resizeMode='contain' style={{ height: SCREEN_HEIGHT * .02, }} />
            </Pressable>
            <FlatList showsHorizontalScrollIndicator={false} scrollEnabled={false} horizontal data={SportData} renderItem={(item) => < ActivityIcon title={item.item.title} icon={item.item.image} selected={selectedData.includes(item?.item) ? true : false} onPress={() => setSelectedData(prev => prev.includes(item.item) ? prev.filter(i => i !== item.item) : [...prev, item.item]
            )}
            />} />

            <FilterData data={SportData} filterVisible={FilterVisible} setFilterVisible={setFilterVisible} setactivefilter={setactivefilter} activefilter={activefilter} selectedData={[...selectedData]} setSelectedData={setSelectedData} />

        </ScrollView>
    )
}

export default ItemList
