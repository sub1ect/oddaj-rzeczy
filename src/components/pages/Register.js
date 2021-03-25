import React from 'react';
import Title from '../molecules/Title';
import { NavLink } from 'react-router-dom';
import Navigation from '../organisms/Navigation';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='register'>
      <Navigation />
      <div className='center-content'>
        <Title text='Załóż konto' />
        <form className='form' onSubmit={handleSubmit}>
          <div className='form__inputs'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' />
            <label htmlFor='password'>Hasło</label>
            <input id='password' type='password' />
            <label htmlFor='passwordRepeat'>Powtórz hasło</label>
            <input id='passwordRepeat' type='password' />
          </div>
          <div className='form__btns'>
            <NavLink to='/login' activeClassName='active'>
              Zaloguj się
            </NavLink>
            <button type='submit' onClick>
              Załóż konto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
