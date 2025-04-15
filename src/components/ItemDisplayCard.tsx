import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import { ArrowRight, Stadium } from '../assets/images'
import moment from 'moment'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {}
type ImageProps = {
    image: ImageSourcePropType
}

const ImageHeader: React.FC<ImageProps> = ({ image }) => {
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ height: SCREEN_HEIGHT * .1, width: SCREEN_WIDTH * .43, }} source={image} resizeMode='cover' />
        </View>

    )
}
type Detailprops = {
    Header: String,
    eventType: String,
    Organiser: String
    time: moment.Moment

}
const Details: React.FC<Detailprops> = ({ Header, eventType, Organiser, time }) => {
    return (
        <View style={{ flex: 1, paddingLeft: SCREEN_WIDTH * .01, justifyContent: 'space-evenly' }}>
            <Text style={{ color: colors.Primary_Green, fontSize: 9, fontWeight: '400' }}>{eventType}</Text>
            <Text style={{ color: colors.Text, fontSize: 12, fontWeight: '500' }}>{Header}</Text>
            <Text style={{ color: colors.Text, fontSize: 12, fontWeight: '500', opacity: 0.4 }}>{Organiser}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: colors.Grey_bg, height: SCREEN_HEIGHT * .02, width: SCREEN_WIDTH * .1, borderRadius: SCREEN_HEIGHT, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ fontSize: 8.8 }} > 11:00</Text>
                </View>
                <View style={{ paddingRight: SCREEN_WIDTH * .02 }}>
                    <Image source={ArrowRight} />
                </View>
            </View>
        </View >
    )
}
const ItemDisplayCard: React.FC<Props> = ({ }) => {
    return (

        <View style={{
            shadowColor: colors.Text,
            shadowRadius: 4,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 2 },
            backgroundColor: 'transparent',
            elevation: 20
        }}>
            <View style={{ width: SCREEN_WIDTH * .15, borderWidth: 0.92, borderRightWidth: 2.92, borderBottomWidth: 2.92, borderColor: colors.Text, position: 'absolute', height: SCREEN_HEIGHT * .02, elevation: 10, zIndex: 1, top: 10, backgroundColor: colors.Text_White, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center' }}>
                <Text style={{ fontSize: 9, fontWeight: '500', textTransform: 'uppercase', marginLeft: SCREEN_WIDTH * .01, justifyContent: 'center' }}>Outdoor</Text>
            </View>
            <Pressable style={{
                height: SCREEN_HEIGHT * .2,
                width: SCREEN_WIDTH * .43,
                borderRadius: SCREEN_WIDTH * .02,
                backgroundColor: 'white',
                overflow: 'hidden',
            }}>
                <ImageHeader image={Stadium} />
                <Details Header={"Hellow"} eventType={'ead'} Organiser={"dscsdc"} time={""} />

            </Pressable>
        </View >
    )
}

export default ItemDisplayCard
