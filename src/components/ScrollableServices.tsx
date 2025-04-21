import { FlatList, Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ServiceListing from './ServiceListing'
import ItemListingLayout from './ItemListingLayout'
import CarousalSelector from './CarousalSelector'
import { BrandsList, SCREENDIMENSIONS } from '../constants/constants'
import ServiceHeader from './ServiceHeader'
import { colors } from '../constants/colors'
import { localizer } from '../utils'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type ItemDisplayProps = {
    image: ImageSourcePropType
}

const ItemDisplay: React.FC<ItemDisplayProps> = ({ image }) => {
    const navigation=useNavigation()
    return (
        <Pressable style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: SCREEN_HEIGHT * .01, }} onPress={()=>navigation?.navigate("ClubDetails")
        }>
            <View style={{ backgroundColor: colors.Grey_bg, borderRadius: SCREEN_WIDTH * .02, height: SCREEN_HEIGHT * .062, width: SCREEN_HEIGHT * .082, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={image} style={{ height: SCREEN_HEIGHT * .075, width: SCREEN_HEIGHT * .085 }} resizeMode='contain' />
            </View>

        </Pressable>
    )
}
type RenderItemProps = {
    item: any,
    index: any
}

const RenderItem: React.FC<RenderItemProps> = ({ item, index }) => {

    return (
        <FlatList columnWrapperStyle={{ flexGrow: 1, }} decelerationRate={'fast'} scrollEnabled={false} data={item} numColumns={4} renderItem={(item) =>
            <ItemDisplay image={item.item.image} />
        } />
    )
}

type Props = {}

const ScrollableServices = (props: Props) => {
    const FlatlistRef = useRef()
    const [Data, setData] = useState(BrandsList)
    const [ScrollActive, setScrollActive] = useState(false)
    const [ActiveIndex, setActiveIndex] = useState(0)
    const language = useSelector(state => state?.language?.value)

    useEffect(() => {
        if (FlatlistRef?.current && Data.length > 0)
            setTimeout(() => {
                setScrollActive(true)
                FlatlistRef?.current?.scrollToIndex({ index: ActiveIndex, animated: true })
                setTimeout(() => {
                    setScrollActive(false)
                }, 400);

            }, 100);
    }, [ActiveIndex])
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev < Data.length - 1 ? prev + 1 : 0));
        }, 2000);

        return () => clearInterval(interval);
    }, [ActiveIndex]);

    useEffect(() => {
        let pages = [];
        for (let i = 0; i < BrandsList.length; i += 8) {
            pages.push(BrandsList.slice(i, i + 8));
        }
        setData(pages);
    }, []);

    return (
        <View style={{ marginVertical: SCREEN_HEIGHT * .01 }}>
            <ServiceHeader header={localizer('Discover_our_Brand')} rightIcon={<CarousalSelector setActive={setActiveIndex} currentIndex={ActiveIndex} backgroundColor={'transparent'} totalCount={Data.length} setScrollActive={setScrollActive} />} />
            <FlatList inverted={language == 'ar' ? true : false} ref={FlatlistRef} viewabilityConfig={{ viewAreaCoveragePercentThreshold: 30 }} initialScrollIndex={ActiveIndex} onViewableItemsChanged={({ viewableItems }) => viewableItems.length > 0 && !ScrollActive ? setActiveIndex(viewableItems[0]?.index) : null} bounces={false} scrollEventThrottle={16} contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false} pagingEnabled horizontal data={Data} renderItem={(item) => <RenderItem item={item.item} index={item.index} />} />
        </View>


    )
}

export default ScrollableServices
