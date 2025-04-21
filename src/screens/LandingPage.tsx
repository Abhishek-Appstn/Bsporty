import React, { Ref, RefObject, useEffect, useRef, useState } from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import { BrandsList, EventData, SCREENDIMENSIONS, ServiceList } from '../constants/constants'
import { App_logo, FooterImage, search_normal, Stadium, wallet } from '../assets/images'
import { CalenderStrip, DisplayList, IconLayout, ItemDisplayCard, ServiceListing, TopUpdates } from '../components'
import ImageCarousal from '../components/ImageCarousal'
import CarousalSelector from '../components/CarousalSelector'
import ScrollableServices from '../components/ScrollableServices'
import TodaysActivities from '../components/TodaysActivities'
import moment from 'moment'
import ActionSheet from 'react-native-actions-sheet'
import Search from '../components/Search'
import Selectable from '../components/Selectable'
import ModalOverlay from '../components/ModalOverlay'
import { useDispatch, useSelector } from 'react-redux'
import utils, { flexDirection, localizer } from '../utils'
import { setLanguage } from '../Redux/Slices/languageSlice'
import { Calendar } from 'react-native-calendars'
import TournamentInvite from '../components/TournamentInvite'
import MatchFilter from '../components/MatchFilter'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
}
type HeaderProps = {
    setSearchVisible(bool: boolean): any

}

const Header: React.FC<HeaderProps> = ({ setSearchVisible }) => {
    const language = useSelector(state => state?.language?.value)
    const dispatch = useDispatch()
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: StatusBar.currentHeight, paddingBottom: SCREEN_HEIGHT * .01 }, flexDirection()]}>
            <Image source={App_logo} />
            <View style={[{ flexDirection: 'row' }, flexDirection()]}>
                <IconLayout IconImage={wallet} />
                <IconLayout IconImage={search_normal} onPress={() => { setSearchVisible(true) }} />
                <IconLayout text={language == 'en' ? "Ar" : 'en'} onPress={() => { dispatch(setLanguage(language == 'en' ? 'ar' : 'en')) }} />
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
    const [SearchVisible, setSearchVisible] = useState(false)
    const [activefilter, setactivefilter] = useState(EventData[0].title)
    const [selectedEventSport, setselectedEventSport] = useState([])
    const [inviteState, setInviteState] = useState(false)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setInviteState(true)
    //     }, 3000);
    // }, [])


    return (
        <SafeAreaView style={[{ flex: 1, backgroundColor: colors.Surface_light, }]}>
            <Search setSearchVisible={setSearchVisible} SearchVisible={SearchVisible} />

            <View style={{ paddingHorizontal: SCREEN_WIDTH * .05, flex: 1, }}>
                <Header setSearchVisible={setSearchVisible} />
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <TopUpdates HeaderText={localizer("Top Updates")} OfferData={'Get 50% off on indoor activites'} />
                    <ImageCarousal images={[Stadium, Stadium, Stadium, Stadium,]} />
                    <ServiceListing header={localizer('Services')} data={ServiceList} />
                    <ScrollableServices />
                    <TodaysActivities activefilter={activefilter} setactivefilter={setactivefilter} selectedEventSport={selectedEventSport} setselectedEventSport={setselectedEventSport} />
                    <CalenderStrip selectedDate={selectedDate} setSelectedDate={setselectedDate} />
                    <DisplayList activeFilter={activefilter.toLowerCase()} selectedEventSport={selectedEventSport} />
                    <Footer />
                    <TournamentInvite visible={inviteState} setVisible={setInviteState} />

                    <MatchFilter />
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default LandingPage