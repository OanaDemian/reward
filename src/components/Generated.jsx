import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Translate } from '@mui/icons-material';

export const Generated = ({ val, onComplete}) => {
  const [progress, setProgress] = useState(0);
  console.log('val is:', val);
  const nextSetClicked = () => {
    setProgress(0);
    onComplete();
  }
  return (
    <>
      <Box sx={{ position: 'relative', height: '80vw', width:'80vw', maxHeight:'60vh', maxWidth:'60vh'}}>
        <Box sx={{ position: 'absolute', textAlign: 'center', width:'100%', fontSize:'15vh', maxFontSize: '30vh', top:'50%', right:'50%', transform: "translate(50%, -50%)"}}>{val}</Box> 
        <CircularProgress variant="determinate"  thickness="5" size="100%" max-size value={(100 / val) * progress} />
      </Box>
      {(progress < val) ?
        <>
          <Button variant="contained" onClick={() => setProgress(progress + 1)}>Target</Button>
        </>
        :
        <>
          <Button variant="contained" onClick={() => nextSetClicked()}>Next Set</Button>
        </>
      }
      </>
  )
};