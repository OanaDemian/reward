import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { HamburgerOption } from "./HamburgerOption";
import DownloadIcon from "@mui/icons-material/Download";
import { ThemeColorToggle } from "./ThemeColorToggle";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

export const HamburgerMenu = ({ setInstallVisible, setAboutVisible }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleHamburgerClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHamburgerClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleHamburgerClick}
        fontSize="large"
      >
        {open ? (
          <MenuOpenIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
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
          <ThemeColorToggle />
        </Box>
      </Menu>
    </Box>
  );
};

HamburgerMenu.propTypes = {
  setInstallVisible: PropTypes.func,
  setAboutVisible: PropTypes.func,
};
