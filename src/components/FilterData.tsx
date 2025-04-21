import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalOverlay from './ModalOverlay'
import ActionsheetHeader from './ActionsheetHeader'
import { EventData, SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import CustomPressable from './CustomPressable'
import ActivityIcon from './ActivityIcon'
import { flexDirection, localizer, textAlign } from '../utils'
import { useSelector } from 'react-redux'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type FlatlistProps = {
    title: string
    selected: boolean, onPress?: () => void
}
const FlatlistRenderItem: React.FC<FlatlistProps> = ({ title, selected, onPress }) => {
    return (
        <Pressable style={{ width: SCREEN_WIDTH * .28, height: SCREEN_HEIGHT * .05, alignItems: 'center', justifyContent: 'center', backgroundColor: selected ? colors.Primary_Green : colors.Grey_bg, paddingHorizontal: SCREEN_WIDTH * .02, paddingVertical: SCREEN_HEIGHT * .01, borderRadius: SCREEN_WIDTH * .03, marginHorizontal: SCREEN_WIDTH * .01 }} onPress={onPress}>
            <Text style={{ color: selected ? colors.Text_White : colors.Text, fontWeight: '500', fontSize: 12 }}>{localizer(title)}</Text>
        </Pressable>
    )
}


type SportEventType = {
    activefilter: string
    setactivefilter: (name: string) => void,
    Data?:any
}

export const SportEventType: React.FC<SportEventType> = ({ activefilter, setactivefilter,Data }) => {
    const language = useSelector(state => state?.language?.value)
    return (
        <View style={{ marginVertical: SCREEN_HEIGHT * .015 }}>
            <Text style={[{ fontWeight: '500', fontSize: 12, opacity: 0.4, }, textAlign()]}>{localizer('Type')}</Text>
            <FlatList inverted={language === 'ar' ? true : false} scrollEnabled={false} contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1, marginTop: SCREEN_HEIGHT * .015, }} horizontal data={Data || EventData} style={{ flexDirection: 'row', }} renderItem={(item) => <FlatlistRenderItem title={item.item} selected={activefilter.toLocaleLowerCase() === item?.item?.toLocaleLowerCase() ? true : false} onPress={() => setactivefilter(item.item)} />} />
        </View>

    )
}
type SportFilter = {
    activefilter: string
    setactivefilter: (name: string) => void
    data: any
    selectedData: any
    setSelectedData: (name: string) => void
}

const SportFilter: React.FC<SportFilter> = ({ activefilter, setactivefilter, data, selectedData, setSelectedData }) => {

    return (
        <View>
            <Text style={[{ fontWeight: '500', fontSize: 12, opacity: 0.4, }, textAlign()]}>{localizer('Sports')}</Text>
            <FlatList ListEmptyComponent={<Text style={{ fontWeight: '500', fontSize: 12, color: colors.Text, opacity: 0.4, marginTop: SCREEN_HEIGHT * .01 }}>{localizer('No sport Selection Available')}</Text>} scrollEnabled={false} columnWrapperStyle={[{ marginVertical: SCREEN_HEIGHT * .01 }, flexDirection()]} showsVerticalScrollIndicator={false} numColumns={3} data={data} renderItem={(item) => < ActivityIcon title={item.item.title} icon={item.item.image} selected={selectedData.includes(item.item) ? true : false} onPress={() => setSelectedData((prevState) =>
                prevState.includes(item.item) ? prevState.filter((selectedItem) => selectedItem !== item.item) : [...prevState, item.item]
            )} maxwidth={SCREEN_WIDTH * .35} />} />
        </View>


    )
}
type Props = {
    activefilter: string, setactivefilter: (index: number) => void, data: Object, filterVisible: boolean, setFilterVisible: (bool: boolean) => void, setSelectedData: any, selectedData: any
}
const FilterData: React.FC<Props> = ({ activefilter, setactivefilter, data, filterVisible, setFilterVisible, selectedData, setSelectedData }) => {
    const [Selectedlocal, setSelectedlocal] = useState(selectedData)

    useEffect(() => {
        setSelectedlocal(selectedData);
    }, [selectedData]);


    return (
        <ModalOverlay modalVisible={filterVisible} setModalVisible={setFilterVisible}>
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <View style={{}}>
                    <Text style={[{ fontWeight: '600', fontSize: 16 }, textAlign()]}>{localizer('Filter_By')}</Text>
                    <SportEventType activefilter={activefilter} setactivefilter={setactivefilter} />
                    <SportFilter activefilter={activefilter} setactivefilter={setactivefilter} data={data} selectedData={Selectedlocal} setSelectedData={setSelectedlocal} />
                </View>
                <CustomPressable title='Filter' onPress={() => { setFilterVisible(false), setSelectedData(Selectedlocal) }} />
            </View>

        </ModalOverlay>
    )
}

export default FilterData
