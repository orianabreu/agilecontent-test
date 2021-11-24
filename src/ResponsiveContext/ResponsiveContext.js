import React, { useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ResponsiveContext = React.createContext();

export const useResponsive = () => {
  return useContext(ResponsiveContext);
};

export function ResponsiveProvider({ children }) {
  const isMobile = useMediaQuery("(max-width:484px)");

  return (
    <ResponsiveContext.Provider value={isMobile}>
      {children}
    </ResponsiveContext.Provider>
  );
}
