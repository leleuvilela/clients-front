import React, { useState, useEffect } from 'react';

import { Container, Role, Client, Avatar } from './styles';
import api from '../../services/api';
import { Link, useLocation, useParams } from 'react-router-dom';

interface ClientProps {
  nickname: string;
  selected?: boolean;
}

interface Client {
  email: string;
  name: string;
  cpf: number;
  phone: number;
}

const ClientRow: React.FC<ClientProps> = ({ nickname, selected }) => {
  return (
    <Client className={selected ? 'selected' : ''}>
      <Avatar />
      <strong>{nickname}</strong>
    </Client>
  );
};

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<[Client]>();
  const location = useLocation();
  const { email } = useParams();

  const getClients = async () => {
    try {
      const res = await api.get('clients');
      setClients(res.data);
    } catch (e) {
      console.log(e);
      alert('Erro ao listar clientes');
    }
  };

  useEffect(() => {
    getClients();
  }, [location]);

  return (
    <Container>
      <Role>Últimos Clientes</Role>
      {clients?.map((client) => (
        <Link to={`/cliente/${client.email}`}>
          <ClientRow nickname={client.name} selected={client.email === email ? true : false} />
        </Link>
      ))}
    </Container>
  );
};

export default ClientList;
