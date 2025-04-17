import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ServiceHeader from './ServiceHeader'
import { ArrowRight } from '../assets/images'
import { SCREENDIMENSIONS } from '../constants/constants'
import ItemList from './ItemList'
import { flexDirection, ImageTransform, localizer } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    activefilter: any, setactivefilter: any, setselectedEventSport: any, selectedEventSport: any
}
const RightIcon = () => {
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, flexDirection()]}>
            <Text style={{ fontSize: 12, fontWeight: 500, marginRight: SCREEN_WIDTH * .01 }}> {localizer("See_all")}</Text>
            <Image source={ArrowRight} style={ImageTransform()} />
        </View>
    )
}
const TodaysActivities: React.FC<Props> = ({ activefilter, setactivefilter, setselectedEventSport, selectedEventSport }) => {
    const [selectedActivityIndex, setselectedActivityIndex] = useState(0)
    return (
        <View>
            <ServiceHeader header={localizer("Todays_Activites")} rightIcon={<RightIcon />} />
            <ItemList setselectedEventSport={setselectedEventSport} selectedEventSport={selectedEventSport} selectedActivityIndex={selectedActivityIndex} setselectedActivityIndex={setselectedActivityIndex} activefilter={activefilter} setactivefilter={setactivefilter}
            />
        </View>
    )
}

export default TodaysActivities
