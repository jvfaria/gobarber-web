import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
