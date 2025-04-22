import { FlatList, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import { flexDirection, localizer, textAlign } from '../utils'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = { icon?: ImageSourcePropType, title: string, selected: boolean, onPress: () => void, maxwidth?: number,type:String }

const ActivityIcon: React.FC<Props> = ({ icon, title, selected, onPress, maxwidth,type }) => {
    return (
        type?.toLocaleLowerCase()=='vertical'?
        <Pressable onPress={onPress} style={[{alignItems:'center',justifyContent:'center',marginHorizontal:SCREEN_WIDTH*.015,height: SCREEN_HEIGHT * .13 }, flexDirection()]} >
            <View style={{marginBottom:SCREEN_HEIGHT*.01, height: SCREEN_HEIGHT * .075, width: SCREEN_HEIGHT * .075, borderRadius: SCREEN_HEIGHT, backgroundColor: selected? colors.Text_White:colors.Grey_bg, alignItems: 'center', justifyContent: 'center',borderColor:colors.Primary_Green,borderWidth:selected?2:0 }}>
                <Image source={icon} resizeMode='contain' style={{height: SCREEN_HEIGHT * .05, width: SCREEN_HEIGHT * .05,}} />
            </View>
            <Text style={[{ fontSize: 12, fontWeight: '400', flex: 1, marginHorizontal: SCREEN_WIDTH * .01, color: selected ? colors.Text_White : colors.Text }, textAlign()]}>{localizer(title)}</Text>
        </Pressable>

        :<Pressable onPress={onPress} style={[{ backgroundColor: selected ? colors.Primary_Green : colors.Grey_bg, height: SCREEN_HEIGHT * .045, alignItems: 'center', justifyContent: 'space-between', borderRadius: SCREEN_WIDTH, marginHorizontal: SCREEN_WIDTH * .015, flexDirection: 'row', flex: 1, overflow: 'hidden', paddingVertical: SCREEN_HEIGHT * .01, paddingHorizontal: SCREEN_WIDTH * .005, minWidth: SCREEN_WIDTH * .2, maxWidth: maxwidth }, flexDirection()]} >
        <View style={{ height: SCREEN_HEIGHT * .04, width: SCREEN_HEIGHT * .04, borderRadius: SCREEN_HEIGHT, backgroundColor: colors.Text_White, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={icon} resizeMode='contain' />
        </View>
        <Text style={[{ fontSize: 12, fontWeight: '400', flex: 1, marginHorizontal: SCREEN_WIDTH * .01, color: selected ? colors.Text_White : colors.Text }, textAlign()]}>{localizer(title)}</Text>
    </Pressable>

        
    )


}

export default ActivityIcon
