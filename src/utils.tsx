import { useSelector } from "react-redux";
import translations from './assets/transalation.json';

const useCurrentLanguage = (): string => {
    return useSelector((state: { language?: { value: string } }) => state?.language?.value || "en");
};

const languagetocheck = "ar";

type StyleKey = "flexDirection" | "alignSelf" | "alignItems" | "textAlign" | "justifyContent" | "scaleX";
type StyleValue = string | number;

const getStyle = (key: StyleKey, value: StyleValue): Record<string, any> => {
    return key === "scaleX"
        ? { transform: [{ [key]: value }] }
        : { [key]: value };
};

export const flexDirection = (): Record<string, any> => {
    const language = useCurrentLanguage();
    return language === languagetocheck ? getStyle("flexDirection", "row-reverse") : {};
};

export const arrowflexDirection = (): Record<string, any> => {
    const language = useCurrentLanguage();
    return language === languagetocheck ? getStyle("flexDirection", "column-reverse") : {};
};

export const alignSelf = (): Record<string, any> => {
    const language = useCurrentLanguage();
    return language === languagetocheck ? getStyle("alignSelf", "flex-end") : {};
};

export const alignItems = (): Record<string, any> => {
    const language = useCurrentLanguage();
    return language === languagetocheck ? getStyle("alignItems", "flex-end") : {};
};

export const textAlign = (): Record<string, any> => {
    const language = useCurrentLanguage();
    return language === languagetocheck ? getStyle("textAlign", "right") : {};
};

export const justifyContent = (): Record<string, any> => {
    const language = useCurrentLanguage();
    return language === languagetocheck ? getStyle("justifyContent", "flex-end") : {};
};

export const ImageTransform = (): Record<string, any> => {
    const language = useCurrentLanguage();
    return language === languagetocheck ? getStyle("scaleX", -1) : {};
};

export const localizer = (key: string): string => {
    const language = useCurrentLanguage();
    return translations[language]?.[key.toLowerCase()] || key;
};
