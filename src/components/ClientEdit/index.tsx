import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";

const ClientEdit: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Novo Cliente</span>
        <AddCategoryIcon />
      </Category>
    </Container>
  );
};

export default ClientEdit;
