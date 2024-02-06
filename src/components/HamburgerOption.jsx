import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";


export const HamburgerOption = ({ setVisibility, title }) => (
  <MenuItem onClick={() => setVisibility(true)}>
    <ListItemIcon>
    </ListItemIcon>
    <ListItemText>{title}</ListItemText>
  </MenuItem>
)