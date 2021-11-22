import React from "react";
import { FooterContainer } from "./styles";

import Typography from "@mui/material/Typography";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <Typography variant='body1' sx={{ marginLeft: "1.5rem" }}>
        ⓒ Oriana Abreu {year}
      </Typography>
      <Typography variant='body1' sx={{ marginRight: "1.5rem" }}>
        version: 0.1.0
      </Typography>
    </FooterContainer>
  );
}
