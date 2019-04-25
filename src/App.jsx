import React from 'react';
import loadable from '@loadable/component';
import { Router } from '@reach/router';
import Loading from 'pages/Loading';
import Layout from 'components/Layout';

const getLoadableComponent = page =>
  loadable(() => import(`pages/${page}`), {
    fallback: <Loading />
  });

const Home = getLoadableComponent('Home');
const About = getLoadableComponent('About');
const NorthOT = getLoadableComponent('NorthOT');
const Slow = getLoadableComponent('SlowPage');

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" page="Home" />
        <About path="about" />
        <NorthOT path="northot" />
        <Slow path="slow" />
      </Router>
    </Layout>
  );
}

export default App;
