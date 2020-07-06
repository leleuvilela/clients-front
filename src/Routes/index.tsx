import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/cliente/:email" exact component={Layout} />
    </Switch>
  );
};

export default Routes;
