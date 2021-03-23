import React from 'react';
import Title from '../molecules/Title';
import Footer from '../organisms/Footer';

function HomeContact() {
  return (
    <section className='contact'>
      <div className='contact__right'>
        <Title text='Skontaktuj się z nami' />
        <form class='form'>
          <div className='form-group'>
            <div>
              <label htmlFor='name'>Wpisz swoje imię</label>
              <input placeholder='Krzysztof' type='text' />
            </div>
            <div>
              <label htmlFor='name'>Wpisz swój email</label>
              <input placeholder='abc@xyz.pl' type='email' />
            </div>
          </div>
          <label htmlFor='text'>Wpisz swoją wiadomość</label>
          <textarea
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            name='text'
            id='text'
          ></textarea>
          <button type='submit'>Wyślij</button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default HomeContact;
