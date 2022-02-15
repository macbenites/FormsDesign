import { Menu, Item } from "../styles/SideBar";
import bank from "../assets/bank.svg";
import bell from "../assets/bell.svg";
import card from "../assets/card.svg";
import menu from "../assets/menu.svg";
import money from "../assets/money.svg";
import user from "../assets/user.svg";

export const SideBar = ({ open }) => {
  return (
    <Menu>
      <Item>
        <img src={menu} alt="bank" />
        <span>Overview</span>
      </Item>
      <Item>
        <div>
          <img src={bank} alt="bank" />
          <span>Tribal Pay</span>
        </div>
      </Item>
      <Item>
        <img src={card} alt="bank" />
        <span>Tribal Credit</span>
      </Item>
      <Item>
        <img src={money} alt="bank" />
        <span>Payments</span>
      </Item>
      <Item>
        <img src={bell} alt="bank" />
        <span>Notfications</span>
      </Item>
      <Item>
        <img src={user} alt="bank" />
        <span>Users</span>
      </Item>
    </Menu>
  );
};
