import React from 'react';
import Title from '../molecules/Title';
import HomeBtns from '../molecules/HomeBtns';

function Intro({ to }) {
  return (
    <div className='intro'>
      <Title
        mainText='Zacznij pomagać!'
        text='Oddaj niechciane rzeczy w zaufane ręce'
      />
      <HomeBtns to={to} />
    </div>
  );
}

export default Intro;
