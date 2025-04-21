import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { flexDirection, localizer, textAlign } from '../utils'
import { useSelector } from 'react-redux'
import { colors } from '../constants/colors'
import { cross } from '../assets/images'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    filterHeaders: any,
    setfilterHeaders: any
}
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
const FilterSelector: React.FC<Props> = ({ filterHeaders, setfilterHeaders }) => {
    const language = useSelector(state => state?.language?.value)

    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: SCREEN_HEIGHT * 0.03, marginTop: SCREEN_HEIGHT * .01 }, flexDirection()]}>
            <Text style={[{ textTransform: 'capitalize', color: colors.Text, opacity: 0.4, fontSize: 9 }, textAlign()]}>filter</Text>
            <FlatList inverted={language === 'ar' ? true : false} bounces={false} ListEmptyComponent={<Text style={{ marginHorizontal: SCREEN_WIDTH * .01, textTransform: 'capitalize', color: colors.Text, opacity: 0.5, fontSize: 9 }}>No Filters Applied</Text>} data={filterHeaders} horizontal renderItem={(item) => <RenderFilterSelector title={item?.item?.value} onPress={() => setfilterHeaders(filterHeaders?.filter(data => data?.key !== item?.item?.key))} />} />
        </View>
    )
}

export default FilterSelector