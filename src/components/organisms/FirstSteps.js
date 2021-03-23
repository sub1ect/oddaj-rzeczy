import React from 'react';
import tshirt from '../../assets/Icon-1.svg';
import bag from '../../assets/Icon-2.svg';
import loupe from '../../assets/Icon-3.svg';
import order from '../../assets/Icon-4.svg';

function FirstSteps() {
  return (
    <div className='icons'>
      <div className='element'>
        <img className='element__img' src={tshirt} alt='t-shirt' />
        <h3 className='element__title'>Wybierz rzeczy</h3>
        <div className='element__decoration'></div>
        <p className='element__text'>ubrania, zabawki, sprzęt i inne</p>
      </div>
      <div className='element'>
        <img className='element__img' src={bag} alt='bag' />
        <h3 className='element__title'>Spakuj je</h3>
        <div className='element__decoration'></div>
        <p className='element__text'>skorzystaj z worków na śmieci</p>
      </div>
      <div className='element'>
        <img className='element__img' src={loupe} alt='loupe' />
        <h3 className='element__title'>Zdecyduj komu chcesz pomóc</h3>
        <div className='element__decoration'></div>
        <p className='element__text'>wybierz zaufane miejsce</p>
      </div>
      <div className='element'>
        <img className='element__img' src={order} alt='arrows' />
        <h3 className='element__title'>Zamów kuriera</h3>
        <div className='element__decoration'></div>
        <p className='element__text'>kurier przyjedzie w dogodnym terminie</p>
      </div>
    </div>
  );
}

export default FirstSteps;
