import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemDisplayCard from './ItemDisplayCard'
import { SCREENDIMENSIONS, SearchData } from '../constants/constants'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {}

const DisplayList: React.FC<Props> = ({ }) => {
    return (
        <FlatList scrollEnabled={false} columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }} numColumns={2} data={SearchData} renderItem={(item) => <ItemDisplayCard header={item.item.title} organiser={item.item.organiser} displayImage={item.item.image} eventType={item.item.eventType} outdoor={item.item.eventLocation?.toLowerCase() === 'outdoor'} time={item.item.time} />} />
    )
}

export default DisplayList

const styles = StyleSheet.create({})