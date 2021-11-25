import React, { useState } from "react";
import { BoxContainer, GoogleLogo, Input, SearchArea } from "./styles";
import { useResponsive } from "../../ResponsiveContext/ResponsiveContext";
import logo from "../../assets/images/google-logo.png";

import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchAnimal, setSearchAnimal] = useState("");
  let navigate = useNavigate();
  const isMobile = useResponsive();

  const handleChange = (event) => {
    setSearchAnimal(event.target.value);
  };

  const goToResults = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/Results");
    }
  };

  return (
    <Container maxWidth='lg'>
      <BoxContainer>
        <GoogleLogo src={logo} sx={{ width: isMobile ? "10rem" : "14rem" }} />
        <SearchArea component='form' sx={{ width: isMobile ? 250 : 500 }}>
          <IconButton sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>

          <Input
            placeholder='Search for animals'
            value={searchAnimal}
            onChange={handleChange}
            onKeyPress={goToResults}
          />
        </SearchArea>
      </BoxContainer>
    </Container>
  );
}
