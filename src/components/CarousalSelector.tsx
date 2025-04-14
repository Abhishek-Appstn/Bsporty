import { ColorValue, Pressable, Text, View } from "react-native"
import { SCREENDIMENSIONS } from "../constants/constants"
import { colors } from "../constants/colors"
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type SelectorProps = {
    currentIndex: number, setActive: Function, activeColor?: ColorValue, totalCount: number, inactiveColor?: ColorValue, backgroundColor?: ColorValue,
}
const CarousalSelector: React.FC<SelectorProps> = ({ currentIndex, setActive, totalCount, activeColor, inactiveColor, backgroundColor }) => {
    return (
        <View style={{ backgroundColor: backgroundColor ? backgroundColor : colors.UpdateText, height: SCREEN_HEIGHT * .01, flexDirection: 'row', minWidth: SCREEN_WIDTH * .12, alignItems: 'center', paddingVertical: SCREEN_HEIGHT * .006, borderRadius: SCREEN_WIDTH, paddingHorizontal: SCREEN_WIDTH * .005, }}>
            {Array.from({ length: totalCount }).map(((_, index) => (
                <Pressable onPress={() => setActive(index)} style={{ borderRadius: SCREEN_WIDTH * .1, height: SCREEN_HEIGHT * .006, width: index === currentIndex ? SCREEN_WIDTH * .06 : SCREEN_WIDTH * .024, backgroundColor: index === currentIndex ? colors.Primary_Green : colors.CarousalGray, marginHorizontal: 4 }} key={index}>
                </Pressable>
            )))}
        </View>



    )
}
export default CarousalSelector