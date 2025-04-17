import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'
import { localizer } from '../utils'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type CalenderProps = {
    index: number;
    date: moment.Moment;
    selected: boolean;
    onPress: () => void;
};

const CalenderRenderItem: React.FC<CalenderProps> = ({ index, date, selected, onPress }) => {
    return (
        <Pressable onPress={onPress} style={{ alignItems: 'center', justifyContent: 'space-evenly', height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.15 }}>
            <Text style={{ fontSize: 12, color: colors.UpdateText, fontWeight: '400' }}>{localizer(date.format('ddd'))}</Text>
            <View style={{ height: SCREEN_HEIGHT * 0.035, alignItems: 'center', justifyContent: 'center', backgroundColor: selected ? colors.Primary_Green : 'transparent', width: SCREEN_WIDTH * 0.072, borderRadius: SCREEN_WIDTH * 0.01 }}>
                <Text style={{ fontSize: 16, color: selected ? colors.Text_White : colors.UpdateText, fontWeight: '400' }}>{date.format('D')}</Text>
            </View>
            <Text style={{ fontSize: 12, color: colors.UpdateText, fontWeight: '400' }}>{localizer(date.format('MMMM'))}</Text>
        </Pressable>
    );
};

type Props = {
    selectedDate: moment.Moment;
    setSelectedDate: (date: moment.Moment) => void;
};

const CalenderStrip: React.FC<Props> = ({ selectedDate, setSelectedDate }) => {
    const [Month, setMonth] = useState(moment());
    const [Dates, setDates] = useState<moment.Moment[]>([]);
    const CalenderRef = useRef<FlatList<moment.Moment>>(null);
    const language = useSelector(state => state?.language?.value)
    useEffect(() => {
        let EndofMonth = Month.clone().endOf('month');
        let Date = Month.clone();
        let TempDates: moment.Moment[] = [];

        while (Date.isSameOrBefore(EndofMonth)) {
            TempDates.push(Date.clone());
            Date.add(1, 'day');
        }
        setDates(TempDates);
    }, [Month]);

    useEffect(() => {
        setTimeout(() => {
            if (Dates.length > 0 && CalenderRef.current) {
                const indexToScroll = Dates.findIndex(d => d.isSame(selectedDate, 'day'));
                if (indexToScroll !== -1) {
                    CalenderRef.current.scrollToIndex({ index: Math.max(indexToScroll, 0), animated: true });
                }
            }
        }, 1000);

    }, [Dates]);

    return (
        <FlatList
            inverted={language === 'ar' ? true : false}
            scrollEventThrottle={16}
            ref={CalenderRef}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ marginTop: SCREEN_HEIGHT * .007 }}
            bounces={false}
            decelerationRate={'fast'}
            onScrollToIndexFailed={(err) => console.log("failed to scroll", err)}
            data={Dates}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <CalenderRenderItem
                    date={item}
                    index={index}
                    selected={item.isSame(selectedDate, 'day')}
                    onPress={() => setSelectedDate(item)}
                />
            )}
        />
    );
};

export default CalenderStrip;
