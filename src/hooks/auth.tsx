import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface AuthContextData {
  user: object;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}
interface LoginCredentials {
  email: string;
  password: string;
}
interface AuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }): Promise<void> => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logout = useCallback((): void => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}

    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
