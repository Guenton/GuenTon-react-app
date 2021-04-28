import React, { useState } from 'react';

import SplashScreen from './screens/SplashScreen';

const Router = () => {
  const [screen, setScreen] = useState('splash');

  return <>{screen === 'splash' && <SplashScreen setRoute={(route) => setScreen(route)} />}</>;
};

export default Router;
