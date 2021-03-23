import React from 'react';

function HelpSingle({ title, goal, things }) {
  return (
    <div className='helpSingle'>
      <div className='helpSingle__left'>
        <h4 className='title'>{title}</h4>
        <p className='goal'>Cel i misja: {goal}</p>
      </div>
      <div className='helpSingle__right'>
        <p className='things'>{things}</p>
      </div>
    </div>
  );
}

export default HelpSingle;
