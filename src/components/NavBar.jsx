import { Nav, ItemNav, Close } from "../styles/NavBar.js";
import bank from "../assets/bank.svg";
import bell from "../assets/bell.svg";
import card from "../assets/card.svg";
import menu from "../assets/menu.svg";
import money from "../assets/money.svg";
import user from "../assets/user.svg";
import close from "../assets/close.png";

export const NavBar = ({ open, handleOpen }) => {
  return (
    <Nav open={open}>
      <Close src={close} alt="Close" onClick={handleOpen} />
      <div>
        <ItemNav>
          <img src={menu} alt="bank" />
          <span>Overview</span>
        </ItemNav>
        <ItemNav>
          <div>
            <img src={bank} alt="bank" />
            <span>Tribal Pay</span>
          </div>
        </ItemNav>
        <ItemNav>
          <img src={card} alt="bank" />
          <span>Tribal Credit</span>
        </ItemNav>
        <ItemNav>
          <img src={money} alt="bank" />
          <span>Payments</span>
        </ItemNav>
        <ItemNav>
          <img src={bell} alt="bank" />
          <span>Notfications</span>
        </ItemNav>
        <ItemNav>
          <img src={user} alt="bank" />
          <span>Users</span>
        </ItemNav>
      </div>
    </Nav>
  );
};
