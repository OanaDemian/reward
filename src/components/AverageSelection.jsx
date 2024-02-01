import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

export const AverageSelection = ({ setAverage }) => {
  const currentAverage = () => {
    const average = localStorage.getItem("selectedAverage");
    return average !== undefined ? JSON.parse(average) : "";
  };
  const [selectedAverage, setSelectedAverage] = useState(currentAverage());

  const handleChange = (event) => {
    const average = event.target.value;
    //key value of new average to data store
    setSelectedAverage(average);
  };

  useEffect(() => {
    localStorage.setItem("selectedAverage", JSON.stringify(selectedAverage));
  }, [selectedAverage]);

  return (
    <>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl
          sx={{
            m: 10,
            minWidth: 200,
          }}
          size="large"
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            Average
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedAverage}
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
          sx={(theme) => ({
            p: 1,
            fontSize: "1rem",
            [theme.breakpoints.down("sm")]: {
              p: 1.3,
              fontSize: "1.3rem",
            },
            [theme.breakpoints.between("sm", "md")]: {
              p: 1.5,
              fontSize: "2.2rem",
            },
            [theme.breakpoints.up("md")]: {
              p: 2,
              fontSize: "2.5rem",
            },
          })}
          onClick={() => setAverage(selectedAverage)}
        >
          Start
        </Button>
      </Stack>
    </>
  );
};
