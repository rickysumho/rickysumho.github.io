import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';
// Temp
import { ProjectType } from './common/types';
import theme from './common/theme';
import personalProjects from './common/personal-projects';
import workExperiences from './common/work-experiences';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Welcome />
      <AboutMe />
      <Experiences experiences={workExperiences} />
      <Projects projects={personalProjects}/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
