import React from 'react';
import HomeHeader from '../templates/HomeHeader';
import HomeThreeColumns from '../templates/HomeThreeColumns';
import HomeFirstSteps from '../templates/HomeFirstSteps';
import HomeAbout from '../templates/HomeAbout';
import HomeHelpOrgs from '../templates/HomeHelpOrgs';
import HomeContact from '../templates/HomeContact';

function Organizations() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeThreeColumns />
        <HomeFirstSteps />
        <HomeAbout />
        <HomeHelpOrgs />
        <HomeContact />
      </main>
    </>
  );
}

export default Organizations;
