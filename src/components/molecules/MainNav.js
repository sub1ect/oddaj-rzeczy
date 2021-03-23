import React from 'react';
import { Link } from 'react-scroll';

function MainNav() {
  return (
    <ul className='mainNav'>
      <li className='mainNav__item'>
        <Link to='root' smooth={true} duration={500}>
          Start
        </Link>
      </li>
      <li className='mainNav__item'>
        <Link to='firstSteps' smooth={true} duration={500}>
          O co chodzi?
        </Link>
      </li>
      <li className='mainNav__item'>
        <Link to='about' smooth={true} duration={500}>
          O nas
        </Link>
      </li>
      <li className='mainNav__item'>
        <Link to='help' smooth={true} duration={500}>
          Fundacja i organizacje
        </Link>
      </li>
      <li className='mainNav__item'>
        <Link to='contact' smooth={true} duration={500}>
          Kontakt
        </Link>
      </li>
    </ul>
  );
}

export default MainNav;
