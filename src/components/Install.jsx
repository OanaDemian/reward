import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

export const Install = ({ isVisible, setInstallVisible }) => (
  <Dialog open={isVisible} onClose={() => setInstallVisible(false)}>
    <DialogActions>
      <Button variant="text" onClick={() => setInstallVisible(false)}>
        <CloseIcon sx={{ color: grey[900] }} fontSize="medium" />
      </Button>
    </DialogActions>

    <DialogContent>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "5px",
        }}
      >
        {" "}
        Install on iPhone
      </Typography>
      <List sx={{ listStyleType: "disc" }}>
        <ListItem sx={{ display: "list-item" }}>Open Safari.</ListItem>
        <ListItem sx={{ display: "list-item", component: "a" }}>
          Navigate to
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
        </ListItem>

        <ListItem sx={{ display: "list-item" }}>
          Tap on the Share button.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Scroll down and select Add to Home Screen.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Tap Add in the upper-right corner.
        </ListItem>
      </List>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "5px",
          marginTop: "20px",
        }}
      >
        {" "}
        Install on Android
      </Typography>
      <List sx={{ listStyleType: "disc" }}>
        <ListItem sx={{ display: "list-item" }}>Open Google Chrome.</ListItem>
        <ListItem sx={{ display: "list-item", component: "a" }}>
          Navigate to
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
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Tap on the overflow menu (three dots) in the upper-right corner.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          Select Add to Home Screen.
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>Tap Add.</ListItem>
      </List>
      Variable Ratio Generator will now appear on your home screen just like any
      other app.
    </DialogContent>
  </Dialog>
);
