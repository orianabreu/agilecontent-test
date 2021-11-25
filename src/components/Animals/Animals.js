import React from "react";
import { BoxContainer } from "./styles";
import AnimalInfo from "../AnimalInfo/AnimalInfo";
import Container from "@mui/material/Container";

export default function Animals() {
  return (
    <Container maxWidth='lg'>
      <BoxContainer>
        <AnimalInfo />
      </BoxContainer>
    </Container>
  );
}
