import React from "react";
import { Container, Header, Main, Title } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Title>Superhero Biographies</Title>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

export { Layout };
