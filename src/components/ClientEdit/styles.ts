import styled from "styled-components";
import { Add } from "styled-icons/material";
import { Form } from "@unform/web";

export const Container = styled.div`
  grid-area: CE;

  display: flex;
  flex-direction: column;

  padding: 24px 16px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;

    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;
`;

export const ClientForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: rgb(67, 181, 129);
  color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 8px;
  font-size: 15px;
  font-weight: 500;
`;
