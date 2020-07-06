import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--quaternary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .detail {
    display: flex;
    color: var(--white);
    margin: 10px 0;
  }
`;

export const ButtonEdit = styled.button`
  background-color: var(--link);
  color: var(--white);
  border-radius: 4px;
  padding: 8px;
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
`;
