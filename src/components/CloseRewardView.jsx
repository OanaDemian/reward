import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { AverageSelection } from "./AverageSelection";
import { Box } from "@mui/material";

export const CloseRewardView = ({ setAverage }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        variant="contained"
        sx={{ marginLeft: "auto"}}
        onClick={() => <AverageSelection setAverage={setAverage(undefined)} />}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
