import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';
// Temp
import { ProjectType } from './common/types'
import theme from './common/theme'

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

const projectsExample: Array<ProjectType> = [
  {
    title: 'Petlify',
    description: 'Doggy and cat project!',
    skills: 'JavaScript and waffleboarding',
    repo_link: 'https://dababy.com/',
    demo_link: 'https://babydada.com/'
  },
  {
    title: 'Dababy',
    description: 'There are too many things about dababy that I care about.',
    skills: 'BabyJS ',
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
      <CssBaseline />
      <Container>
        <Projects projects={projectsExample}/>
      </Container>
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
