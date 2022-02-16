import { Button } from "../styles/reusable";
import trash from "../assets/trash.svg";
import pen from "../assets/pen.svg";
import { useTranslation } from "react-i18next";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import {
  BusinnessContent,
  Item,
  Icons,
  BusinessTitle,
} from "../styles/Business";

const translationEs = { Business: "Negocios" };
const translationEn = { Business: "Business" };

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    es: {
      translation: translationEs,
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export const content = [
  "Pizza Hut",
  "MasterCard",
  "Louis Vuitton",
  "Bank of America",
  "Guillette",
  "McDonalds",
  "Apple",
  "The Walt Disney Company",
];

export const Business = () => {
  const [t, i18n] = useTranslation();

  return (
    <BusinnessContent>
      <Item>
        <BusinessTitle>{t("Business")}</BusinessTitle>
        <Button onClick={() => i18n.changeLanguage("en")}>Business</Button>
        <Button onClick={() => i18n.changeLanguage("es")}>Negocios</Button>
      </Item>
      <div>
        {content.map((item, index) => (
          <ItemBusiness content={item} key={index} />
        ))}
      </div>
    </BusinnessContent>
  );
};

const ItemBusiness = ({ content }) => {
  return (
    <Item>
      <div>{content}</div>
      <Icons>
        <img src={trash} alt="trash" />
        <img src={pen} alt="pen" />
      </Icons>
    </Item>
  );
};
