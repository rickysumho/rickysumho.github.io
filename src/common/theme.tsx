import { createTheme } from '@mui/material/styles';
import PoppinsLightTtf from '../fonts/Poppins-Light.ttf';
const theme = createTheme({
    palette: {
        primary: {
            main: '#344966',
            light: '#B4CDED',
            dark: '#092136',
            contrastText: '#F0F4EF'
        },
        background: {
            default: '#092136'
        }
    },
    typography: {
        h1: {
            fontSize: '3rem',
            '@media (min-width:600px)': {
                fontSize: '5rem',
            },
        },
        h3: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontSize: '3.6rem',
            },
        },
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