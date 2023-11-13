import { useContext, createContext, useState, useMemo } from 'react'; 
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { RewardGiver } from './components/RewardGiver';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <div>
          <div style={{width:'100%', position:'relative'}}>
            <IconButton sx={{ ml: 1, position:'absolute', right:'100%', transform:'translate(100vw, 0)' }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
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
