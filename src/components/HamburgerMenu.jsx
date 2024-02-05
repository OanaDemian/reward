import MenuIcon from "@mui/icons-material/Menu";
import { About } from "./About";

import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const ITEM_HEIGHT = 48;

export const HamburgerMenu = ({showInstallInstructions}) => {
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
        <MenuItem>
          <ListItemIcon>
            <About fontSize="small" />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => showInstallInstructions()}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Install</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};
