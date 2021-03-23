import React from 'react';
import { NavLink } from 'react-router-dom';

function SmallBtn({ text, to }) {
  return (
    <NavLink exact to={to} activeClassName='active' className='smallBtn'>
      <div className='center'>{text}</div>
    </NavLink>
  );
}

export default SmallBtn;
