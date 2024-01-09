import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export const AverageSelection = ({setAverage}) => {
  const [selectedAverage, setSelectedAverage] = useState(1);
  const handleChange = (event) => {
    const average = event.target.value;
    //key value of new average to data store
    setSelectedAverage(average);
  };
  //useeffect
  //add default selection
  return (
    <>
      <Stack spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl sx={{
          m: 10, minWidth: 160
        }}>
          <InputLabel id="demo-simple-select-autowidth-label">Average</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedAverage}
          onChange={handleChange}
          label="Average"
          >
          <MenuItem value={1}>1</MenuItem>
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
        <Button variant="contained" onClick={() => setAverage(selectedAverage)}>Start</Button>
      </Stack>
    </>
  );
}