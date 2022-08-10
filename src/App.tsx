import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';
// Temp
import { ProjectType } from './common/types'
import theme from './common/theme'
import personalProjects from './common/personal-projects'

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
      <Projects projects={personalProjects}/>
    </ThemeProvider>
  );
}

export default App;
