import { createTheme } from '@mui/material/styles';
import PoppinsLightTtf from '../fonts/Poppins-Light.ttf';
const theme = createTheme({
    palette: {
      primary: {
        main: '#4D4C7D',
        light: '#827397',
        dark: '#363062',
        contrastText: '#f6eff1'
      },
      background: {
        default: '#363062'
      }
    },
    typography: {
      fontFamily: [
        "Poppins",
        "Helvetica",
        "sans-serif"
      ].join(',')
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
            body: '#363062',
        }
      }
    },
}); 

export default theme;