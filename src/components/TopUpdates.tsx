import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../constants/colors'
import { SCREENDIMENSIONS } from '../constants/constants'
import { DiscountIcon } from '../assets/images'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, Easing, } from 'react-native-reanimated'
import { arrowflexDirection, flexDirection, ImageTransform } from '../utils'
import { useSelector } from 'react-redux'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = { HeaderText: string, OfferData: any }

const TopUpdates: React.FC<Props> = (props) => {
    const language = useSelector(state => state?.language?.value)
    const [animationData, setanimationData] = useState({
        animationStart: 0,
        animationEnd: 0
    })

    useEffect(() => {
        setanimationData(() => ({
            animationStart: language === "ar" ? -SCREEN_WIDTH * 0.7 : SCREEN_WIDTH * 0.6,
            animationEnd: language === "ar" ? SCREEN_WIDTH * 0.6 : -SCREEN_WIDTH * 0.65,
        }));
    }, [language]);

    const translateX = useSharedValue(animationData.animationStart)
    useEffect(() => {
        translateX.value = withRepeat(withTiming(animationData.animationEnd, { duration: 14000, easing: Easing.linear }), - 1, false)
    }, [animationData])

    return (
        <View style={[{ backgroundColor: colors.Grey_bg, width: SCREEN_WIDTH * .9, height: SCREEN_HEIGHT * .024, borderRadius: 10, overflow: 'hidden', marginTop: SCREEN_HEIGHT * .01, flexDirection: 'row', alignItems: 'center' }, flexDirection()]}>
            <View style={[{ flexDirection: 'row', zIndex: 1, }, flexDirection()]}>
                <View style={{ backgroundColor: colors.Primary_Green, width: SCREEN_WIDTH * 0.25, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: colors.Text_White, textTransform: 'capitalize', }}>{props.HeaderText}</Text>
                </View>
                <View style={[{ flexDirection: 'column' }, ImageTransform()]}>
                    <View style={{
                        width: 0,
                        height: 0,
                        borderRightWidth: SCREEN_WIDTH * .02,
                        borderBottomWidth: SCREEN_HEIGHT * 0.012,
                        borderRightColor: 'transparent',
                        borderBottomColor: colors.Primary_Green,
                    }} />

                    <View style={{
                        width: 0,
                        height: 0,
                        borderRightWidth: SCREEN_WIDTH * .02,
                        borderTopWidth: SCREEN_HEIGHT * 0.012,
                        borderRightColor: 'transparent',
                        borderTopColor: colors.Primary_Green,
                    }} />
                </View>
            </View >
            <Animated.View style={[{ marginLeft: SCREEN_WIDTH * .04, flexDirection: 'row', alignItems: 'center', transform: [{ translateX: translateX }] }, flexDirection()]}>
                <Image source={DiscountIcon} />
                <Text style={{ fontSize: 12, fontWeight: '400', color: colors.UpdateText, marginLeft: SCREEN_WIDTH * .015 }}>{props.OfferData}</Text>
            </Animated.View>


        </View >
    )
}

export default TopUpdates

