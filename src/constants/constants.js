import { Dimensions } from "react-native";
import { Academy, AmericanAcademySchool, AspireAcademy, Badminton, cartImage, cartImageFilled, chatIcon, chatIconFilled, Classes, Decathlon, DynamicSports, Football, Golf, GoSport, HealthyFood, homeIcon, homeIconOutlined, lululemon, Membership, notifyIcon, notifyIconFilled, Padel, PersonalCoaches, QatarHandballAssociation, Shops, Sports, SportsCorner, Swimming, Taekwondo, Tennis, Tournaments, Volleyball } from "../assets/images";
const { height, width } = Dimensions.get('screen')

export const SCREENDIMENSIONS = {
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
}

export const ServiceList = [{ image: Academy, title: 'Academy' }, { image: Tournaments, title: 'Tournaments' }, { image: Membership, title: 'Membership' }, { image: PersonalCoaches, title: 'Personal Coaches' }, { image: HealthyFood, title: 'Healthy Food' }, { image: Shops, title: 'Shops' }, { image: Sports, title: 'Sports' }, { image: Classes, title: 'Classes' },]

export const BrandsList = [{ image: DynamicSports }, { image: SportsCorner }, { image: Decathlon }, { image: lululemon }, { image: AspireAcademy }, { image: AmericanAcademySchool }, { image: QatarHandballAssociation }, { image: GoSport }
]

export const SportList = [{ image: Padel, title: 'Padel', type: 'Activity' }, { image: Volleyball, title: 'Volleyball', type: 'Activity' }, { image: Football, title: 'Football', type: 'Match' }, { image: Swimming, title: 'Swimming', type: 'Activity' }, { image: Tennis, title: 'Tennis', type: 'Match' }, { image: Badminton, title: 'Badminton', type: 'Tournament' }, { image: Golf, title: 'Golf', type: 'Activity' }, { image: Taekwondo, title: 'Taekwondo', type: 'Tournament' },

]

export const EventData = [{ title: 'Activity' }, { title: 'Match' }, { title: 'Tournament' },]

export const BottomTabData = [
    {
        icon_outline: homeIconOutlined,
        icon_filled: homeIcon, name: 'home'
    }, {
        icon_outline: cartImage,
        icon_filled: cartImageFilled, name: 'cart'
    }, {
        icon_outline: chatIcon,
        icon_filled: chatIconFilled, name: 'chat'
    },
    {
        icon_outline: notifyIcon,
        icon_filled: notifyIconFilled, name: 'notification'
    },

]


