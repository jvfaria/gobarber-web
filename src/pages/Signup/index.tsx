import React from 'react';

import {
  FiArrowLeft, FiLock, FiMail, FiUser,
} from 'react-icons/fi';

import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import logo from '../../assets/logo.svg';

const Signup: React.FC = () => {
  function handleSubmit(data: string): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="" />

        <Form onSubmit={handleSubmit}>

          <Input icon={FiUser} name="name" placeholder="Nome" />

          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input type="password" icon={FiLock} name="senha" placeholder="Password" />

          <Button type="submit">Cadastrar</Button>

        </Form>

        <Link to="login">
          <FiArrowLeft />
          Voltar para login
        </Link>
      </Content>

    </Container>
  );
};
export default Signup;
