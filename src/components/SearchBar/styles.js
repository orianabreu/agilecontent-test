import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

export const BoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const Input = styled(InputBase)({
  flex: 1,
  ml: 1,
  borderRadius: "50px",
});

export const SearchArea = styled(Paper)({
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  borderRadius: "50px",
});

export const GoogleLogo = styled("img")({
  marginBottom: "1.5rem",
});
