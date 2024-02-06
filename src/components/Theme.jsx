import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";

export const Theme = ({ theme, colorMode }) => {
  return (
    <MenuItem onClick={colorMode.toggleColorMode}>
      <ListItemIcon>
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </ListItemIcon>
      <ListItemText>Theme</ListItemText>

    </MenuItem>
  )
}
