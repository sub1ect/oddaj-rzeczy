import React from 'react';
import AuthLink from '../atoms/AuthLink';

function AuthNav() {
  return (
    <ul className='authNav'>
      <li className='authNav__item'>
        <AuthLink to='/login' text='Zaloguj' />
      </li>
      <li className='authNav__item'>
        <AuthLink to='/' text='Załóż konto' />
      </li>
    </ul>
  );
}

export default AuthNav;
