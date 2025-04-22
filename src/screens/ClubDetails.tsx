import { View, Text, SafeAreaView, Image, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import ServiceHeader from '../components/ServiceHeader'
import { ArrowLeft, ArrowRight, chevronDown, Stadium } from '../assets/images'
import { SCREENDIMENSIONS, SportList } from '../constants/constants'
import ImageCarousal from '../components/ImageCarousal'
import ItemList from '../components/ItemList'
import ActivityIcon from '../components/ActivityIcon'
import { localizer } from '../utils'
import { SportEventType } from '../components/FilterData'
import { CalenderStrip } from '../components'

const {SCREEN_HEIGHT,SCREEN_WIDTH}=SCREENDIMENSIONS
type Props = {}

const ClubDetails = (props: Props) => {
    const [Gender, setGender] = useState('male')
  return (
    <View style={{backgroundColor:colors.Surface_light,flex:1}}>
        <SafeAreaView style={{marginHorizontal:SCREEN_WIDTH*.05,flex:1}}>
            <ServiceHeader leftIcon={ArrowLeft}/>
<ImageCarousal images={[Stadium,Stadium,Stadium]}/>
<View style={{flexDirection:'row',height:SCREEN_HEIGHT*.15,justifyContent:'center',alignItems:'center'}}>
    <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
<View>
<Text>diuhcihcd</Text>
<Text>diuhcihcd</Text>
</View>

    <Image source={chevronDown}/>
    </View>
    <Pressable style={{height:SCREEN_HEIGHT*.02,backgroundColor:'red',flex:1}}>
        <Text>dsbfksdhb</Text>
    </Pressable>
</View>
<View>

<Text style={{color:colors.Text,opacity:0.4,fontWeight:'500'}}>{localizer("Sports")}</Text>
<FlatList
                horizontal
                bounces={false}
                // inverted={language === 'ar' ? true : false}
                showsHorizontalScrollIndicator={false}
                data={SportList}
                renderItem={(item) => (
                    <ActivityIcon
                        title={item.item.title}
                        icon={item.item.image}
                        type={'vertical'}
                    />
                )}
            />
</View>
            <View style={{}}>
<Text style={{color:colors.Text,opacity:0.4,fontWeight:'500'}}>{localizer("Gender")}</Text>
<SportEventType Data={['Male','Female',"Mixed"]} activefilter={Gender} setactivefilter={setGender} />
<CalenderStrip />
                </View>
      </SafeAreaView>

   </View>
  )
}

export default ClubDetails