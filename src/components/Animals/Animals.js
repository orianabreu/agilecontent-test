import React from "react";
import { BoxContainer } from "./styles";
import AnimalInfo from "../AnimalInfo/AnimalInfo";
import faker from "faker";
import Container from "@mui/material/Container";

export default function Animals({ searchAnimal }) {
  const getType = () => faker.animal.type();
  const getUrl = () => faker.internet.url();
  const getTitle = (type) => faker.animal[type]();
  const getText = () => faker.lorem.sentences();

  return (
    <Container maxWidth='lg'>
      <BoxContainer>
        {[...new Array(5)].map((id) => {
          return getType === searchAnimal ? (
            <AnimalInfo
              type
              key={id}
              id={id}
              url={getUrl}
              animal={getTitle}
              text={getText}
            />
          ) : (
            <h1>Error</h1>
          );
        })}
      </BoxContainer>
    </Container>
  );
}
