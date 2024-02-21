import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from 'prop-types';

export const HamburgerOption = ({ setVisibility, title, icon }) => (
  
  <MenuItem onClick={() => setVisibility(true)}>
    <ListItemIcon>  {icon}</ListItemIcon>
    <ListItemText>{title}</ListItemText>
  </MenuItem>
)

HamburgerOption.propTypes = {
  setVisibility: PropTypes.func,
  title: PropTypes.string,
  icon:PropTypes.object
}