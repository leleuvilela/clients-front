import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ClientDetails: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div !== null && div !== undefined) {
      div.scrollTop = div.scrollHeight;
    }
  });

  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default ClientDetails;
