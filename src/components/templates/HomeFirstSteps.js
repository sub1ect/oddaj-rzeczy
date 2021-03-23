import React from 'react';
import Title from '../molecules/Title';
import FirstSteps from '../organisms/FirstSteps';
import BigBtn from '../atoms/BigBtn';

function HomeFirstSteps() {
  return (
    <section name='firstSteps' className='firstSteps'>
      <Title text='Wystarczą 4 proste kroki' />
      <FirstSteps />
      <div className='firstSteps__btn'>
        <BigBtn text='oddaj rzeczy' />
      </div>
    </section>
  );
}

export default HomeFirstSteps;
