import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemePage } from "./ThemePage";


export const AppTheme = ({ children }) => {

  return (
    <ThemeProvider theme={ ThemePage } >

        <CssBaseline/>
        {children}

    </ThemeProvider>


  )
}
