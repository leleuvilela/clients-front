import React, { useState, useEffect, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Container, Category, AddCategoryIcon, ClientForm, ButtonWrapper, Button } from './styles';
import Input from '../Input';
import api from '../../services/api';
import { useHistory, useParams, useLocation } from 'react-router';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  phone: number;
  cpf: number;
}

interface Client {
  email: string;
  name: string;
  cpf: number;
  phone: number;
}

const ClientEdit: React.FC = () => {
  const history = useHistory();
  const { email } = useParams();
  const location = useLocation();
  const formRef = useRef<FormHandles>(null);
  const [client, setClient] = useState<Client>();

  const getClientInfo = async (email: string) => {
    try {
      const res = await api.get(`/clients/${email}`);
      setClient(res.data[0]);
      formRef.current?.setData(res.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (email && location.search) {
      getClientInfo(email);
    }
  }, [email, location.search]);

  const handleSubmit: SubmitHandler<FormData> = async (data: FormData, { reset }) => {
    try {
      let res;
      if (!location.search) {
        res = await api.post('/clients', data);
      } else {
        res = await api.put(`/clients/${client?.email}`, data);
      }
      history.push(`/cliente/${res.data.email}`);
      toast.success('Cliente cadastrado!');
      reset();
    } catch (e) {
      toast.error('Erro ao cadastrar cliente.');
      console.log(e);
    }
  };

  const resetData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    formRef.current?.reset();
  };

  return (
    <Container>
      <Category>
        <span>Novo Cliente</span>
        <AddCategoryIcon />
      </Category>
      <ClientForm ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          mask=""
          defaultValue={client?.email}
          disabled={location.search ? true : false}
        />
        <Input name="name" label="Nome completo" mask="" defaultValue={client?.name} />
        <Input name="cpf" label="CPF" mask="999.999.999-99" defaultValue={client?.cpf} />
        <Input name="phone" label="Telefone" mask="(99) 99999-9999" defaultValue={client?.phone} />
        <ButtonWrapper>
          <Button onClick={resetData}>Resetar</Button>
          <Button type="submit">Enviar</Button>
        </ButtonWrapper>
      </ClientForm>
    </Container>
  );
};

export default ClientEdit;
