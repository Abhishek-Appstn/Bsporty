import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ComponentLifecycle, RefObject, useState } from 'react'
import ActionSheet from 'react-native-actions-sheet'
import { EventData, SCREENDIMENSIONS, SportList } from '../constants/constants'
import { colors } from '../constants/colors'
import ItemList, { GameSelector } from './ItemList'
import ActivityIcon from './ActivityIcon'
import CustomPressable from './CustomPressable'
import { roundBack } from '../assets/images'
import LinearGradient from 'react-native-linear-gradient'
import Selectable from './Selectable'
import EventScheduler from './EventScheduler'
import moment from 'moment'
import { Picker } from '@react-native-picker/picker'
import ActionsheetHeader from './ActionsheetHeader'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type SelectServicesProps = {
    selectedService: string, setselectedService: () => void
}

const SelectServices: React.FC<SelectServicesProps> = ({ selectedService, setselectedService }) => {
    return (
        <View style={{ marginTop: SCREEN_HEIGHT * .02 }}>
            <Text style={{ fontWeight: '500', fontSize: 12, color: colors.Text, marginVertical: SCREEN_HEIGHT * .01 }}>Select Services</Text>
            <Selectable selectedService={selectedService} setSelectedService={setselectedService} />
        </View>
    )
}



type Props = {
    SearchRef: RefObject<Actionsheet>
}

const Search: React.FC<Props> = ({ SearchRef }) => {
    const [selectedService, setselectedService] = useState("football")
    const [selectedDate, setselectedDate] = useState(moment)
    const [selectedTime, setselectedTime] = useState(moment)




    return (

        <ActionSheet ref={SearchRef} containerStyle={{ height: SCREEN_HEIGHT * .4, borderRadius: 0, }}>

            <ActionsheetHeader />
            <View style={{ paddingHorizontal: SCREEN_WIDTH * .03, }}>
                <Text style={{ fontWeight: '600', fontSize: 16 }}>Search</Text>
                <SelectServices selectedService={selectedService} setselectedService={setselectedService} />
                <EventScheduler selectedDate={selectedDate} setSelectedDate={setselectedDate} selectedTime={selectedTime} setselectedTime={setselectedTime} />
            </View>
            <View style={{ alignItems: 'center', marginTop: SCREEN_HEIGHT * .05 }}>
                <CustomPressable title='Filter' onPress={() => SearchRef?.current?.hide()} />
            </View>
        </ActionSheet >

    )
}

export default Search

const styles = StyleSheet.create({})