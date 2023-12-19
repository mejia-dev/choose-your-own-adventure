import React from 'react';
import { useState } from 'react';
import { auth } from './../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";

function SignIn(props) {

    const [signUpSuccess, setSignUpSuccess] = useState(null);
    const [signInSuccess, setSignInSuccess] = useState(null);
    
    function doSignUp(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
            })
            .catch((error) => {
                setSignUpSuccess(`There was an error signing up: ${error.message}`)
            });
    }

    function doSignIn(event) {
        event.preventDefault();
        const email = event.target.signinEmail.value;
        const password = event.target.signinPassword.value;
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            props.signOutMessage(null)
            setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`);
            props.changePage(1);
          })
          .catch((error) => {
            setSignInSuccess(`There was an error signing in: ${error.message}!`)
          });
      }

    return (
        <React.Fragment>
      <h1>Sign up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

      <h1>Sign In</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
      <br />
      {/* <button onClick={doSignOut}>Sign out</button> */}
    </React.Fragment>
  );
}

SignIn.propTypes = {
  changePage: PropTypes.func
}

export default SignIn
