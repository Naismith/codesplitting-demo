import React from 'react';
import Container from 'components/Container';

const Home = () => {
  for (let i = 0; i < 1000000000; i++) {}
  return <Container>Slow Page</Container>;
};

export default Home;
