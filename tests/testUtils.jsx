import { render } from '@testing-library/react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContext } from "../src/contexts/ColorModeContext";

const testTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

const TestWrapper = ({ children }) => ( 
  <ColorModeContext.Provider value={"light"}>
    <ThemeProvider theme={testTheme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  </ColorModeContext.Provider>
)


const customRender = (ui, options) =>
  render(ui, {wrapper: TestWrapper, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}