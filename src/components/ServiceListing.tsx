import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS, ServiceList } from '../constants/constants'
import ItemListingLayout from './ItemListingLayout'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = {
    header: string
}

type RenderItemProps = {
    item: any, index: number
}

const ServiceListingRenderItem: React.FC<RenderItemProps> = ({ item, index }) => {
    return (
        <ItemListingLayout Title={item.title} image={item.image} />

    )
}

const ServiceListing: React.FC<Props> = ({ header }) => {
    return (
        <View style={{ marginTop: SCREEN_HEIGHT * .02, }} >
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{header}</Text>

            <FlatList scrollEnabled={false} contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .005 }} numColumns={4} data={ServiceList} renderItem={(item) => <ServiceListingRenderItem item={item.item} index={item.index} />} />
        </View >
    )
}

export default ServiceListing
