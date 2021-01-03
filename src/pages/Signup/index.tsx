import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import {
  FiArrowLeft, FiLock, FiMail, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import logo from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup
          .string()
          .required('Nome obrigatório'),
        email: Yup
          .string()
          .email('Digite um email válido')
          .required('Email obrigatório'),
        password: Yup
          .string()
          .min(6, 'Mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="" />

        <Form onSubmit={handleSubmit} ref={formRef}>

          <Input icon={FiUser} name="name" placeholder="Nome" />

          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input type="password" icon={FiLock} name="password" placeholder="Password" />

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
