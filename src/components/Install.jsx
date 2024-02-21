import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";


export const Install = ({ isVisible, setInstallVisible }) => (
  <Dialog open={isVisible} onClose={() => setInstallVisible(false)}>
    <DialogActions>
      <Box sx={{ display: "flex" }}>
        <IconButton
          variant="contained"
          sx={{ marginLeft: "auto" }}
          onClick={() =>  setInstallVisible(false)}
          >
          <CloseIcon />
      </IconButton>
      </Box>
    </DialogActions>

    <DialogContent>
      <Typography variant="h5" component="h2" sx={{
            textAlign: "left",
            fontWeight: "bold",
          }}>
        {" "}
        Steps to install on iPhone
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText>1. Open Safari.</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText sx={{ component: "a" }}>
            2. Navigate to
            <Link
              href="https://practicalplay.co.uk/"
              underline="hover"
              variant="body2"
              target="_blank"
              rel="noopener"
            >
              {" Variable Ratio Generator"}
            </Link>
            .
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>3. Tap on the Share button.</ListItemText>{" "}
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>
            4. Scroll down and select Add to Home Screen.
          </ListItemText>{" "}
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>5. Tap Add in the upper-right corner.</ListItemText>
        </ListItem>
      </List>
      <Typography variant="h5" component="h2" sx={{
            textAlign: "left",
            fontWeight: "bold",
          }}>
        {" "}
        Steps to install on Android
      </Typography>
      <List>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText>1. Open Google Chrome.</ListItemText>
        </ListItem>
        <ListItem disablePadding sx={{ display: "list-item", component: "a" }}>
          <ListItemText>
            2. Navigate to
            <Link
              href="https://practicalplay.co.uk/"
              underline="hover"
              variant="body2"
              target="_blank"
              rel="noopener"
            >
              {" Variable Ratio Generator"}
            </Link>
            .
          </ListItemText>
        </ListItem>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText>
            3. Tap on the overflow menu (three dots) in the upper-right corner.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText>4. Select Add to Home Screen.</ListItemText>
        </ListItem>
        <ListItem disablePadding sx={{ display: "list-item" }}>
          <ListItemText>5. Tap Add.</ListItemText>
        </ListItem>
      </List>
      <Typography variant="body2">
        Variable Ratio Generator will now appear on your home screen just like
        any other app.
      </Typography>
    </DialogContent>
  </Dialog>
);
Install.propTypes = {
  isVisible: PropTypes.bool,
  setInstallVisible: PropTypes.func,
};
