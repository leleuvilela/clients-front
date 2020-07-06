import React from 'react';

import { Grid } from './styles';
import AppName from '../AppName';
import ClientName from '../ClientName';
import ClientEdit from '../ClientEdit';
import UserInfo from '../UserInfo';
import ClientDetails from '../ClientDetails';
import ClientList from '../ClientList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <AppName />
      <ClientName />
      <ClientEdit />
      <UserInfo />
      <ClientDetails />
      <ClientList />
    </Grid>
  );
};

export default Layout;
