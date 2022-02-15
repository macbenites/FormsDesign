import styled from "styled-components";
import { Title } from "./reusable";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const BusinnessContent = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const BusinessTitle = styled(Title)`
  font-size: 1.5rem;
  margin: 0;
`;

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;
