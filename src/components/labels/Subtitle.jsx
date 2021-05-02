import { Box, Grid } from '@material-ui/core';
import React from 'react';

const Subtitle = ({ className }) => (
  <Box className={className}>
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <h3>Web Sites - </h3>
      </Grid>
      <Grid item>
        <h3>Web Applications - </h3>
      </Grid>
      <Grid item>
        <h3>Mobile Apps</h3>
      </Grid>
    </Grid>
  </Box>
);

export default Subtitle;
