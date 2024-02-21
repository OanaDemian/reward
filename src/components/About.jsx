import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import basicSchOfReinforcement from "../assets/BasicSchedulesOfReinforcement.png";
import PropTypes from "prop-types";

export const About = ({ isVisible, setAboutVisible }) => {
  const [showMore, setShowMore] = useState(false);

  const schedulesOfReinforcementDefinition =
    " are the rules that dictate how often someone is rewarded for a certain behaviour. Different schedules of reinforcement result in different rates of response.\n";
  const aboutSchedulesOfReinforcementText =
    "\nIf you are teaching your learner a new skill, reward them each time they demonstrate the behaviour / after each successful interval. This is a Continuous Reinforcement Schedule.\n\nOnce the learner starts demonstrating the skill consistently, thin your reinforcement by rewarding after a specific number of responses / successful time periods. This is called reinforcing on a fixed Schedule of Reinforcement.\n\nThis app is for when the skill is well established in the learner's repertoire and you work on transitioning towards a more natural schedule of reinforcement or one which can be more easily sustained in the learner's environment. Once the learner displays the target behaviour on a regular basis, you can transition to a variable schedule of reinforcement.Before the implementation of this schedule, predetermine how often the learner will receive a reward.";

  return (
    <Dialog
      open={isVisible}
      onClose={() => {
        setAboutVisible(false);
      }}
    >
      <DialogActions>
    <Box sx={{ display: "flex" }}>
        <IconButton
          variant="contained"
          sx={{ marginLeft: "auto" }}
          onClick={() =>  setAboutVisible(false)}
          >
          <CloseIcon />
      </IconButton>
      </Box>
      </DialogActions>
      <DialogContent>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          How To Use
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemText>
              1. Select your average from the dropdown list and press{" "}
              <strong>START</strong>.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              2. On the reward page, press the <strong>TARGET</strong> button
              after each correct occurrence of the target behaviour. As you
              click, you are able to see the progress.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              3. When the circle is full and <strong>NEXT SET</strong> appears,
              deliver the reward.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              4. Continue repeating steps two and three.
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              5. Pres the X button to go to the previous screen.
            </ListItemText>
          </ListItem>
        </List>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Schedules Of Reinforcement
        </Typography>
        <DialogContentText sx={{ whiteSpace: "pre-wrap" }}>
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
        <CardContent sx={{ padding: "5px" }}>
          <Typography variant="body2">
            Basic Schedules Of Reinforcement{" "}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.pearson.com/en-gb/subject-catalog/p/applied-behavior-analysis-global-edition/P200000003973
"
              variant="body2"
            >
              Cooper, Heron, and Heward, 2020
            </Link>
          </Typography>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
};

About.propTypes = {
  isVisible: PropTypes.bool,
  setAboutVisible: PropTypes.func,
};
