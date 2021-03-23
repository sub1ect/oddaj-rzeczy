import React from 'react';
import decoration from '../../assets/Decoration.svg';

function Title({ mainText, text }) {
  return (
    <div className='title'>
      {mainText && <h1>{mainText}</h1>}
      <h2>{text}</h2>
      <img className='title__img' src={decoration} alt='' />
    </div>
  );
}

export default Title;
