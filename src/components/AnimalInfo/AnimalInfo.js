import React from "react";
import data from "../data/data";
import { BoxContainer } from "./styles";
import { useResponsive } from "../../ResponsiveContext/ResponsiveContext";

import Typography from "@mui/material/Typography";

export default function AnimalInfo() {
  const isMobile = useResponsive();

  return (
    <BoxContainer sx={{ width: isMobile ? "90%" : "70%" }}>
      <Typography variant='body1'>{data.url}</Typography>
      <Typography variant='h5' color='primary'>
        {data.title}
      </Typography>
      <Typography variant='body1'>{data.description}</Typography>
    </BoxContainer>
  );
}
