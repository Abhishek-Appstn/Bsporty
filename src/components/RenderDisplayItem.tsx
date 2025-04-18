import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { Stadium } from '../assets/images'
import { Details } from './ItemDisplayCard'
import { colors } from '../constants/colors'
import { flexDirection } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    header: String, organiser: String, time: moment.Moment, merediams: String
}

const RenderDisplayItem: React.FC<Props> = ({ header, organiser, time, merediams }) => {
    return (
        <Pressable style={{ height: SCREEN_HEIGHT * .15, width: SCREEN_WIDTH * .9, elevation: 10, borderWidth: 0.88, shadowColor: colors.border, shadowRadius: 10, shadowOffset: { height: 5, width: 0 }, shadowOpacity: 0.5, borderRadius: SCREEN_WIDTH * .02, overflow: 'hidden', borderColor: colors.border, backgroundColor: colors.Text_White }}>
            <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'center', }, flexDirection()]}>
                <Image source={Stadium} style={{ width: SCREEN_WIDTH * .4, height: SCREEN_HEIGHT * .14, borderTopLeftRadius: SCREEN_WIDTH * .01, alignSelf: 'center', borderTopRightRadius: SCREEN_WIDTH * .01 }} resizeMode='cover' />
                <View style={{ justifyContent: 'center', flex: 1, marginTop: SCREEN_HEIGHT * .02, paddingHorizontal: SCREEN_WIDTH * .04 }}>
                    <Details Header={header} Organiser={organiser} time={time} timeAm={merediams} />
                </View>
            </View>
        </Pressable>
    )
}

export default RenderDisplayItem