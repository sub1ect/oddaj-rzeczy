import React, { useEffect, useState, useRef } from 'react';
import HelpSingle from '../molecules/HelpSingle';
import fundations from '../../data/fundations.json';
import PagiBtn from '../atoms/PagiBtn';

function Fundations() {
  const [data] = useState(fundations);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const pageNumber = [];

  const lastRecordIndex = currentPage * recordsPerPage;
  const firstRecordIndex = lastRecordIndex - recordsPerPage;
  const currentRecords = data.slice(firstRecordIndex, lastRecordIndex);

  const paginate = (num) => {
    setCurrentPage(num);
  };

  for (let i = 1; i <= data.length / recordsPerPage; i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <p className='help__text'>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <div>
        {currentRecords.map((el) => {
          const { id, title, goal, things } = el;
          return (
            <>
              <HelpSingle key={id} title={title} goal={goal} things={things} />
              <div className='help__decoration'></div>
            </>
          );
        })}
      </div>
      <div className='pagiBtns'>
        {pageNumber.map((el) => {
          if (data.length > 3) {
            return (
              <PagiBtn
                currentPage={currentPage}
                paginate={paginate}
                key={el}
                number={el}
              />
            );
          } else {
            return <div className='fillSpace'></div>;
          }
        })}
      </div>
    </>
  );
}

export default Fundations;
