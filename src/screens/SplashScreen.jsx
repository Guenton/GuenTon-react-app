import React from 'react';
import { Container, Box } from '@material-ui/core';
import GuenTon from '../components/images/GuenTon';

const SplashScreen = () => (
  <Container id="full-screen">
    <Box
      className="fill-height"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center">
      <GuenTon />
    </Box>
  </Container>
);

export default SplashScreen;
