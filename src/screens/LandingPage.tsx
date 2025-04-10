import React from 'react'
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import { BrandsList, SCREENDIMENSIONS, ServiceList } from '../constants/constants'
import { App_logo, search_normal, Stadium, wallet } from '../assets/images'
import { IconLayout, ServiceListing, TopUpdates } from '../components'
import ImageCarousal from '../components/ImageCarousal'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {}
type HeaderProps = {}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image source={App_logo} />
            <View style={{ width: SCREEN_WIDTH * .2, flexDirection: 'row', justifyContent: 'space-between' }}>
                <IconLayout IconImage={wallet} />
                <IconLayout IconImage={search_normal} />

            </View>
        </View>
    )
}


const LandingPage: React.FC<Props> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.Surface_light }}>
            <View style={{ paddingHorizontal: SCREEN_WIDTH * .05, marginTop: StatusBar.currentHeight, flex: 1 }}>
                <Header />
                <TopUpdates HeaderText={"Top Updates"} OfferData={'Get 50% off on indoor activites'} />
                <ImageCarousal images={[Stadium, Stadium, Stadium, Stadium,]} />
                <ServiceListing header='Services' data={ServiceList} />
                <ServiceListing header='Discover Our Brand' data={BrandsList} />

            </View>
        </SafeAreaView>
    )
}

export default LandingPage