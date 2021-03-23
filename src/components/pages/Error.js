import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <h1>
      Sorry, this page doesn't exist, go back:{' '}
      <Link style={{ color: 'red', textDecoration: 'underline' }} to='/'>
        > Back Home
      </Link>
    </h1>
  );
}

export default Error;
