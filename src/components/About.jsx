import { useState } from "react";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import basicSchOfReinforcement from "../assets/BasicSchedulesOfReinforcement.png";

export const About = () => {
  const theme = useTheme();
  const [isClicked, setIsClicked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  const schedulesOfReinforcementDefinition =
    " are the rules that dictate how often someone is rewarded for a certain behaviour. Different schedules of reinforcement result in different rates of response.\n";
  const aboutSchedulesOfReinforcementText =
    "\nIf you are teaching your learner a new skill, reward them each time they demonstrate the behaviour / after each successful interval. This is a Continuous Reinforcement Schedule.\n\nOnce the learner starts demonstrating the skill consistently, thin your reinforcement by rewarding after a specific number of responses / successful time periods. This is called reinforcing on a fixed Schedule of Reinforcement.\n\nThis app is for when the skill is well established in the learner's repertoire and you work on transitioning towards a more natural schedule of reinforcement or one which can be more easily sustained in the learner's environment. Once the learner displays the target behaviour on a regular basis, you can transition to a variable schedule of reinforcement.Before the implementation of this schedule, predetermine how often the learner will receive a reward.";

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          mr: 5.5,
          mt: 1,
          position: "absolute",
          right: "100%",
          transform: "translate(100vw, 0)",
          padding: "5px",
          minWidth: "0",
        }}
        onClick={handleClick}
      >
        {theme.palette.mode === "dark" ? <InfoOutlinedIcon /> : <InfoIcon />}
      </Button>
      {isClicked ? (
        <Dialog open={isClicked} onClose={handleClose}>
          <DialogActions>
            <Button variant="text" onClick={handleClose}>
              <CloseIcon sx={{ color: grey[900] }} fontSize="medium" />
            </Button>
          </DialogActions>

          <DialogContent>
            <Typography
              variant="h1"
              component="h2"
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
              How To Use
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              Reward after the average number of responses has occurred.
            </Typography>
            <List sx={{ listStyleType: "disc" }}>
              <ListItem sx={{ display: "list-item" }}>
                Select your average from the dropdown list and press{" "}
                <strong>START</strong>.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                On the reward page, press the <strong>TARGET</strong> button
                after each correct occurrence of the target behaviour. As you
                click, you are able to see the progress.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                When the circle is full and <strong>NEXT SET</strong>{" "}
                appears, deliver the reward.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Continue repeating steps 2 and 3.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Pres the X button to go to the previous screen.
              </ListItem>
            </List>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "8px",
                marginTop: "4px",
                display: "block",
              }}
            >
              Schedules of Reinforcement
            </Typography>
            <DialogContentText sx={{ whiteSpace: "pre-wrap"}}>
              <Link
                target="_blank"
                rel="noopener"
                href="https://www.verywellmind.com/what-is-a-schedule-of-reinforcement-2794864"
                underline="hover"
              >
                {"Schedules of Reinforcement"}
              </Link>
              {schedulesOfReinforcementDefinition}
              {showMore
                ? aboutSchedulesOfReinforcementText
                : `${aboutSchedulesOfReinforcementText.substring(0, 50)}`}
              <Button
                variant="text"
                size="small"
                onClick={() => setShowMore(!showMore)}
              >
                {" "}
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </DialogContentText>
             <CardMedia
                component="img"
                alt="basic schedules of reinforcement"
                sx={{ marginTop: "8px" }}
                image={basicSchOfReinforcement}
              />
              <CardContent sx= {{padding: '5px'}} >
                <Typography variant="body2">
                  Basic Schedules Of Reinforcement (Cooper, Heron, and Heward, 2007).
                </Typography>
              </CardContent>
          </DialogContent>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};
