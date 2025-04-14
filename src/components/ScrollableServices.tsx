import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ServiceListing from './ServiceListing'
import ItemListingLayout from './ItemListingLayout'
import CarousalSelector from './CarousalSelector'
import { BrandsList, SCREENDIMENSIONS } from '../constants/constants'

type Props = {}

const ScrollableServices = (props: Props) => {
    const [Data, setData] = useState(BrandsList)
    return (


        <ServiceListing data={Data} header='Discover Our Brand' rightIcon={<CarousalSelector setActive={null} currentIndex={0} backgroundColor={'transparent'} totalCount={3} />} />


    )
}

export default ScrollableServices
