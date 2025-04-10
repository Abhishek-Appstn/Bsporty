import { FlatList, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { App_logo, wallet } from '../assets/images'
import { colors } from '../constants/colors'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type CarousalSliderProps = {
    totalCount: number, currentIndex: number, setActive: Function
}

const CarousalSlider: React.FC<CarousalSliderProps> = ({ totalCount, currentIndex, setActive }) => {
    return (
        <View style={{ backgroundColor: colors.UpdateText, height: SCREEN_HEIGHT * .012, flexDirection: 'row', minWidth: SCREEN_WIDTH * .15, alignItems: 'center', paddingVertical: SCREEN_WIDTH * .02, borderRadius: SCREEN_WIDTH, paddingHorizontal: SCREEN_WIDTH * .01, }}>
            {Array.from({ length: totalCount }).map(((_, index) => (
                <Pressable onPress={() => setActive(index)} style={{ borderRadius: SCREEN_WIDTH * .1, height: SCREEN_HEIGHT * .01, width: index === currentIndex ? SCREEN_WIDTH * .075 : SCREEN_WIDTH * .03, backgroundColor: index === currentIndex ? colors.Surface_light : colors.CarousalGray, marginHorizontal: 4 }} key={index}>
                </Pressable>
            )))}
        </View>
    )
}


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
    useEffect(() => {
        if (CarousalRef?.current)
            CarousalRef?.current?.scrollToIndex({ index: Active, animated: true })
    }, [Active])

    return (
        <View style={{}}>
            <View style={{ position: 'absolute', top: SCREEN_HEIGHT * .03, zIndex: 1, left: SCREEN_WIDTH * .05 }}>
                <CarousalSlider setActive={setActive} currentIndex={Active} totalCount={images.length} />
            </View>
            <FlatList viewabilityConfig={{ viewAreaCoveragePercentThreshold: 30 }} initialScrollIndex={Active} ref={CarousalRef} scrollEventThrottle={16} onViewableItemsChanged={({ viewableItems }) => setActive(viewableItems[0]?.index)} bounces={false} showsHorizontalScrollIndicator={false} pagingEnabled={true} decelerationRate={'fast'} horizontal={true} data={images} renderItem={(item) => <CarousalRenderItem index={item.index} item={item.item} totalCount={images.length} />} />
        </View>

    )
}

export default ImageCarousal
