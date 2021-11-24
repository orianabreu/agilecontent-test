import React from "react";
import { BoxContainer } from "./styles";
import faker from "faker";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Animals() {
  return (
    <Container maxWidth='lg'>
      <BoxContainer>
        <Typography variant='body1'>https://mui.com/api/typography/</Typography>
        <Typography variant='h6'>Oso Panda</Typography>
        <Typography variant='body1'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </BoxContainer>
    </Container>
  );
}
