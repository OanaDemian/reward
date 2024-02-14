import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import  CardMedia from "@mui/material/CardMedia";
import { RewardGiver } from "./components/RewardGiver";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Install } from "./components/Install";
import { About } from "./components/About";
import  rewardLogo from "./assets/RewardLogo.png"

export function App() {
  const [installVisible, setInstallVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  return (
    <>
      <div>
        <div style={{ width: "100%", position: "relative" }}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            
            <CardMedia
                component="img"
                alt="Variable Ratio Generator Logo"
                sx={{ height:64,  width: 64, marginTop:'4px', marginLeft:'4px'}}
                image={rewardLogo}
              />
              <Typography
                variant="h2"
                sx={{ display: "flex", justifyContent: "center", flex: "auto" }}
              >
                Variable Ratio
              </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <HamburgerMenu
                setInstallVisible={setInstallVisible}
                setAboutVisible={setAboutVisible}
              />
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
      <Install
        isVisible={installVisible}
        setInstallVisible={setInstallVisible}
      />
      <About isVisible={aboutVisible} setAboutVisible={setAboutVisible} />
    </>
  );
}
