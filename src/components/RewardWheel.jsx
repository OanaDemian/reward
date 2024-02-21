import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import PropTypes from 'prop-types';

export const RewardWheel = ({ val, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  const nextSetClicked = () => {
    setProgress(0);
    onComplete();
  };
  return (
    <Stack spacing={{ xs: 2, sm: 4, md: 6 }} direction="column" flexWrap="wrap" sx={{padding: "16px"}}>
      <Box
        sx={{
          position: "relative",
          height: "50vw",
          width: "50vw",
          maxHeight: "calc(55vh - 88px)",
          maxWidth: "calc(55vh - 88px)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
            fontSize: "15vh",
            maxFontSize: "30vh",
            top: "50%",
            right: "50%",
            transform: "translate(50%, -50%)",
          }}
        >
          {val}
        </Box>
        <CircularProgress
          variant="determinate"
          size="100%"
          thickness={5.25}
          value={100}
          sx={{
            position: "absolute",
            color: theme.palette.mode === "light" ? blue[100] : blue[50],
          }}
        />
        <CircularProgress
          variant="determinate"
          size="96%"
          value={(100 / val) * progress}
          sx={{
            position: "absolute",
            top: "2%",
            right: "2%",
            transform: "translate(50%, -50%)",
          }}
        />
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {progress < val ? (
        <>
          <Button
            variant="contained"
            onClick={() => setProgress(progress + 1)}
            size="large"

          >
            Target
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            color="success"
                onClick={() => nextSetClicked()}
                size="large"
          >
            Next Set
          </Button>
        </>
        )}
        </Box>
    </Stack>
    
  );
};

RewardWheel.propTypes = {
  val: PropTypes.number,
  onComplete: PropTypes.func
}