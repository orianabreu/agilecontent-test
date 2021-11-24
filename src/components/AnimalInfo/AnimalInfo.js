import React from "react";
import { BoxContainer } from "./styles";
import { useResponsive } from "../../ResponsiveContext/ResponsiveContext";

import Typography from "@mui/material/Typography";

export default function AnimalInfo() {
  const isMobile = useResponsive();

  return (
    <BoxContainer sx={{ width: isMobile ? "90%" : "70%" }}>
      <Typography variant='body1'>https://mui.com/api/typography/</Typography>
      <Typography variant='h5' color='primary'>
        Oso Panda
      </Typography>
      <Typography variant='body1'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
    </BoxContainer>
  );
}
