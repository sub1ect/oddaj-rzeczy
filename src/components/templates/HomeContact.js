import React, { useState } from 'react';
import Title from '../molecules/Title';
import Footer from '../organisms/Footer';

function HomeContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [namePH, setNamePH] = useState(true);
  const [emailPH, setEmailPH] = useState(true);
  const [textPH, setTextPH] = useState(true);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length &&
      !name.trim().includes(' ') &&
      validateEmail(email) &&
      text.length >= 120
    ) {
      const data = {
        name: name,
        email: email,
        message: text,
      };

      fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setName('');
      setNamePH(true);
      setEmail('');
      setEmailPH(true);
      setText('');
      setTextPH(true);
    } else {
      if (!name.length || name.trim().includes(' ')) {
        setName('');
        setNamePH(false);
        console.log('name not valid');
      }
      if (!validateEmail(email)) {
        setEmail('');
        setEmailPH(false);
        console.log('email not valid');
      }
      if (text.length < 120) {
        setText('');
        setTextPH(false);
        console.log('text not valid');
      }
    }
  };

  return (
    <section className='contact'>
      <div className='contact__right'>
        <Title text='Skontaktuj się z nami' />
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <div>
              <label htmlFor='name'>Wpisz swoje imię</label>
              <input
                id='name'
                placeholder={namePH || 'Wpisz imię jako jeden wyraz'}
                type='text'
                value={name}
                onChange={handleName}
                htmlFor='name'
                className={!textPH && 'alert'}
              />
            </div>
            <div>
              <label htmlFor='email'>Wpisz swój email</label>
              <input
                id='email'
                placeholder={emailPH || 'Email niepoprawny'}
                type='text'
                value={email}
                onChange={handleEmail}
                className={!textPH && 'alert'}
              />
            </div>
          </div>
          <label htmlFor='text'>Wpisz swoją wiadomość</label>
          <textarea
            placeholder={textPH || 'Wiadomość musi mieć minimum 120 znaków'}
            name='text'
            id='text'
            value={text}
            onChange={handleText}
            className={!textPH && 'alert'}
          ></textarea>
          <button type='submit'>Wyślij</button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default HomeContact;
