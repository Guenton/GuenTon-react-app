import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { white, gradient } from '../../global/colors';

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(to bottom, ${white}, ${gradient})`,
  },
});

const FullScreenGradient = ({ children }) => (
  <Box id="full-screen" className={useStyles().root}>
    {children}
  </Box>
);

export default FullScreenGradient;
