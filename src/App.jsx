import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { RewardGiver } from "./components/RewardGiver";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Install } from "./components/Install";
import { About } from "./components/About";

export function App() {
  const [installVisible, setInstallVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  return (
    <>
      {/* <div> */}
        <div style={{ width: "100%", position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              padding: "8px"
            }}
          >
              <Typography
              variant="h2"
              component="h1"
                sx={{ display: "flex", flex: "auto", fontWeight:"bold" }}
              >
                Variable Ratio
              </Typography>
              <HamburgerMenu
                setInstallVisible={setInstallVisible}
                setAboutVisible={setAboutVisible}
              />
          </Box>
        </div>
        <Divider></Divider>
        <RewardGiver />
      {/* </div> */}
      <Install
        isVisible={installVisible}
        setInstallVisible={setInstallVisible}
      />
      <About isVisible={aboutVisible} setAboutVisible={setAboutVisible} />
    </>
  );
}
