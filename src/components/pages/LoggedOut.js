import React from 'react';
import Navigation from '../organisms/Navigation';
import { NavLink } from 'react-router-dom';
import Title from '../molecules/Title';

function LoggedOut() {
  return (
    <section className='logged-out'>
      <Navigation />
      <div className='center-content'>
        <Title text='Wylogowanie nastąpiło pomyślnie!' />
        <div className='centerLink'>
          <NavLink to='/' activeClassName='active'>
            Strona główna
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default LoggedOut;
