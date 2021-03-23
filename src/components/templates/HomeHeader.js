import React from 'react';
import Navigation from '../organisms/Navigation';
import Intro from '../organisms/Intro';

function HomeHeader() {
  return (
    <header nanme='header' className='header'>
      <div className='header__left'></div>
      <div className='header__right'>
        <Navigation />
        <Intro to='/login' />
      </div>
    </header>
  );
}

export default HomeHeader;
