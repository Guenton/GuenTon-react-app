import React, { useState } from 'react';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';

const Router = () => {
  const [screen, setScreen] = useState('home');

  return (
    <>
      {screen === 'splash' && <SplashScreen setRoute={(route) => setScreen(route)} />}
      {screen === 'home' && <HomeScreen setRoute={(route) => setScreen(route)} />}
    </>
  );
};

export default Router;
