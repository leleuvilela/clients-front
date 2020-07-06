import React, { useState, useEffect } from 'react';

import { Container, PersonIcon, Title, Separator, Description } from './styles';
import { useParams } from 'react-router';
import api from '../../services/api';

interface Client {
  email: string;
  name: string;
  cpf: number;
  phone: number;
}

const ClientName: React.FC = () => {
  const [client, setClient] = useState<Client>();
  const { email } = useParams();

  const getClientInfo = async (email: string) => {
    try {
      const res = await api.get(`/clients/${email}`);
      setClient(res.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (email) getClientInfo(email);
  }, [email]);

  return (
    <Container>
      <PersonIcon />

      <Title>{client?.name}</Title>

      <Separator />

      <Description>{client?.email}</Description>
    </Container>
  );
};

export default ClientName;
