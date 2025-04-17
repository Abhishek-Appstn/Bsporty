import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS, ServiceList } from '../constants/constants'
import ItemListingLayout from './ItemListingLayout'
import ServiceHeader from './ServiceHeader'
import { flexDirection } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = {
    header: string, data: any, rightIcon?: any
}

type RenderItemProps = {
    item: any, index: number,
}

const ServiceListingRenderItem: React.FC<RenderItemProps> = ({ item, index }) => {
    return (
        <ItemListingLayout Title={item.title} image={item.image} />
    )
}

const ServiceListing: React.FC<Props> = ({ header, data, rightIcon }) => {
    return (
        <View style={{ marginTop: SCREEN_HEIGHT * .02, width: SCREEN_WIDTH * .9 }} >
            <ServiceHeader header={header} rightIcon={rightIcon} />
            <FlatList scrollEnabled={false} contentContainerStyle={[{ marginTop: SCREEN_HEIGHT * .005, },]} numColumns={4} data={data} renderItem={(item) => <ServiceListingRenderItem item={item.item} index={item.index} />} />
        </View >
    )
}

export default ServiceListing
