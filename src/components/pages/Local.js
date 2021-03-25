import React from 'react';
import HomeHeader from '../templates/HomeHeader';
import HomeThreeColumns from '../templates/HomeThreeColumns';
import HomeFirstSteps from '../templates/HomeFirstSteps';
import HomeAbout from '../templates/HomeAbout';
import HomeHelpLocal from '../templates/HomeHelpLocal';
import HomeContact from '../templates/HomeContact';

function Local() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeThreeColumns />
        <HomeFirstSteps />
        <HomeAbout />
        <HomeHelpLocal />
        <HomeContact />
      </main>
    </>
  );
}

export default Local;
