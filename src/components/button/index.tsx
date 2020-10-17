import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container type="button" {...props}>
    {children}
  </Container>
);

export default Button;
