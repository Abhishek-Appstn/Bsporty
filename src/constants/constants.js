import { Dimensions } from "react-native";
import { Academy, AmericanAcademySchool, AspireAcademy, Badminton, Classes, Decathlon, DynamicSports, Football, Golf, GoSport, HealthyFood, lululemon, Membership, Padel, PersonalCoaches, QatarHandballAssociation, Shops, Sports, SportsCorner, Swimming, Taekwondo, Tennis, Tournaments, Volleyball } from "../assets/images";
const { height, width } = Dimensions.get('screen')

export const SCREENDIMENSIONS = {
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
}

export const ServiceList = [{ image: Academy, title: 'Academy' }, { image: Tournaments, title: 'Tournaments' }, { image: Membership, title: 'Membership' }, { image: PersonalCoaches, title: 'Personal Coaches' }, { image: HealthyFood, title: 'Healthy Food' }, { image: Shops, title: 'Shops' }, { image: Sports, title: 'Sports' }, { image: Classes, title: 'Classes' },]

export const BrandsList = [{ image: DynamicSports }, { image: SportsCorner }, { image: Decathlon }, { image: lululemon }, { image: AspireAcademy }, { image: AmericanAcademySchool }, { image: QatarHandballAssociation }, { image: GoSport }
]

export const SportList = [{ image: Padel, title: 'Padel' }, { image: Volleyball, title: 'Volleyball' }, { image: Football, title: 'Football' }, { image: Swimming, title: 'Swimming' }, { image: Tennis, title: 'Tennis' }, { image: Badminton, title: 'Badminton' }, { image: Golf, title: 'Golf' }, { image: Taekwondo, title: 'Taekwondo' },

]

export const EventData = [{ title: 'Activity' }, { title: 'Match' }, { title: 'Tournament' },]


