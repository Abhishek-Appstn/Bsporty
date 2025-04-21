import { View, Text, SafeAreaView, FlatList, Pressable, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import ServiceHeader from '../components/ServiceHeader'
import { ArrowLeft, Stadium } from '../assets/images'
import { useNavigation } from '@react-navigation/native'
import { localizer, textAlign } from '../utils'
import { Clubs, SCREENDIMENSIONS } from '../constants/constants'
import SearchBar from '../components/SearchBar'
import { colors } from '../constants/colors'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    clubImage: ImageSourcePropType,
    clubName: String,
    clubLocation: String,
    clubDistance: any
}
const ClubRenderItem: React.FC<Props> = ({ clubImage, clubName, clubLocation, clubDistance }) => {
    console.log('Home', clubImage, clubName, clubLocation, clubDistance)
    return (
        <Pressable style={{ backgroundColor: colors.Surface_light, borderColor: colors.border, borderWidth: 0.4, height: SCREEN_HEIGHT * .12, borderRadius: 20, marginVertical: SCREEN_HEIGHT * .01, overflow: 'hidden', flexDirection: 'row', alignItems: 'center', paddingHorizontal: SCREEN_WIDTH * .02, elevation: 4, shadowColor: colors.button, shadowRadius: 5, shadowOpacity: .7, shadowOffset: { height: 0, width: 10 }, }}>
            <Image source={clubImage} style={{ height: SCREEN_HEIGHT * .09, width: SCREEN_HEIGHT * .09, borderRadius: SCREEN_WIDTH * .015, overflow: 'hidden' }} resizeMode='cover' />
            <View style={{ marginHorizontal: SCREEN_WIDTH * .05 }}>
                <Text style={[{ color: colors.Text, fontSize: 12, fontWeight: '500', textTransform: 'capitalize' }, textAlign()]}>{localizer(clubName)}</Text>
                <Text style={[{ color: colors.Text, fontSize: 12, fontWeight: '500', opacity: 0.4, textTransform: 'capitalize', marginTop: SCREEN_HEIGHT * .005 }, textAlign()]}>{localizer(clubLocation)}</Text>
                {clubDistance ? <Text style={[{ color: colors.Text, fontSize: 12, fontWeight: '500', opacity: 0.4, textTransform: 'capitalize', marginTop: SCREEN_HEIGHT * .005 }, textAlign()]}>{clubDistance}{localizer('Km')} {localizer('Away')}</Text> : null}
            </View>
        </Pressable>
    )
}


const ActivityClasses: React.FC<Props> = ({ }) => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: colors.Surface_light, flex: 1 }}>
            <View style={{ paddingHorizontal: SCREEN_WIDTH * .15, justifyContent: 'center', marginTop: SCREEN_HEIGHT * .01 }}>
                <ServiceHeader leftIcon={ArrowLeft} onLeftPress={() => navigation?.goBack()} header={localizer('Activity Classes-Clubs')} />
            </View>
            <View style={{ paddingHorizontal: SCREEN_WIDTH * .05, marginTop: SCREEN_HEIGHT * .01, flex: 1 }}>
                <SearchBar />
                <FlatList contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .015, flexGrow: 1 }} bounces={false} data={Clubs} renderItem={(item) => <ClubRenderItem clubName={item?.item?.clubName} clubDistance={item?.item?.clubDistance} clubImage={item?.item?.clubImage} clubLocation={item?.item?.clubLocation} />} />
            </View>
        </SafeAreaView>
    )
}

export default ActivityClasses