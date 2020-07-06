import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 10px 0;

  label {
    color: var(--white);
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 44px;
    margin-top: 5px;
    padding: 0 10px;
    border-radius: 7px;
    color: var(--white);
    background-color: var(--chat-input);
    position: relative;

    &::placeholder {
      color: var(--gray);
    }
  }
`;
