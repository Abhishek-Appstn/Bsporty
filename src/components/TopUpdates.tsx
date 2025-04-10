import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { SCREENDIMENSIONS } from '../constants/constants'
import { DiscountIcon } from '../assets/images'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Props = { HeaderText: string, OfferData: any }

const TopUpdates: React.FC<Props> = (props) => {
    return (
        <View style={{ backgroundColor: colors.Grey_bg, width: SCREEN_WIDTH * .9, height: SCREEN_HEIGHT * .024, borderRadius: 10, overflow: 'hidden', marginTop: SCREEN_HEIGHT * .01, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ backgroundColor: colors.Primary_Green, width: SCREEN_WIDTH * 0.25, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: colors.Text_White, textTransform: 'capitalize', }}>{props.HeaderText}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
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
            <View style={{ marginLeft: SCREEN_WIDTH * .04, flexDirection: 'row', alignItems: 'center' }}>

                <Image source={DiscountIcon} />
                <Text style={{ fontSize: 12, fontWeight: '400', color: colors.UpdateText, marginLeft: SCREEN_WIDTH * .015 }}>{props.OfferData}</Text>
            </View>


        </View >
    )
}

export default TopUpdates

