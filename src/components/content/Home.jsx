import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

import GuenTon from '../images/GuenTon';
import Subtitle from '../labels/Subtitle';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  guenton: {
    maxWidth: '75%',
    alignSelf: 'center',
  },
  subtitle: {
    maxWidth: '75%',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

const Home = () => (
  <Container className={useStyles().root}>
    <GuenTon className={useStyles().guenton} />
    <Subtitle className={useStyles().subtitle} />
  </Container>
);

export default Home;
