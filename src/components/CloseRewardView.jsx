import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { AverageSelection } from "./AverageSelection";
import { Box } from "@mui/material";

export const CloseRewardView = ({ setAverage }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Button
        variant="contained"
        sx={{ marginLeft: "auto", borderBottomColor: "rgb(25, 118, 210)" }}
        onClick={() => <AverageSelection setAverage={setAverage(undefined)} />}
      >
        <CloseIcon />
      </Button>
    </Box>
  );
};
