import React from 'react';
import Title from '../molecules/Title';
import HelpBtns from '../molecules/HelpBtns';
import Organizations from '../organisms/Organizations';

function HomeHelpOrgs() {
  return (
    <section name='help' className='help'>
      <Title text='Komu pomagamy?' />
      <HelpBtns />
      <Organizations />
    </section>
  );
}

export default HomeHelpOrgs;
