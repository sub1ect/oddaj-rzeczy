import React from 'react';
import SmallBtn from '../atoms/SmallBtn';

function HelpBtns() {
  return (
    <div className='helpBtns'>
      <SmallBtn to='/' text='Fundacjom' />
      <SmallBtn to='/Organizations' text='Organizacjom pozarządowym' />
      <SmallBtn to='Local' text='Lokalnym zbiórkom' />
    </div>
  );
}

export default HelpBtns;
