import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { useContext } from 'react'
import { useTheme } from "@mui/material/styles";


export const Theme = () => {
  const colorModeContext = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <MenuItem onClick={colorModeContext.toggleColorMode}>
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
