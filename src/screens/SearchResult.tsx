import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ServiceHeader from '../components/ServiceHeader'
import { ArrowLeft, ArrowRight, cross } from '../assets/images'
import { EventData, SCREENDIMENSIONS, SearchData } from '../constants/constants'
import { colors } from '../constants/colors'
import { Route, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import RenderDisplayItem from '../components/RenderDisplayItem'
import { flexDirection, localizer, textAlign } from '../utils'
import { useSelector } from 'react-redux'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = { title: string, index: Number, onPress: Function, route: RouteProp }


const RenderFilterSelector: React.FC<Props> = ({ title, index, onPress }) => {
    return (
        <View style={[{
            backgroundColor: colors.CarousalGray,
            marginHorizontal: SCREEN_WIDTH * 0.01,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: SCREEN_WIDTH * 0.01,
            paddingVertical: SCREEN_HEIGHT * 0.005,
            flexDirection: 'row', borderRadius: SCREEN_WIDTH * .01
        }, flexDirection()]}>
            <View style={{ flex: 1 }}>
                <Text style={{ color: colors.button, opacity: 0.4, fontSize: 9, marginHorizontal: SCREEN_WIDTH * .01 }}>
                    {localizer(title)}
                </Text>
            </View>
            <Pressable onPress={onPress}>

                <Image source={cross} style={{ height: SCREEN_HEIGHT * 0.015, marginHorizontal: SCREEN_WIDTH * .01 }} resizeMode='contain' />
            </Pressable>

        </View>
    )
}



const SearchResult: React.FC<Props> = ({ }) => {
    const [filterHeaders, setfilterHeaders] = useState([])
    const [Data, setData] = useState(SearchData)
    const [isSearching, setisSearching] = useState(true)
    const route = useRoute()
    const navigation = useNavigation()
    const language = useSelector(state => state?.language?.value)

    useEffect(() => {
        let data = Object.entries(route?.params).map(([key, value]) => ({ key, value }));
        setfilterHeaders(data)
    }, [])

    useEffect(() => {
        console.log("Search Data:", SearchData);
        console.log("Filter Headers:", filterHeaders);

        if (filterHeaders.length > 0) {
            const filteredData = SearchData.filter(item =>
                filterHeaders.every(filter =>
                    item[filter.key]?.toLowerCase() === filter.value?.toLowerCase()
                )
            );

            setData(filteredData);
        } else {
            setData(SearchData);
        }
    }, [filterHeaders, SearchData]);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.Text_White }}>
            <View style={{ paddingHorizontal: SCREEN_WIDTH * .06 }}>
                <ServiceHeader leftIcon={ArrowLeft} onLeftPress={() => navigation.goBack()} />
                <View style={{ marginTop: SCREEN_HEIGHT * .03, paddingBottom: SCREEN_HEIGHT * .01 }}>
                    <Text style={[{ color: colors.Text, fontSize: 18, fontWeight: '500' }, textAlign()]}>{localizer('Search Results')}</Text>
                    <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * 0.03, marginTop: SCREEN_HEIGHT * .01 }, flexDirection()]}>
                        <Text style={[{ textTransform: 'capitalize', color: colors.Text, opacity: 0.4, fontSize: 9 }, textAlign()]}>filter</Text>
                        <FlatList inverted={language === 'ar' ? true : false} bounces={false} ListEmptyComponent={<Text style={{ marginHorizontal: SCREEN_WIDTH * .01, textTransform: 'capitalize', color: colors.Text, opacity: 0.5, fontSize: 9 }}>No Filters Applied</Text>} data={filterHeaders} horizontal renderItem={(item) => <RenderFilterSelector title={item?.item?.value} onPress={() => setfilterHeaders(filterHeaders.filter(data => data.key !== item.item.key))} />} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList ItemSeparatorComponent={() => <View style={{ height: SCREEN_HEIGHT * 0.02 }} />}
                    showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={{ flexGrow: 1, alignSelf: 'center', }} data={Data} renderItem={(item) => <RenderDisplayItem header={item?.item?.title} time={item?.item?.time} merediams={item?.item?.time} organiser={item?.item?.organiser} />} />
            </View>

        </SafeAreaView >
    )
}

export default SearchResult