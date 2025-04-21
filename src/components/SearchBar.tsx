import { View, Text, Pressable, Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { ArrowLeft, search_black, search_normal } from '../assets/images'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {}


const SearchBar = (props: Props) => {
    const SearchRef = useRef<T>()
    const [SearchText, setSearchText] = useState('')
    return (
        <Pressable style={{ flexDirection: 'row', backgroundColor: colors.Grey_bg, borderRadius: 10, paddingHorizontal: SCREEN_WIDTH * .05, paddingVertical: SCREEN_HEIGHT * .01, justifyContent: "center", alignItems: 'center' }} onPress={() => SearchRef?.current?.focus()}>
            <Image source={search_black} resizeMode='contain' style={{ height: SCREEN_HEIGHT * .017 }} />
            <TextInput style={{ flex: 1, marginHorizontal: SCREEN_WIDTH * .01 }} ref={SearchRef} value={SearchText} onChangeText={(text) => setSearchText(text)} />
        </Pressable>
    )
}
export default SearchBar
