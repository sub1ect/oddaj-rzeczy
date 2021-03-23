import React from 'react';
import HomeHeader from '../templates/HomeHeader';
import HomeThreeColumns from '../templates/HomeThreeColumns';
import HomeFirstSteps from '../templates/HomeFirstSteps';
import HomeAbout from '../templates/HomeAbout';
import HomeHelpLocal from '../templates/HomeHelpLocal';

function Local() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeThreeColumns />
        <HomeFirstSteps />
        <HomeAbout />
        <HomeHelpLocal />
      </main>
    </>
  );
}

export default Local;
