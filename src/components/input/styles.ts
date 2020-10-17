import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  hasText: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;
    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #f4ede8;
  }
  svg {
    margin-right: 16px;
    color: #666360;
  }
  input::placeholder {
    width: 51px;
    height: 21px;
    color: #666360;
  }

  ${props => props.isFocused && css`
    svg{
      color: #ff9000;
    }
    border-color: #ff9000;
  `
}
  ${props => props.hasText && css`
    svg{
      color: #ff9000;
    }
  `}
`;
