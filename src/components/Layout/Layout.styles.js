import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
`;

const Header = styled.div`
  grid-area: header;
  background-image: linear-gradient(
    to bottom right,
    #343a54,
    #a92b37,
    #e8a33c,
    #a04e40,
    #245397
  );
`;

const Main = styled.div`
  grid-area: main;
  background-color: #000000;
`;

const Title = styled.p`
  font-family: "Viaoda Libre", cursive;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin: 1rem 0rem;
`;

export { Container, Header, Main, Title };
