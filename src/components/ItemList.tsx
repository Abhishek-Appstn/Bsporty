import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivityIcon from './ActivityIcon'
import { EventData, SCREENDIMENSIONS, SportList } from '../constants/constants'
import { colors } from '../constants/colors'
import FilterData from './FilterData'
import { Filter } from '../assets/images'
import { flexDirection } from '../utils'
import { useSelector } from 'react-redux'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = {
    activefilter: any,
    setactivefilter: any,
    setselectedEventSport: any,
    selectedEventSport: any
}

const ItemList: React.FC<Props> = ({
    activefilter,
    setactivefilter,
    selectedEventSport,
    setselectedEventSport
}) => {
    const [FilterVisible, setFilterVisible] = useState(false)
    const [SportData, setSportData] = useState(SportList)
    const language = useSelector(state => state?.language?.value)

    useEffect(() => {
        var Data = SportList.filter((item) => item.type === activefilter)
        setSportData(Data)
    }, [activefilter])

    useEffect(() => {
        setTimeout(() => {
            setSportData([
                ...SportData.filter((item) => selectedEventSport.includes(item)),
                ...SportData.filter((item) => !selectedEventSport.includes(item))
            ]);
        }, 500);
    }, [selectedEventSport]);

    return (
        <View style={[{ flexDirection: 'row' }, flexDirection()]}>

            <Pressable
                style={{
                    height: SCREEN_HEIGHT * .045,
                    width: SCREEN_HEIGHT * .045,
                    borderRadius: SCREEN_HEIGHT,
                    backgroundColor: colors.UpdateText,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: SCREEN_WIDTH * 0.02
                }}
                onPress={() => { setFilterVisible(true) }}
            >
                <Image
                    source={Filter}
                    resizeMode='contain'
                    style={{ height: SCREEN_HEIGHT * .02 }}
                />
            </Pressable>


            <FlatList
                horizontal
                bounces={false}
                inverted={language === 'ar' ? true : false}
                showsHorizontalScrollIndicator={false}
                data={SportData}
                renderItem={(item) => (
                    <ActivityIcon
                        title={item.item.title}
                        icon={item.item.image}
                        selected={selectedEventSport.includes(item?.item)}
                        onPress={() => setselectedEventSport(prev =>
                            prev.includes(item.item)
                                ? prev.filter(i => i !== item.item)
                                : [...prev, item.item]
                        )}
                    />
                )}
            />

            <FilterData
                data={SportData}
                filterVisible={FilterVisible}
                setFilterVisible={setFilterVisible}
                setactivefilter={setactivefilter}
                activefilter={activefilter}
                selectedData={[...selectedEventSport]}
                setSelectedData={setselectedEventSport}
            />
        </View>
    )
}

export default ItemList