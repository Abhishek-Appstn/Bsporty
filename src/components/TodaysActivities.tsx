import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ServiceHeader from './ServiceHeader'
import { ArrowRight } from '../assets/images'
import { SCREENDIMENSIONS } from '../constants/constants'
import ItemList from './ItemList'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {

}
const RightIcon = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 12, fontWeight: 500, marginRight: SCREEN_WIDTH * .01 }}> See all</Text>
            <Image source={ArrowRight} />
        </View>
    )
}
const TodaysActivities: React.FC = ({ }) => {
    const [selectedActivityIndex, setselectedActivityIndex] = useState(0)
    return (
        <View>
            <ServiceHeader header="Today's Activities" rightIcon={<RightIcon />} />
            <ItemList selectedActivityIndex={selectedActivityIndex} setselectedActivityIndex={setselectedActivityIndex} />
        </View>
    )
}

export default TodaysActivities
