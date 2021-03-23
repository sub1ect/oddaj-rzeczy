import React from 'react';
import people from '../../assets/People.jpg';
import Title from '../molecules/Title';
import signature from '../../assets/Signature.svg';

function HomeAbout() {
  return (
    <section name='about' className='about'>
      <div className='about__left'>
        <div className='center'>
          <Title text='O nas' />
          <p className='text'>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img className='img--signature' src={signature} alt='signature' />
        </div>
      </div>
      <div className='about__right'>
        <img className='img--people' src={people} alt='smiling poeople' />
      </div>
    </section>
  );
}

export default HomeAbout;
