import React from "react";
import { BoxContainer } from "./styles";
import AnimalInfo from "../AnimalInfo/AnimalInfo";
import faker from "faker";
import Container from "@mui/material/Container";

export default function Animals() {
  return (
    <Container maxWidth='lg'>
      <BoxContainer>
        <AnimalInfo />
        <AnimalInfo />
        <AnimalInfo />
      </BoxContainer>
    </Container>
  );
}
