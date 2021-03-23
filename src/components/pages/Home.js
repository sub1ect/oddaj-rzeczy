import React from 'react';
import HomeHeader from '../templates/HomeHeader';
import HomeThreeColumns from '../templates/HomeThreeColumns';
import HomeFirstSteps from '../templates/HomeFirstSteps';
import HomeAbout from '../templates/HomeAbout';
import HomeHelpFund from '../templates/HomeHelpFund';
import HomeContact from '../templates/HomeContact';

function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeThreeColumns />
        <HomeFirstSteps />
        <HomeAbout />
        <HomeHelpFund />
        <HomeContact />
      </main>
    </>
  );
}

export default Home;
