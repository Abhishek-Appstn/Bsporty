import { ColorValue, Pressable, View } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useEffect } from "react"
import { SCREENDIMENSIONS } from "../constants/constants"
import { colors } from "../constants/colors"
import { flexDirection } from "../utils"

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS

const Dot = ({
    index,
    currentIndex,
    onPress
}: {
    index: number,
    currentIndex: number,
    onPress: () => void
}) => {
    const animatedStyle = useAnimatedStyle(() => {
        const isActive = index === currentIndex
        return {
            width: withTiming(
                isActive ? SCREEN_WIDTH * 0.08 : SCREEN_WIDTH * 0.02,
                { duration: 500, easing: Easing.inOut(Easing.ease) }
            ),
            backgroundColor: isActive ? colors.Primary_Green : colors.CarousalGray
        }
    })

    return (
        <Animated.View style={[{
            borderRadius: SCREEN_WIDTH * 0.1,
            height: SCREEN_HEIGHT * 0.006,
            marginHorizontal: 4
        }, animatedStyle]}>
            <Pressable
                onPress={onPress}
                style={{
                    borderRadius: SCREEN_WIDTH * 0.1,
                    height: SCREEN_HEIGHT * 0.006,
                    width: '100%',
                }}
            />
        </Animated.View>
    )
}

type SelectorProps = {
    currentIndex: number,
    setActive: (index: number) => void,
    activeColor?: ColorValue,
    totalCount: number,
    inactiveColor?: ColorValue,
    backgroundColor?: ColorValue,
    setScrollActive: (active: boolean) => void
}

const CarousalSelector: React.FC<SelectorProps> = ({
    currentIndex,
    setActive,
    totalCount = 0,
    backgroundColor,
    setScrollActive
}) => {
    return (
        <View style={[{
            backgroundColor: backgroundColor || colors.UpdateText,
            height: SCREEN_HEIGHT * 0.01,
            flexDirection: 'row',
            minWidth: SCREEN_WIDTH * 0.12,
            alignItems: 'center',
            paddingVertical: SCREEN_HEIGHT * 0.006,
            borderRadius: SCREEN_WIDTH,
            paddingHorizontal: SCREEN_WIDTH * 0.005
        }, flexDirection()]}>
            {Array.from({ length: totalCount }).map((_, index) => (
                <Dot
                    key={index}
                    index={index}
                    currentIndex={currentIndex}
                    onPress={() => {
                        setScrollActive(true)
                        setActive(index)
                        setTimeout(() => {
                            setScrollActive(false)
                        }, 500)
                    }}
                />
            ))}
        </View>
    )
}

export default CarousalSelector