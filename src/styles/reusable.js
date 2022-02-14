import styled, { css } from "styled-components";

export const Input = styled.input`
  background-color: var(--button-secondary-color);
  border: none;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.75rem;
  width: -webkit-fill-available;
  border-style: none;
  height: auto;
  outline: none;
  font-size: 1rem;
  color: var(--text-color);

  ::placeholder {
    color: var(--title);
    font-weight: 600;
  }
`;

export const Button = styled.button`
  appearance: none;
  border-radius: 1.5rem;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 2.25rem;
  min-width: 0;
  outline: none;
  padding: 1rem 1.5rem;
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  ${(props) => {
    switch (props.mode) {
      case "danger":
        return css`
          background-color: var(--backgroud-danger);
          color: var(--text-danger);
        `;
      case "secondary":
        return css`
          background-color: var(--button-secondary-color);
          color: var(--button-color);
        `;
      default:
        return css`
          background-color: var(--button-color);
          color: var(--base-color);
        `;
    }
  }}

  :disabled {
    pointer-events: none;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const Title = styled.h4`
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  color: var(--label-input);
  margin-bottom: 1rem;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Card = styled.div`
  border-radius: 2rem;
  background-color: var(--base-color);
  max-width: 500px;
  margin: 1rem auto;
  padding: 1rem 2rem;
`;

export const Field = styled.div`
  margin: 2rem 0;
`;
