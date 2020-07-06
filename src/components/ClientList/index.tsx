import React from "react";

import { Container, Role, Client, Avatar } from "./styles";

interface ClientProps {
  nickname: string;
  selected?: boolean;
}

const ClientRow: React.FC<ClientProps> = ({ nickname, selected }) => {
  return (
    <Client className={selected ? "selected" : ""}>
      <Avatar />
      <strong>{nickname}</strong>
    </Client>
  );
};

const ClientList: React.FC = () => {
  return (
    <Container>
      <Role>Últimos Clientes</Role>
      <ClientRow nickname="Bibi" selected />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
      <ClientRow nickname="Fulano" />
    </Container>
  );
};

export default ClientList;
