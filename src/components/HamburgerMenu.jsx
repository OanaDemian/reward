import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState, useContext } from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { HamburgerOption } from "./HamburgerOption";
import DownloadIcon from "@mui/icons-material/Download";
import { Theme } from "./Theme";
import Box from "@mui/material/Box";


export const HamburgerMenu = ({
  setInstallVisible,
  setAboutVisible,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleHamburgerClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHamburgerClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleHamburgerClick}
      >
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleHamburgerClose}
      >
        <Box onClick={handleHamburgerClose}>
          <HamburgerOption
            setVisibility={() => {
              setAboutVisible(true);
            }}
            title="About"
            icon={<InfoIcon />}
          />
        </Box>
        <Box onClick={handleHamburgerClose}>
          <HamburgerOption
            setVisibility={() => {
              setInstallVisible(true);
            }}
            title="Install"
            icon={<DownloadIcon />}
          />
        </Box>

        <Box onClick={handleHamburgerClose}>
          <Theme />
        </Box>
      </Menu>
    </div>
  );
};
