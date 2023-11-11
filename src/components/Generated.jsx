import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export const Generated = ({ val, onComplete}) => {
  const [progress, setProgress] = useState(0);
  console.log('val is:', val);
  const nextSetClicked = () => {
    setProgress(0);
    onComplete();
  }
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ alignSelf: 'center', position: 'absolute'}}><p>{val}</p></Box> 
        <CircularProgress variant="determinate" value={(100 / val) * progress} />
      </Box>
      {(progress < val) ?
        <>
          <Button variant="contained" onClick={() => setProgress(progress + 1)}>Target</Button>
        </>
        :
        <>
          <p>Reward!</p>
          <Button variant="contained" onClick={() => nextSetClicked()}>Next Set</Button>
        </>
      }
      </>
  )
};