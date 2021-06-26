import React from "react";
import { Container, Grid, Card, Image } from "./GridSuperheroes.styles";

const GridSuperheroes = ({ data, checkUrlImage }) => {
  return (
    <Container>
      <Grid>
        {data &&
          data.map((val, idx) => (
            <Card key={idx}>
              <Image src={checkUrlImage(val.image.url)} alt={val.name} />
              <div>{val.name}</div>
            </Card>
          ))}
      </Grid>
    </Container>
  );
};

export { GridSuperheroes };
