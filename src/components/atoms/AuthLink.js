import React from 'react';
import { NavLink } from 'react-router-dom';

function AuthLink({ text, to }) {
  return (
    <NavLink to={to} activeClassName='active'>
      {text}
    </NavLink>
  );
}

export default AuthLink;
