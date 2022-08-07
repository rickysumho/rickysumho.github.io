import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';

// Temp
import { ProjectType } from './common/types'

const projectExample: ProjectType = {
  title: 'Petlify',
  description: 'Doggy and cat project!',
  skills: 'JavaScript and waffleboarding',
  repo_link: 'https://dababy.com/',
  demo_link: 'https://babydada.com/'
}

function App() {
  return (
    <Project project={projectExample}/>
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
