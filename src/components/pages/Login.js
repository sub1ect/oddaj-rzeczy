import React from 'react';
import Title from '../molecules/Title';
import { NavLink } from 'react-router-dom';
import Navigation from '../organisms/Navigation';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='login'>
      <Navigation />
      <div className='center-content'>
        <Title text='Zaloguj się' />
        <form className='form' onSubmit={handleSubmit}>
          <div className='form__inputs'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' htmlFor='email' />
            <label htmlFor='password'>Hasło</label>
            <input id='password' type='password' htmlFor='password' />
          </div>
          <div className='form__btns'>
            <NavLink to='/register' activeClassName='active'>
              Załóż konto
            </NavLink>
            <button type='submit' onClick>
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
