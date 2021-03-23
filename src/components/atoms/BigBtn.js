import React from 'react';
import { Link } from 'react-router-dom';

function BigBtn({ text, to }) {
  return (
    <Link className='bigBtn' to={to}>
      {text}
    </Link>
  );
}

export default BigBtn;
