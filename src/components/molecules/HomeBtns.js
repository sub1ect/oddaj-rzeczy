import React from 'react';
import BigBtn from '../atoms/BigBtn';

function HomeBtns({ to }) {
  return (
    <div className='homeBtns'>
      <BigBtn to={to} text='Oddaj rzeczy' />
      <BigBtn to={to} text='Zorganizuj zbiórkę' />
    </div>
  );
}

export default HomeBtns;
