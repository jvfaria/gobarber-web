import React, { useCallback, useRef } from 'react';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';

import Button from '../../components/button';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string()
          .required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(
        errors,
      );
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input type="password" icon={FiLock} name="password" placeholder="Password" />

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
