import styled from "styled-components";
import { Person } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CN;

  display: flex;
  align-items: center;

  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px 0px;

  z-index: 2;
`;

export const PersonIcon = styled(Person)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 16px;

  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background: var(--white);
  opacity: 0.2;
  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;
