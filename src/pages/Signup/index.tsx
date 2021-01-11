import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';

import {
  FiArrowLeft, FiLock, FiMail, FiUser,
} from 'react-icons/fi';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';

import {
  Container, Content, Background, AnimationContainer,
} from './styles';

import Input from '../../components/input';

import { useToast } from '../../hooks/toast';

import Button from '../../components/button';

import logo from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(async (data: UserProps) => {
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

      await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      history.push('/login');

      addToast({
        title: 'Cadastro realizado !',
        description: 'Você já pode fazer o seu login no GoBarber !',
        type: 'success',
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);

      addToast({
        title: 'Erro ao realizar cadastro !',
        description: 'Ocorreu um erro ao realizar cadastro, tente novamente !',
        type: 'error',
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>

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
        </AnimationContainer>

      </Content>

    </Container>
  );
};
export default Signup;
