import { Button } from "../styles/reusable";
import trash from "../assets/trash.svg";
import pen from "../assets/pen.svg";
import {
  BusinnessContent,
  Item,
  Icons,
  BusinessTitle,
} from "../styles/Business";

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
  return (
    <BusinnessContent>
      <Item>
        <BusinessTitle>Bussines</BusinessTitle>
        <Button>Create Business</Button>
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
