import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  color: antiquewhite;
`;

export const Cards = styled(Card)`
  color: antiquewhite;
  background: rgba(208, 2, 27, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  span {
    color: antiquewhite;
  }
`;
