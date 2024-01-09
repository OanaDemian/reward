import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const Generated = ({ val, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  console.log('val is:', val);
  const nextSetClicked = () => {
    setProgress(0);
    onComplete();
  }
  console.log(theme.palette.mode)
  return (
    <>
      <Box sx={{ position: 'relative', height: '80vw', width:'80vw', maxHeight:'60vh', maxWidth:'60vh'}}>
        <Box sx={{ position: 'absolute', textAlign: 'center', width: '100%', fontSize: '15vh', maxFontSize: '30vh', top: '50%', right: '50%', transform: "translate(50%, -50%)" }}>{val}</Box>
        <CircularProgress variant="determinate" size="100%" thickness={5.25} value={100} sx={{ position: 'absolute', color: theme.palette.mode === 'light' ? blue[100] : blue[50] }}  />
        <CircularProgress variant="determinate" size="96%" value={(100 / val) * progress} sx={{ position: 'absolute',  top: '2%', right: '2%', transform: "translate(50%, -50%)" }} />
        
      </Box>
      {(progress < val) ?
        <>
          <Button variant="contained" sx={{padding:'20px'}} onClick={() => setProgress(progress + 1)}>Target</Button>
        </>
        :
        <>
          <Button variant="contained" color='success' sx={{padding:'20px'}} onClick={() => nextSetClicked()}>Next Set</Button>
        </>
      }
      </>
  )
};