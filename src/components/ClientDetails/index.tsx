import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import { Container, Details, ButtonEdit } from './styles';
import api from '../../services/api';

interface Client {
  email: string;
  name: string;
  cpf: number;
  phone: number;
}

const ClientDetails: React.FC = () => {
  const [client, setClient] = useState<Client>();
  const { email } = useParams();
  const location = useLocation();
  const history = useHistory();

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
  }, [email, location]);

  return (
    <Container>
      <Details>
        <div className="detail">
          <strong>Email: </strong>
          <span>{client?.email}</span>
        </div>
        <div className="detail">
          <strong>CPF: </strong>
          <span>{client?.cpf}</span>
        </div>
        <div className="detail">
          <strong>Telefone: </strong>
          <span>{client?.phone}</span>
        </div>
        <div>
          <ButtonEdit onClick={() => history.push(`/cliente/${client?.email}?edit`)}>Editar</ButtonEdit>
        </div>
      </Details>
    </Container>
  );
};

export default ClientDetails;
