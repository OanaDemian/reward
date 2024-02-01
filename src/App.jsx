import { useContext, createContext, useState, useMemo } from 'react'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { RewardGiver } from './components/RewardGiver';
import { About } from './components/About';
import { Install } from './components/Install';


const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <div>
        <div style={{ width: '100%', position: 'relative' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexGrow: 1 }}>
          <Typography variant="h3" component="h4">Variable Ratio Generator</Typography>

            <Button variant="outlined" aria-label={theme.palette.mode} sx={{
              mr: 1, mt: 1,
              position: 'absolute', right: '100%', transform: 'translate(100vw, 0)', padding: '5px', minWidth: '0'
            }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness4Icon/> : <Brightness7Icon/>}
          </Button>
            <About />
            <Install/>
        </Box>
                            

        </div>
        <Divider></Divider>
        <Box
            sx={{ 
              display: 'flex',
              justifyContent:'center',
              alignItems:'center',
              minHeight: '100vh',
              ml: 'auto',
              mr: 'auto',
              borderRadius: 1,
              p: 3,
            }}
        >
             <Stack spacing={10}>
              <Stack direction="row">
              </Stack>
              <RewardGiver />
            </Stack>
          </Box>
        </div>
      </>
  );
}

const ToggleColorMode = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        }
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline >
          <MyApp />
          </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function App() {
  return (
    <>
      <ToggleColorMode/>
    </>
  )
}

export default App;
