import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes/index.routes';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyle />
  </>
);

export default App;
