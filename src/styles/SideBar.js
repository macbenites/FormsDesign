import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--label-input);
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  span {
    margin-left: 1rem;
  }

  &:hover {
    span {
      color: var(--title);
    }
  }
`;
