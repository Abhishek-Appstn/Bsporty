import { ColorValue, Pressable, Text, View } from "react-native"
import { SCREENDIMENSIONS } from "../constants/constants"
import { colors } from "../constants/colors"
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useEffect } from "react"

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

type SelectorProps = {
    currentIndex: number,
    setActive: Function,
    activeColor?: ColorValue,
    totalCount: number,
    inactiveColor?: ColorValue,
    backgroundColor?: ColorValue,
    setScrollActive: () => void
}

const CarousalSelector: React.FC<SelectorProps> = ({ currentIndex, setActive, totalCount, activeColor, inactiveColor, backgroundColor, setScrollActive }) => {
    const animatedIndex = useSharedValue(currentIndex)

    useEffect(() => {
        animatedIndex.value = withTiming(currentIndex, { easing: Easing.inOut(Easing.ease) })
    }, [currentIndex])

    return (
        <View style={{
            backgroundColor: backgroundColor || colors.UpdateText,
            height: SCREEN_HEIGHT * 0.01,
            flexDirection: 'row',
            minWidth: SCREEN_WIDTH * 0.12,
            alignItems: 'center',
            paddingVertical: SCREEN_HEIGHT * 0.006,
            borderRadius: SCREEN_WIDTH,
            paddingHorizontal: SCREEN_WIDTH * 0.005
        }}>
            {Array.from({ length: totalCount }).map((_, index) => {
                const animatedStyle = useAnimatedStyle(() => {
                    return {
                        width: withTiming(
                            index === currentIndex ? SCREEN_WIDTH * 0.08 : SCREEN_WIDTH * 0.02,
                            { duration: 500, easing: Easing.inOut(Easing.ease) }
                        )
                    }
                })

                return (
                    <Animated.View key={index} style={[{
                        borderRadius: SCREEN_WIDTH * 0.1,
                        height: SCREEN_HEIGHT * 0.006,
                        backgroundColor: index === currentIndex ? colors.Primary_Green : colors.CarousalGray,
                        marginHorizontal: 4
                    }, animatedStyle]}>
                        <Pressable onPress={() => {
                            setScrollActive(true)
                            setActive(index)
                            setTimeout(() => {
                                setScrollActive(false)
                            }, 500)
                        }} style={{
                            borderRadius: SCREEN_WIDTH * 0.1,
                            height: SCREEN_HEIGHT * 0.006,
                            width: SCREEN_WIDTH * 0.02,
                            backgroundColor: index === currentIndex ? colors.Primary_Green : colors.CarousalGray,
                            marginHorizontal: 4
                        }}>
                        </Pressable>
                    </Animated.View>
                )
            })}
        </View>
    )
}

export default CarousalSelector
