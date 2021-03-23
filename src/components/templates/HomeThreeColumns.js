import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function HomeThreeColumns() {
  const [countVisible, setCountVisible] = useState(false);

  const visibilityChange = (isVisible) => {
    if (isVisible) {
      setCountVisible(true);
    }
  };

  return (
    <section className='threeColumns'>
      <div className='column'>
        <p className='column__number'>
          <VisibilitySensor onChange={visibilityChange}>
            <CountUp end={countVisible ? 10 : 0} duration={3} />
          </VisibilitySensor>
        </p>
        <h3 className='column__title'>Oddanych worków</h3>
        <p className='column__text'>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className='column'>
        <p className='column__number'>
          <VisibilitySensor onChange={visibilityChange}>
            <CountUp end={countVisible ? 5 : 0} duration={3} />
          </VisibilitySensor>
        </p>
        <h3 className='column__title'>Wspartych organizacji</h3>
        <p className='column__text'>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className='column'>
        <p className='column__number'>
          <VisibilitySensor onChange={visibilityChange}>
            <CountUp end={countVisible ? 7 : 0} duration={3} />
          </VisibilitySensor>
        </p>
        <h3 className='column__title'>Zorganizowanych zbiórek</h3>
        <p className='column__text'>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
    </section>
  );
}

export default HomeThreeColumns;
