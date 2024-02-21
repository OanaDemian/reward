import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const AverageSelection = ({ setAverage }) => {
  const currentAverage = () => localStorage.getItem("selectedAverage");
  const [selectedAverage, setSelectedAverage] = useState(currentAverage());

  const handleChange = (event) => {
    const average = event.target.value;
    //key value of new average to data store
    setSelectedAverage(average);
  };

  useEffect(() => {
    if (typeof selectedAverage === "number") {
      localStorage.setItem("selectedAverage", selectedAverage.toString());
    }
  }, [selectedAverage]);

  return (
    <>
      <Stack
        spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1">
          Select an average for your variable ratio schedule.
        </Typography>
        <FormControl
          sx={{
            m: 10,
            minWidth: 200,
          }}
          size="large"
        >
          <InputLabel id="average-label">Average</InputLabel>
          <Select
            labelId="average-label"
            value={selectedAverage || ""}
            onChange={handleChange}
            label="Average"
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={() => setAverage(selectedAverage)}
          disabled={!selectedAverage}
          size="large"
        >
          Start
        </Button>
      </Stack>
    </>
  );
};
AverageSelection.propTypes = {
  setAverage: PropTypes.func,
};
