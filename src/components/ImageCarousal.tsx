import { FlatList, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { App_logo, wallet } from '../assets/images'
import { colors } from '../constants/colors'
import CarousalSelector from './CarousalSelector'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS


type CarousalProps = {
    item: any, index: number, totalCount: number,
}
const CarousalRenderItem: React.FC<CarousalProps> = ({ item, index, totalCount }) => {
    return (
        <ImageBackground source={item} style={{ backgroundColor: 'red', height: SCREEN_HEIGHT * .2, borderRadius: 20, width: SCREEN_WIDTH * .9, paddingHorizontal: SCREEN_WIDTH * .02, paddingVertical: SCREEN_HEIGHT * .002, overflow: 'hidden', marginTop: SCREEN_HEIGHT * .02 }}>
            <Text style={{ position: 'absolute', bottom: SCREEN_HEIGHT * .03, fontSize: 31, fontStyle: 'italic', fontWeight: '700', left: SCREEN_WIDTH * .02, color: colors.Surface_light }}>{`JOIN \nTOURNAMENT`}</Text>
        </ImageBackground>
    )
}

type Props = {
    images: any
}
const ImageCarousal: React.FC<Props> = ({ images }) => {
    const CarousalRef = useRef<FlatList>(null)
    const [Active, setActive] = useState(0)
    const [ScrollActive, setScrollActive] = useState(false)

    useEffect(() => {
        if (CarousalRef?.current && images.length > 0)
            setTimeout(() => {
                setScrollActive(true)
                CarousalRef?.current?.scrollToIndex({ index: Active, animated: true })
                setTimeout(() => {
                    setScrollActive(false)

                }, 400);

            }, 100);
    }, [Active])

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev < images.length - 1 ? prev + 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, [Active]);


    return (
        <View style={{}}>
            <View style={{ position: 'absolute', top: SCREEN_HEIGHT * .03, zIndex: 1, left: SCREEN_WIDTH * .05 }}>
                <CarousalSelector setScrollActive={setScrollActive} setActive={setActive} currentIndex={Active} totalCount={images.length} />
            </View>
            <FlatList onScrollToIndexFailed={(err) => { console.log('Image carousal scroll to index failed', err) }} viewabilityConfig={{ viewAreaCoveragePercentThreshold: 30 }} initialScrollIndex={Active} ref={CarousalRef} scrollEventThrottle={16} onViewableItemsChanged={({ viewableItems }) => viewableItems.length > 0 && !ScrollActive ? setActive(viewableItems[0]?.index) : null} bounces={false} showsHorizontalScrollIndicator={false} pagingEnabled={true} decelerationRate={'fast'} horizontal={true} data={images} renderItem={(item) => <CarousalRenderItem index={item.index} item={item.item} totalCount={images.length} />} />
        </View>

    )
}

export default ImageCarousal
