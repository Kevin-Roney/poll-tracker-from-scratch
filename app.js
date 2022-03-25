// import functions and grab DOM elements
import { signUp, signIn, getUser } from './fetch-utils.js';
const signUpForm = document.querySelector('.sign-up');
const signInForm = document.querySelector('.sign-in');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    await signUp(data.get('email'), data.get('password'));
    const user = getUser();
    if (user) {
        window.location.href = './polls';
    }
});
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    await signIn(data.get('email'), data.get('password'));
    const user = getUser();
    if (user) {
        window.location.href = './polls';
    }
});