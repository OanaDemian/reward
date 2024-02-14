import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { App } from "./App"
import { ColorModeContext } from "./contexts/ColorModeContext";
import { toggleColorMode } from "./utils/toggleColorMode";

export const AppTheme = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => toggleColorMode(prevMode));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode: mode, toggleColorMode: colorMode.toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
     </ColorModeContext.Provider>
  );
};
