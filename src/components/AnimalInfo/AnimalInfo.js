import React from "react";
import { BoxContainer } from "./styles";
import { useResponsive } from "../../ResponsiveContext/ResponsiveContext";

import Typography from "@mui/material/Typography";

export default function AnimalInfo(props) {
  const isMobile = useResponsive();

  return (
    <BoxContainer sx={{ width: isMobile ? "90%" : "70%" }}>
      <Typography variant='body1'>{props.url}</Typography>
      <Typography variant='h5' color='primary'>
        {props.animal}
      </Typography>
      <Typography variant='body1'>{props.text}</Typography>
    </BoxContainer>
  );
}
