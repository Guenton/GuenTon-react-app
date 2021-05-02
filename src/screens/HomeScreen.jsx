import React from 'react';
import { Grid } from '@material-ui/core';

import FullScreenGradient from '../components/containers/FullScreenGradient';
import Home from '../components/content/Home';
import GitHubOpacity from '../components/content/GitHubOpacity';

const HomeScreen = () => (
  <FullScreenGradient>
    <Grid container className="fill-height">
      <Grid item xs={12} sm={9}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <GitHubOpacity />
      </Grid>
    </Grid>
  </FullScreenGradient>
);

export default HomeScreen;
