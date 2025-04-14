import React, { Ref, RefObject, useRef, useState } from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import { BrandsList, SCREENDIMENSIONS, ServiceList } from '../constants/constants'
import { App_logo, FooterImage, search_normal, Stadium, wallet } from '../assets/images'
import { CalenderStrip, DisplayList, IconLayout, ItemDisplayCard, ServiceListing, TopUpdates } from '../components'
import ImageCarousal from '../components/ImageCarousal'
import CarousalSelector from '../components/CarousalSelector'
import ScrollableServices from '../components/ScrollableServices'
import TodaysActivities from '../components/TodaysActivities'
import moment from 'moment'
import ActionSheet from 'react-native-actions-sheet'
import Search from '../components/Search'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
}
type HeaderProps = {
    SearchRef: RefObject<Actionsheet>

}

const Header: React.FC<HeaderProps> = ({ SearchRef }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: StatusBar.currentHeight }}>
            <Image source={App_logo} />
            <View style={{ width: SCREEN_WIDTH * .2, flexDirection: 'row', justifyContent: 'space-between' }}>
                <IconLayout IconImage={wallet} />
                <IconLayout IconImage={search_normal} onPress={() => { SearchRef.current.show() }} />

            </View>
        </View>
    )
}

const Footer: React.FC<Props> = (props) => {
    return (
        <Image source={FooterImage} style={{ zIndex: 1, alignSelf: 'flex-end' }} />

    )
}



const LandingPage: React.FC<Props> = (props) => {
    const [selectedDate, setselectedDate] = useState(moment())
    const SearchRef = useRef()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.Surface_light, }}>
            <View style={{ paddingHorizontal: SCREEN_WIDTH * .05, flex: 1 }}>

                <Header SearchRef={SearchRef} />

                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <TopUpdates HeaderText={"Top Updates"} OfferData={'Get 50% off on indoor activites'} />
                    <ImageCarousal images={[Stadium, Stadium, Stadium, Stadium,]} />
                    <ServiceListing header='Services' data={ServiceList} />
                    <ScrollableServices />
                    <TodaysActivities />
                    <CalenderStrip selectedDate={selectedDate} setSelectedDate={setselectedDate} />
                    <DisplayList />
                    <Footer />
                    <Search SearchRef={SearchRef} />
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default LandingPage