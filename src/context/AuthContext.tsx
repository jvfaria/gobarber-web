import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface AuthContextData {
  name: string;
  login(credentials: LoginCredentials): Promise<void>;
}
interface LoginCredentials {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(async ({ email, password }): Promise<void> => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'João', login }}>
      {children}

    </AuthContext.Provider>
  );
};
