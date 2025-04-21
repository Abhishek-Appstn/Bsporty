import { FlatList, Image, ImageSourcePropType, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { BottomTabData, SCREENDIMENSIONS } from '../constants/constants'
import LinearGradient from 'react-native-linear-gradient'
import { Decathlon, Stadium } from '../assets/images'
import { useRoute } from '@react-navigation/native'
import { flexDirection } from '../utils'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type IconProps = { icon: ImageSourcePropType, isSelected: boolean }

const ConnectionSvg = () => {
    return (
        <Svg
            width={156}
            height={68}
            viewBox="0 0 156 68"
            fill="none"

        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-0.00872803 23C-0.00872803 10.2975 10.2887 0 22.9913 0H48.075C61.4408 0 73.0052 7.71231 78.561 18.9295C79.7139 21.2574 81.9773 22.9335 84.575 22.9335C87.1727 22.9335 89.4361 21.2574 90.589 18.9295C96.1448 7.71231 107.709 0 121.075 0C139.853 0 155.075 15.2223 155.075 34C155.075 52.7777 139.853 68 121.075 68C107.709 68 96.1448 60.2877 90.589 49.0705C89.4361 46.7426 87.1727 45.0665 84.575 45.0665C81.9773 45.0665 79.7139 46.7426 78.561 49.0705C73.0052 60.2877 61.4408 68 48.075 68H22.9913C10.2887 68 -0.00872803 57.7025 -0.00872803 45V23Z"
                fill="#040503"
            />
        </Svg>
    )
}
const IconRenderItem: React.FC<IconProps & { isSelected: boolean }> = ({ icon, isSelected }) => {
    return (
        isSelected ? (
            <LinearGradient
                colors={[colors.Primary_Green, colors.Primary_Green, colors.CarousalGray, colors.CarousalGray]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    width: SCREEN_HEIGHT * 0.041,
                    height: SCREEN_HEIGHT * 0.041,
                    borderRadius: SCREEN_HEIGHT,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Pressable
                    style={{
                        height: SCREEN_HEIGHT * 0.04,
                        width: SCREEN_HEIGHT * 0.04,
                        borderRadius: SCREEN_HEIGHT,
                        backgroundColor: colors.button,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image source={icon} resizeMode="contain" style={{ height: SCREEN_HEIGHT * 0.02 }} />
                </Pressable>
            </LinearGradient>
        ) : (
            <View
                style={{
                    width: SCREEN_HEIGHT * 0.041,
                    height: SCREEN_HEIGHT * 0.041,
                    borderRadius: SCREEN_HEIGHT,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Pressable
                    style={{
                        height: SCREEN_HEIGHT * 0.04,
                        width: SCREEN_HEIGHT * 0.04,
                        borderRadius: SCREEN_HEIGHT,
                        backgroundColor: colors.button,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image source={icon} resizeMode="contain" style={{ height: SCREEN_HEIGHT * 0.02 }} />
                </Pressable>
            </View>
        )
    );
};


type Props = {
    route: any
}

const CustomBottomTab: React.FC<Props> = ({ }) => {
    const route = useRoute()
    console.log("route", route);

    const language = useSelector(state => state?.language?.value)
    return (
        <SafeAreaView style={{ width: SCREEN_WIDTH * .8, height: SCREEN_HEIGHT * .06, borderRadius: SCREEN_WIDTH * .05, position: 'absolute', bottom: 0, marginBottom: SCREEN_HEIGHT * .05, alignSelf: 'center', overflow: 'hidden', flexDirection: 'row', alignItems: 'center', }}>
            <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'center' }, flexDirection()]}>

                <View style={{ flex: 6, backgroundColor: colors.button, justifyContent: 'center', padding: SCREEN_WIDTH * .01, borderRadius: 20, }}>
                    <FlatList inverted={language == 'ar' ? true : false} scrollEnabled={false} data={BottomTabData} contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 3, alignItems: 'center' }} horizontal renderItem={(item) => <IconRenderItem icon={(item?.item?.name).toLowerCase() === (route?.name).toLowerCase() ? item.item.icon_filled : item.item.icon_outline} isSelected={(item?.item?.name).toLowerCase() === (route?.name).toLowerCase() ? true : false} />} />
                </View >
                <Pressable style={{
                    backgroundColor: colors.button, borderRadius: SCREEN_WIDTH, height: SCREEN_HEIGHT * .06, width: SCREEN_HEIGHT * .06, overflow: 'hidden', alignItems: 'center', justifyContent: 'center',
                }}>
                    <Image source={Stadium} resizeMode='cover' style={{ height: SCREEN_HEIGHT * .055, width: SCREEN_HEIGHT * .055, borderRadius: SCREEN_WIDTH }} />
                </Pressable>

            </View >
        </SafeAreaView >
    )
}

export default CustomBottomTab
