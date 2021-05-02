import React from 'react';

import rectangleBg from '../../global/images/rectangle-bg.png';

const OpacityBackground = ({ className, children }) => (
  <img className={className} src={rectangleBg} alt="Background Pattern">
    {children}
  </img>
);

export default OpacityBackground;
