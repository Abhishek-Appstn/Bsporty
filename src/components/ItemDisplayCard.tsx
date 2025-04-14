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
            shadowOffset: { width: 0, height: 2 }, // Adjust for better visibility
            backgroundColor: 'transparent', // Avoid unwanted background effects,
            elevation: 20
        }}>
            {/* Inner container with content, ensuring it doesn't inherit shadow */}
            <Pressable style={{
                height: SCREEN_HEIGHT * .2,
                width: SCREEN_WIDTH * .43,
                borderRadius: SCREEN_WIDTH * .02,
                backgroundColor: 'white', // Explicit background color for proper shadow rendering
                overflow: 'hidden',
            }}>
                <ImageHeader image={Stadium} />
                <Details Header={"Hellow"} eventType={'ead'} Organiser={"dscsdc"} time={""} />
            </Pressable>
        </View>
    )
}

export default ItemDisplayCard
