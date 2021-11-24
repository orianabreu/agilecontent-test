import React from "react";
import { BoxContainer, GoogleLogo, Input, SearchArea } from "./styles";
import { useResponsive } from "../../ResponsiveContext/ResponsiveContext";
import logo from "../../assets/images/google-logo.png";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const isMobile = useResponsive();

  return (
    <Container maxWidth='lg'>
      <BoxContainer>
        <GoogleLogo src={logo} sx={{ width: isMobile ? "10rem" : "14rem" }} />
        <SearchArea component='form' sx={{ width: isMobile ? 250 : 500 }}>
          <IconButton sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>
          <Input placeholder='Search for animals' />
        </SearchArea>
      </BoxContainer>
    </Container>
  );
}
