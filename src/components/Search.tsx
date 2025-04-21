import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'

import CustomPressable from './CustomPressable'

import Selectable from './Selectable'
import EventScheduler from './EventScheduler'
import moment from 'moment'
import ModalOverlay from './ModalOverlay'
import { localizer } from '../utils'
import { useNavigation } from '@react-navigation/native'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type SelectServicesProps = {
    selectedService: string, setselectedService: () => void
}

const SelectServices: React.FC<SelectServicesProps> = ({ selectedService, setselectedService }) => {
    return (
        <View style={{ marginTop: SCREEN_HEIGHT * .02 }}>
            <Text style={{ fontWeight: '500', fontSize: 12, color: colors.Text, marginVertical: SCREEN_HEIGHT * .01, textTransform: 'capitalize' }}>{localizer('Select_Services')} </Text>
            <Selectable selectedService={selectedService} setSelectedService={setselectedService} />
        </View>
    )
}



type Props = {
    SearchVisible: any
    setSearchVisible: any
}

const Search: React.FC<Props> = ({ setSearchVisible, SearchVisible }) => {
    const navigation = useNavigation()
    const [selectedService, setselectedService] = useState('Select a service')
    const [selectedDate, setselectedDate] = useState(moment)
    const [selectedTime, setselectedTime] = useState(moment)
    console.log("Visi", SearchVisible, setSearchVisible);

    return (

        <ModalOverlay modalVisible={SearchVisible} setModalVisible={setSearchVisible}>
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <View style={{ paddingHorizontal: SCREEN_WIDTH * .03, }}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>{localizer('Search')}</Text>
                    <SelectServices selectedService={selectedService} setselectedService={setselectedService} />
                    <EventScheduler selectedDate={selectedDate} setSelectedDate={setselectedDate} selectedTime={selectedTime} setselectedTime={setselectedTime} />
                </View>
                <CustomPressable title='Filter' onPress={() => {
                    navigation.navigate('SearchResults', { eventSport: selectedService, time: selectedTime?.format("HH:mm A"), Date: selectedDate?.format("ddd DD/MM") }), setSearchVisible(false)
                }} />
            </View>

        </ModalOverlay>


    )
}

export default Search
