import React from 'react';
import loadable from '@loadable/component';
import { Router } from '@reach/router';
// import Home from 'pages/Home';
// import About from 'pages/About';
// import NorthOT from 'pages/NorthOT';
import Layout from 'components/Layout';

const Home = loadable(() => import('pages/Home'));
const About = loadable(() => import('pages/About'));
const NorthOT = loadable(() => import('pages/NorthOT'));

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" page="Home" />
        <About path="about" page="About" />
        <NorthOT path="northot" page="NorthOT" />
      </Router>
    </Layout>
  );
}

export default App;
