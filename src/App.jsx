import React from 'react';
import loadable from '@loadable/component';
import { Router } from '@reach/router';

const Home = loadable(() => import('pages/Home'));
const About = loadable(() => import('pages/About'));
const NorthOT = loadable(() => import('pages/NorthOT'));

function App() {
  return (
    <Router>
      <Home path="/" page="Home" />
      <About path="about" page="About" />
      <NorthOT path="northot" page="NorthOT" />
    </Router>
  );
}

export default App;
