import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const HamburgerMenu = ({setInstallVisible, setAboutVisible}) => {
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
        <MenuItem onClick={() => setAboutVisible(true)}>
          <ListItemIcon>
          </ListItemIcon>
        </MenuItem>
        <HamburgerOption setVisibility={setAboutVisible} title="About"  />


        <MenuItem onClick={() => setInstallVisible(true) }>
          <ListItemIcon>
          </ListItemIcon>
        </MenuItem>
        <HamburgerOption setVisibility={setInstallVisible} title="Install" />
      </Menu>
    </div>
  );
};

const HamburgerOption = ({setVisibility, title}) => (
  <MenuItem onClick={() => setVisibility(true)}>
    <ListItemIcon>
    </ListItemIcon>
    <ListItemText>{title}</ListItemText>
  </MenuItem>
)