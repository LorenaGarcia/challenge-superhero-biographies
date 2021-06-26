import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  padding: 2rem 4rem;
  color: #ffffff;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    gap: 1rem;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem 2rem;
    gap: 1rem;
  }
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid #333333;
  border-radius: 3px;
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;
`;

export { Container, Grid, Card, Image };
