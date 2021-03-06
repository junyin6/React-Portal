import styled from "styled-components";
import { elevation, transition, colors } from "Utilities";

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${colors.black} ${elevation[3]};
  ${transition({
    property: "box-shadow",
  })};
  &:hover {
    ${elevation[5]}
  }
`;
