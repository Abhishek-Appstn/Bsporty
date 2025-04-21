import { Dimensions } from "react-native";
import { Academy, AmericanAcademySchool, AspireAcademy, Badminton, cartImage, cartImageFilled, chatIcon, chatIconFilled, Classes, Club1, Club2, Club3, Club4, Club5, Decathlon, dummyTennis, dummyVolleyball, DynamicSports, Football, Golf, GoSport, HealthyFood, homeIcon, homeIconOutlined, lululemon, Membership, notifyIcon, notifyIconFilled, Padel, PersonalCoaches, QatarHandballAssociation, Shops, Sports, SportsCorner, Swimming, Taekwondo, Tennis, Tournaments, Volleyball } from "../assets/images";
const { height, width } = Dimensions.get('screen')

export const SCREENDIMENSIONS = {
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
}

export const ServiceList = [{ image: Academy, title: 'Academy' }, { image: Tournaments, title: 'Tournaments' }, { image: Membership, title: 'Membership' }, { image: PersonalCoaches, title: 'Personal_Coach' }, { image: HealthyFood, title: 'Healthy Food' }, { image: Shops, title: 'Shops' }, { image: Sports, title: 'Sports' }, { image: Classes, title: 'Classes' },]

export const BrandsList = [{ image: DynamicSports }, { image: SportsCorner }, { image: Decathlon }, { image: lululemon }, { image: AspireAcademy }, { image: AmericanAcademySchool }, { image: QatarHandballAssociation }, { image: GoSport }, { image: DynamicSports }, { image: SportsCorner }, { image: Decathlon }, { image: lululemon }, { image: AspireAcademy }, { image: AmericanAcademySchool }, { image: QatarHandballAssociation }, { image: GoSport }, { image: DynamicSports }, { image: SportsCorner }, { image: Decathlon }, { image: lululemon }, { image: AspireAcademy }, { image: AmericanAcademySchool }, { image: QatarHandballAssociation }, { image: GoSport }
]

export const SportList = [{ image: Padel, title: 'paddle', type: 'Activity' }, { image: Volleyball, title: 'Volleyball', type: 'Activity' }, { image: Football, title: 'Football', type: 'Match' }, { image: Swimming, title: 'Swimming', type: 'Activity' }, { image: Tennis, title: 'Tennis', type: 'Match' }, { image: Badminton, title: 'Badminton', type: 'Tournament' }, { image: Golf, title: 'Golf', type: 'Activity' }, { image: Taekwondo, title: 'Taekwondo', type: 'Tournament' },

]

export const EventData = [{ title: 'Activity' }, { title: 'Match' }, { title: 'Tournament' },]
export const SearchData = [
    { title: 'Paddle Mixed Game', eventType: 'activity', image: dummyVolleyball, time: '10:00 AM', eventLocation: 'indoor', organiser: 'Al-Hassan Club', eventSport: 'paddle' },
    { title: 'Tennis', eventType: 'match', image: dummyTennis, time: '12:00 PM', eventLocation: 'indoor', organiser: 'Al-Harame Club', eventSport: 'tennis' },
    { title: 'Volley ball', eventType: 'activity', image: dummyVolleyball, time: '2:00 PM', eventLocation: 'outdoor', organiser: 'Al-Shukran Club', eventSport: 'volleyball' },
    { title: 'Paddle Mixed Game', eventType: 'tournament', image: dummyVolleyball, time: '10:00 AM', eventLocation: 'indoor', organiser: 'Devils Club', eventSport: 'Paddle' },
    { title: 'Tennis', eventType: 'match', image: dummyTennis, time: '12:00 PM', eventLocation: 'outdoor', organiser: 'Al-Federer Club', eventSport: 'Tennis' },
    { title: 'Volley ball', eventType: 'activity', image: dummyVolleyball, time: '2:00 PM', eventLocation: 'outdoor', organiser: 'Al-Emerathi Club', eventSport: 'volleyball' },
]
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

export const Clubs = [{ clubImage: Club2, clubName: 'Al-Ahli Sports Club', clubLocation: "Al sadd, Al Nazr", clubDistance: 3 },
{ clubImage: Club1, clubName: 'El-Jaish Sports Club', clubLocation: "Al sadd, Al Nazr", clubDistance: 3 },
{ clubImage: Club3, clubName: 'Al-Duhail Soccer Club', clubLocation: "Al sadd, Al Nazr", clubDistance: 3 },
{ clubImage: Club4, clubName: 'Al-Wakrah Sports Club', clubLocation: "Al sadd, Al Nazr", clubDistance: 3 },
{ clubImage: Club5, clubName: 'Al-Sadd SC', clubLocation: "Al sadd, Al Nazr" },
]

export const MatchFilterData = [
    { title: 'Private Friendly Match' },
    { title: 'Public Friendly Match' }
]
