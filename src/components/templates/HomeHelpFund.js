import React from 'react';
import Title from '../molecules/Title';
import HelpBtns from '../molecules/HelpBtns';
import Fundations from '../organisms/Fundations';

function HomeHelpFund() {
  return (
    <section name='help' className='help'>
      <Title text='Komu pomagamy?' />
      <HelpBtns />
      <Fundations />
    </section>
  );
}

export default HomeHelpFund;
