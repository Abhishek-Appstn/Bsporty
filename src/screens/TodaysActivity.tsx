import { View, Text, SafeAreaView, FlatList, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import ServiceHeader from '../components/ServiceHeader'
import { ArrowLeft } from '../assets/images'
import { SCREENDIMENSIONS, SearchData } from '../constants/constants'
import { colors } from '../constants/colors'
import { localizer, textAlign } from '../utils'
import FilterData from '../components/FilterData'
import { useNavigation } from '@react-navigation/native'
import FilterSelector from '../components/FilterSelector'
import { ItemDisplayCard } from '../components'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {}

const TodaysActivity: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation()
    const [Filters, setFilters] = useState([])
    useEffect(() => {
        let data = Object.entries(route?.params).map(([key, value]) => ({ key, value }));
        setFilters(data)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1, marginHorizontal: SCREEN_WIDTH * .05, marginTop: SCREEN_HEIGHT * .02 }}>
                <ServiceHeader leftIcon={ArrowLeft} onLeftPress={() => navigation?.goBack()} />
                <View style={{ flex: 1, marginTop: SCREEN_HEIGHT * .03 }}>
                    <Text style={[{ color: colors.Text, fontSize: 16, fontWeight: '500' }, textAlign()]}>{localizer("Today's Activities")}</Text>
                    <FilterSelector filterHeaders={FilterData} setfilterHeaders={setFilters} />

                    <FlatList bounces={false} columnWrapperStyle={{ marginVertical: SCREEN_HEIGHT * .01, justifyContent: 'space-between' }} contentContainerStyle={{ flex: 1 }} data={SearchData} numColumns={2} renderItem={(item) => <ItemDisplayCard displayImage={item?.item?.image} time={item?.item?.time} eventType={item?.item?.eventType} header={item?.item?.title} organiser={item?.item?.organiser} outdoor={item?.item?.eventLocation == 'outdoor' ? true : false} />} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TodaysActivity