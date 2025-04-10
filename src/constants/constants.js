import { Dimensions } from "react-native";
import { Academy, AmericanAcademySchool, AspireAcademy, Classes, Decathlon, DynamicSports, GoSport, HealthyFood, lululemon, Membership, PersonalCoaches, QatarHandballAssociation, Shops, Sports, SportsCorner, Tournaments } from "../assets/images";
const { height, width } = Dimensions.get('screen')

export const SCREENDIMENSIONS = {
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
}

export const ServiceList = [{ image: Academy, title: 'Academy' }, { image: Tournaments, title: 'Tournaments' }, { image: Membership, title: 'Membership' }, { image: PersonalCoaches, title: 'Personal Coaches' }, { image: HealthyFood, title: 'Healthy Food' }, { image: Shops, title: 'Shops' }, { image: Sports, title: 'Sports' }, { image: Classes, title: 'Classes' },]

export const BrandsList = [{ image: DynamicSports }, { image: SportsCorner }, { image: Decathlon }, { image: lululemon }, { image: AspireAcademy }, { image: AmericanAcademySchool }, { image: QatarHandballAssociation }, { image: GoSport }
]
