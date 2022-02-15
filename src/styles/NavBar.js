import styled from "styled-components";
import { Item } from "../styles/SideBar";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 100vh;
  background: black;
  @media (max-width: 768px) {
    display: flex;
    overflow: hidden;
    overflow-y: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: ${(props) => (props.open ? "100vh" : "0")};
    transition: max-height 0.2s ease-in;
  }
`;

export const Close = styled.img`
  position: absolute;
  width: 1.5rem;
  top: 3rem;
  right: 3rem;
`;
export const ItemNav = styled(Item)`
  color: white;
`;
