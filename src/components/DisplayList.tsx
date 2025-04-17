import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ItemDisplayCard from './ItemDisplayCard'
import { SCREENDIMENSIONS, SearchData } from '../constants/constants'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    activeFilter: any, selectedEventSport: any
}

const DisplayList: React.FC<Props> = ({ activeFilter, selectedEventSport }) => {
    const [FilteredData, setFilteredData] = useState(SearchData)
    const initialLoad = useRef(true)
    useEffect(() => {

        initialLoad?.current ? initialLoad.current = false : setFilteredData(SearchData.filter(
            (item) => item.eventType.toLowerCase() === activeFilter.toLowerCase() &&
                (selectedEventSport.length === 0 ||
                    selectedEventSport.some(event => event.title.toLowerCase() === item.eventSport.toLowerCase()))
        ));
    }, [activeFilter, selectedEventSport]);




    console.log('aaaa', activeFilter);

    return (
        <FlatList scrollEnabled={false} columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }} numColumns={2} data={FilteredData} renderItem={(item) => <ItemDisplayCard header={item.item.title} organiser={item.item.organiser} displayImage={item.item.image} eventType={item.item.eventType} outdoor={item.item.eventLocation?.toLowerCase() === 'outdoor'} time={item.item.time} />} />
    )
}

export default DisplayList

const styles = StyleSheet.create({})