import { FlatList, Image, ImageSourcePropType, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { BottomTabData, SCREENDIMENSIONS } from '../constants/constants'
import LinearGradient from 'react-native-linear-gradient'
import { Decathlon, Stadium } from '../assets/images'
import { useRoute } from '@react-navigation/native'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type IconProps = { icon: ImageSourcePropType }

const IconRenderItem: React.FC<IconProps> = ({ icon }) => {
    return (
        <LinearGradient
            colors={[colors.Primary_Green, colors.Primary_Green, colors.CarousalGray, colors.button,]}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
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
                    backgroundColor: colors.button, alignItems: 'center', justifyContent: 'center'
                }}
            >

                <Image source={icon} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.02, }} />

            </Pressable>
        </LinearGradient>
    )
}

type Props = {
    route: any
}

const CustomBottomTab: React.FC<Props> = ({ }) => {
    const route = useRoute()
    console.log("name", route);

    return (
        <SafeAreaView style={{ width: SCREEN_WIDTH * .8, height: SCREEN_HEIGHT * .06, borderRadius: SCREEN_WIDTH * .05, position: 'absolute', bottom: 0, marginBottom: SCREEN_HEIGHT * .05, alignSelf: 'center', overflow: 'hidden', flexDirection: 'row', alignItems: 'center', }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                <View style={{ flex: 6, backgroundColor: colors.button, justifyContent: 'center', padding: SCREEN_WIDTH * .01, borderRadius: 20, }}>
                    <FlatList scrollEnabled={false} data={BottomTabData} contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 3, alignItems: 'center' }} horizontal renderItem={(item) => <IconRenderItem icon={(item?.item?.name).toLowerCase() === (route?.name).toLowerCase() ? item.item.icon_filled : item.item.icon_outline} />} />
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
