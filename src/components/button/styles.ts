import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  & {
    width: 100%;
    height: 56px;
    background-color: #ff9000;
    border: 0;
    color: #312e38;
    border-radius: 10px;
    margin-top: 16px;
    font-weight: 500;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }
  }
`;
