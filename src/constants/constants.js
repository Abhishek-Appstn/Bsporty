import { Dimensions } from "react-native";
import { Academy, Classes, HealthyFood, Membership, PersonalCoaches, Shops, Sports, Tournaments } from "../assets/images";
const { height, width } = Dimensions.get('screen')

export const SCREENDIMENSIONS = {
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
}

export const ServiceList = [{ image: Academy, title: 'Academy' }, { image: Tournaments, title: 'Tournaments' }, { image: Membership, title: 'Membership' }, { image: PersonalCoaches, title: 'Personal Coaches' }, { image: HealthyFood, title: 'Healthy Food' }, { image: Shops, title: 'Shops' }, { image: Sports, title: 'Sports' }, { image: Classes, title: 'Classes' },]