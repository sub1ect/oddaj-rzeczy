import React from 'react';
import Title from '../molecules/Title';
import HelpBtns from '../molecules/HelpBtns';
import Local from '../organisms/Local';

function HomeHelpLocal() {
  return (
    <section name='help' className='help'>
      <Title text='Komu pomagamy?' />
      <HelpBtns />
      <Local />
    </section>
  );
}

export default HomeHelpLocal;
