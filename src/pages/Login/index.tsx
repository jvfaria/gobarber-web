import React from 'react';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';

import Button from '../../components/button';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  function handleSubmit(data: string): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input type="password" icon={FiLock} name="senha" placeholder="Password" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <Link to="signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};
export default Login;
