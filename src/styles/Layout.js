import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;
export const Burger = styled.img`
  width: 1.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;
