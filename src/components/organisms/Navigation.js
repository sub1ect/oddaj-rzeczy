import React from 'react';
import MainNav from '../molecules/MainNav';
import AuthNav from '../molecules/AuthNav';

function Navigation() {
  return (
    <nav className='nav'>
      <AuthNav />
      <MainNav />
    </nav>
  );
}

export default Navigation;
