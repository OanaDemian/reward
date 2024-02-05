import { useContext, useState, useMemo } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { RewardGiver } from "./components/RewardGiver";
import { HamburgerMenu } from "./components/HamburgerMenu";
import {Install} from "./components/Install"

export function App() {
  const theme = useTheme();
  const [installVisible, setInstallVisible] = useState(false)

  const showInstallInstructions = () => {
    setInstallVisible(true)
  }
  
  const hideInstallInstruction = () => {
    setInstallVisible(false)
  }

  return (
    <>
      <div>
        <div style={{ width: "100%", position: "relative" }}>
          <Box
            sx={
              {
                display: 'flex',  
              }
            }
          >
              <ThemeProvider theme={theme}>
                <Typography
                variant="h2"
                // component="h2"
                sx={{ display: "flex", justifyContent: "center", flex: "auto" }}
                >
                  Variable Ratio Generator
                </Typography>
              </ThemeProvider>
            <Box sx={{ marginLeft: 'auto' }}>
              {/* <Button
                variant="outlined"
                aria-label={theme.palette.mode}
                sx={{
                  mr: 1,
                  mt: 1,
                  position: "absolute",
                  right: "100%",
                  transform: "translate(100vw, 0)",
                  padding: "5px",
                  minWidth: "0",
                }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness7Icon />
                )}
              </Button> */}
              <HamburgerMenu showInstallInstructions={showInstallInstructions} />
            </Box>
          </Box>
        </div>
        <Divider></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            ml: "auto",
            mr: "auto",
            borderRadius: 1,
            p: 3,
          }}
        >
          <Stack spacing={10}>
            <Stack direction="row"></Stack>
            <RewardGiver />
          </Stack>
        </Box>
      </div>
      <Install isVisible={installVisible} closeInstallInstructions={hideInstallInstruction} />

    </>
  );
}
