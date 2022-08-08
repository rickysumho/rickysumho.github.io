import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import PoppinsLightTtf from './fonts/Poppins-Light.ttf';
// Temp
import { ProjectType } from './common/types'


// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D4C7D',
      light: '#827397',
      dark: '#363062',
      contrastText: '#f6eff1'
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
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Poppins'), local('Poppins-Light'), url(${PoppinsLightTtf}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    }
  }
}); 

const projectsExample: Array<ProjectType> = [
  {
    title: 'Petlify',
    description: 'Doggy and cat project!',
    skills: 'JavaScript and waffleboarding',
    repo_link: 'https://dababy.com/',
    demo_link: 'https://babydada.com/'
  },
  {
    title: 'Petlify',
    description: 'Doggy and cat project!',
    skills: 'JavaScript and waffleboarding',
    repo_link: 'https://dababy.com/',
    demo_link: 'https://babydada.com/'
  },
  {
    title: 'Petlify',
    description: 'Doggy and cat project!',
    skills: 'JavaScript and waffleboarding',
    repo_link: 'https://dababy.com/',
    demo_link: 'https://babydada.com/'
  },
  {
    title: 'Petlify',
    description: 'Doggy and cat project!',
    skills: 'JavaScript and waffleboarding',
    repo_link: 'https://dababy.com/',
    demo_link: 'https://babydada.com/'
  },
  {
    title: 'Petlify',
    description: 'Doggy and cat project!',
    skills: 'JavaScript and waffleboarding',
    repo_link: 'https://dababy.com/',
    demo_link: 'https://babydada.com/'
  },
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Projects projects={projectsExample}/>
    </ThemeProvider>
  );
}

{/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div> */}

export default App;
