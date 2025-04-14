import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemDisplayCard from './ItemDisplayCard'
import { SCREENDIMENSIONS } from '../constants/constants'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {}

const DisplayList: React.FC<Props> = ({ }) => {
    return (
        <FlatList scrollEnabled={false} columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }} numColumns={2} data={['', '', '']} renderItem={(item) => <ItemDisplayCard />} />
    )
}

export default DisplayList

const styles = StyleSheet.create({})