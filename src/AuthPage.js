import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [formEmail, setFormEmail] = useState('');
  const [formPass, setFormPass] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(formEmail, formPass);
    setCurrentUser(user);
    setFormEmail('');
    setFormPass('');
  }

  async function handleSignUp() {
    const user = await signUp(formEmail, formPass);
    setCurrentUser(user);
    setFormEmail('');
    setFormPass('');
  }

  return (
    <>
      <h1>Welcome to My Favorite Restaurant List</h1>
      <p>Please Log In or Sign Up</p>
      <div className='auth-form'>
        <form onSubmit={handleSignIn}>
          <label>email
            <input type='text' value={formEmail} onChange={e => setFormEmail(e.target.value)}></input>
          </label>
          <label>password
            <input type='password' value={formPass} onChange={e => setFormPass(e.target.value)}></input>
          </label>
          <button type='submit'>Sign In</button>
          <button type='button' onClick={handleSignUp}>Sign Up</button>
        </form>
      </div>
    </>
  );
}
