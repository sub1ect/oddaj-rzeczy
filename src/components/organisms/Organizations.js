import React, { useEffect, useState, useRef } from 'react';
import HelpSingle from '../molecules/HelpSingle';
import organizations from '../../data/organizations.json';
import PagiBtn from '../atoms/PagiBtn';

function Organizations() {
  const [data] = useState(organizations);
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
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

export default Organizations;
