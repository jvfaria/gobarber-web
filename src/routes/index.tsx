import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Route from './Route';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/signup" component={Signup} exact />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
