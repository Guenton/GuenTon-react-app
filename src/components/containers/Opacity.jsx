import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { redShade } from '../../global/colors';

import rectangleBg from '../../global/images/rectangle-bg.png';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${rectangleBg})`,
    height: '100%',
  },
  opacity: {
    background: redShade,
    height: '100%',
    width: '100%',
  },
});

const Opacity = ({ children }) => (
  <Box className={useStyles().root}>
    <Box className={useStyles().opacity}>{children}</Box>
  </Box>
);

export default Opacity;
