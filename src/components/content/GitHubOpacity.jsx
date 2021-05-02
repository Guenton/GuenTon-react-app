import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { white } from '../../global/colors';
import { Box, makeStyles } from '@material-ui/core';

import Opacity from '../containers/Opacity';

const useStyles = makeStyles({
  icon: {
    marginTop: '200px',
  },
});

const GitHubOpacity = () => (
  <Opacity>
    <Box display="flex" justifyContent="center" className="fill-height">
      <FontAwesomeIcon
        icon={faGithub}
        size="9x"
        color={white}
        className={useStyles().icon}
        onClick={() => (window.location.href = 'https://github.com/guenton')}
      />
    </Box>
  </Opacity>
);

export default GitHubOpacity;
