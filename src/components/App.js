import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// components
import BasicLayout from './BasicLayout';

// pages
import Error from '../pages/error';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <Route path="/app" component={BasicLayout} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

