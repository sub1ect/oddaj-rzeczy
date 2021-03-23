import React from 'react';

function PagiBtn({ number, paginate, currentPage }) {
  let clsName = 'pagiBtn';

  if (number === currentPage) {
    clsName = `pagiBtn active`;
  }

  return (
    <button type='button' onClick={() => paginate(number)} className={clsName}>
      {number}
    </button>
  );
}

export default PagiBtn;
