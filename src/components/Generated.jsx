import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const Generated = ({ val, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  const nextSetClicked = () => {
    setProgress(0);
    onComplete();
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "80vw",
          width: "80vw",
          maxHeight: "60vh",
          maxWidth: "60vh",
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
      {progress < val ? (
        <>
          <Button
            variant="contained"
            sx={(theme) => ({
              p: 1,
              fontSize: "1.2rem",
              [theme.breakpoints.down("sm")]: {
                p: 2,
                fontSize: "1.3rem",
              },
              [theme.breakpoints.between("sm", "md")]: {
                p: 3,
                fontSize: "2.2rem",
              },
              [theme.breakpoints.up("md")]: {
                p: 3.5,
                fontSize: "2.5rem",
              },
            })}
            onClick={() => setProgress(progress + 1)}
          >
            Target
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            color="success"
            sx={(theme) => ({
              p: 1,
              fontSize: "1.2rem",
              [theme.breakpoints.down("sm")]: {
                p: 2,
                fontSize: "1.5rem",
              },
              [theme.breakpoints.between("sm", "md")]: {
                p: 3,
                fontSize: "2.4rem",
              },
              [theme.breakpoints.up("md")]: {
                p: 3.5,
                fontSize: "2.8rem",
              },
            })}
            onClick={() => nextSetClicked()}
          >
            Next Set
          </Button>
        </>
      )}
    </>
  );
};
