import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { HamburgerOption } from "./HamburgerOption";
import DownloadIcon from "@mui/icons-material/Download";
import { Theme } from "./Theme";
export const HamburgerMenu = ({
  setInstallVisible,
  setAboutVisible,
  setColorModeVisible,
  setVisibility,
  title,
  icon,
  theme,
  colorMode,
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
        <MenuIcon />
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
        <HamburgerOption
          setVisibility={() => {
            setAboutVisible(true);
          }}
          title="About"
          icon={<InfoIcon />}
        />
        <HamburgerOption
          setVisibility={() => {
            setInstallVisible(true);
          }}
          title="Install"
          icon={<DownloadIcon />}
        />
        <Theme theme={theme} colorMode={colorMode} />
      </Menu>
    </div>
  );
};
