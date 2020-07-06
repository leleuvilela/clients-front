import React from "react";

import { Container, PersonIcon, Title, Separator, Description } from "./styles";

const ClientName: React.FC = () => {
  return (
    <Container>
      <PersonIcon />

      <Title>Vinícius Vilela Nunes</Title>

      <Separator />

      <Description>viniciusvilela19@gmail.com</Description>
    </Container>
  );
};

export default ClientName;
