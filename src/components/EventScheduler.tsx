import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import { calendar, timer } from '../assets/images'
import moment from 'moment'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type SelectionItemProps = {
    title: string, icon: ImageSourcePropType
}
const SelectionItem: React.FC<SelectionItemProps> = ({ title, icon }) => {
    return (
        <Pressable style={{
            flex: 1, alignItems: 'center', flexDirection: 'row',
        }}>
            <Image source={icon} style={{ height: SCREEN_HEIGHT * .02, marginHorizontal: SCREEN_WIDTH * .01 }} resizeMode='contain' />
            <Text style={{ fontWeight: '400', fontSize: 14, color: colors.Text, }}>{title}</Text>
        </Pressable>
    )
}
type Props = {
    selectedDate: moment.Moment,
    setSelectedDate: () => void,
    setselectedTime: () => void,
    selectedTime: moment.Moment

}

const EventScheduler: React.FC<Props> = ({ selectedDate, selectedTime }) => {
    return (
        <View style={{ height: SCREEN_HEIGHT * .05, alignItems: 'center', justifyContent: 'center', borderColor: colors.border, borderWidth: 1, borderRadius: SCREEN_WIDTH * .015, overflow: 'hidden', marginTop: SCREEN_HEIGHT * .025 }}>
            <View style={{ width: SCREEN_WIDTH * .6, flexDirection: 'row', justifyContent: 'space-between', }}>

                <SelectionItem title={selectedDate?.format("ddd DD/MM")} icon={calendar} />
                <Text style={{ alignSelf: 'center', fontSize: 20, opacity: 0.5 }}>|</Text>
                <SelectionItem title={selectedTime?.format("HH:mm A")} icon={timer} />
            </View>

        </View>
    )
}

export default EventScheduler
