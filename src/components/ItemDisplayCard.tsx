import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import { ArrowRight, Stadium } from '../assets/images'
import moment from 'moment'
import { flexDirection, ImageTransform, localizer, textAlign } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type Detailprops = {
    Header: String,
    eventType: String,
    Organiser: String
    time: moment.Moment
    timeAm: moment.Moment


}
export const Details: React.FC<Detailprops> = ({ Header, eventType, Organiser, time, timeAm }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: SCREEN_WIDTH * .015, justifyContent: 'space-evenly', paddingTop: SCREEN_HEIGHT * .01 }}>
            <Text style={[{ color: colors.Primary_Green, fontSize: 9, fontWeight: '400', opacity: 0.6, textTransform: 'capitalize' }, textAlign()]}>{localizer(eventType)}</Text>
            <Text style={[{ color: colors.Text, fontSize: 12, fontWeight: '500', textTransform: 'capitalize' }, textAlign()]}>{localizer(Header)}</Text>
            <Text style={[{ color: colors.Text, fontSize: 12, fontWeight: '500', opacity: 0.4, textTransform: 'capitalize', marginTop: SCREEN_HEIGHT * .005 }, textAlign()]}>{localizer(Organiser)}</Text>
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }, flexDirection()]}>
                <View style={[{ backgroundColor: colors.Grey_bg, height: SCREEN_HEIGHT * .02, minWidth: SCREEN_WIDTH * .1, borderRadius: SCREEN_HEIGHT, alignItems: 'center', justifyContent: 'center', paddingHorizontal: SCREEN_WIDTH * .007, paddingVertical: SCREEN_HEIGHT * .002 },]} >
                    <Text style={[{ fontSize: 8.8 }]}>{localizer(moment(time, "hh:mm A").format("hh:mm"))} {localizer(moment(time, "hh:mm A").format("a"))}</Text>

                </View>
                <View style={[{ paddingRight: SCREEN_WIDTH * .02 }, ImageTransform()]}>
                    <Image source={ArrowRight} />
                </View>
            </View>
        </View >
    )
}
type Props = {
    displayImage: ImageSourcePropType,
    eventType: String,
    header: String,
    time: string | moment.Moment, organiser: String, outdoor: boolean
}

const ItemDisplayCard: React.FC<Props> = ({ displayImage, time, header, eventType, organiser, outdoor }) => {
    return (

        <View style={{
            shadowColor: colors.Text,
            shadowRadius: 4,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 2 },
            backgroundColor: 'transparent',
            elevation: 5,
        }}>
            {outdoor ? <View style={{ width: SCREEN_WIDTH * .15, borderWidth: 0.92, borderRightWidth: 2.92, borderBottomWidth: 2.92, borderColor: colors.Text, position: 'absolute', height: SCREEN_HEIGHT * .02, elevation: 10, zIndex: 1, top: 10, backgroundColor: colors.Text_White, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center' }}>
                <Text style={{ fontSize: 9, fontWeight: '500', textTransform: 'uppercase', marginLeft: SCREEN_WIDTH * .01, justifyContent: 'center' }}>{localizer('Outdoor')}</Text>
            </View> : null}
            <Pressable style={{
                height: SCREEN_HEIGHT * .235,
                width: SCREEN_WIDTH * .43,
                borderRadius: SCREEN_WIDTH * .02,
                backgroundColor: 'white',
                overflow: 'hidden',
            }}>
                <Image style={{ height: SCREEN_HEIGHT * .11, width: SCREEN_WIDTH * .43, }} source={displayImage} resizeMode='cover' />

                <Details Header={header} eventType={eventType} Organiser={organiser} time={time} timeAm={time} />

            </Pressable>
        </View >
    )
}

export default ItemDisplayCard
