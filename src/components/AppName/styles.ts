import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;

  background-color: var(--secondary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px 0px;
  z-index: 2;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;
