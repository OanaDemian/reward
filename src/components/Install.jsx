import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import InstallMobileIcon from '@mui/icons-material/InstallMobile';

export const Install = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          mr: 10,
          mt: 1,
          position: "absolute",
          right: "100%",
          transform: "translate(100vw, 0)",
          padding: "5px",
          minWidth: "0",
        }}
        onClick={handleClick}
      ><InstallMobileIcon/>
      </Button>
      {isClicked ? (
        <Dialog open={isClicked} onClose={handleClose}>
          <DialogActions>
            <Button variant="text" onClick={handleClose}>
            </Button>
          </DialogActions>

          <DialogContent>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "600",
                fontSize: "28px",
                letterSpacing: "0",
                textTransform: "none",
                textAlign: "left",
                marginBottom: "2px",
                marginTop: "2px",
                display: "block",
              }}
            >
              How To Install Variable Ratio Generator
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "24px",
                marginBottom:"5px"
              }}
            > on your iPhone
            </Typography>
            <List sx={{ listStyleType: "disc"}}>
              <ListItem sx={{ display: "list-item" }}>
                Open Safari.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Navigate to https://practicalplay.co.uk/.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Tap on the Share button.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Select Add to Home Screen.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
               5. Tap Add in the upper-right corner.
              </ListItem>
            </List>            
            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "24px",
                marginBottom: "5px",
                marginTop:"20px"
              }}
            > on your Android phone
            </Typography>
            <List sx={{ listStyleType: "disc"}}>
              <ListItem sx={{ display: "list-item" }}>
                Open Google Chrome.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Navigate to https://practicalplay.co.uk/
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Tap on the overflow menu (three dots) in the upper-right corner.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Select Add to Home Screen.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
               Tap Add.
              </ListItem>
            </List>
            Variable Ratio Generator will now appear on your home screen just like any other app.
          </DialogContent>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};
