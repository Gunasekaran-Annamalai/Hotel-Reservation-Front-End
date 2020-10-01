const loginContainer = document.querySelector('.login-container');
const closeButton1 = document.querySelector('#close-btn-1');
const login = document.querySelector('#login');

const signupContainer = document.querySelector('.signup-container');
const closeButton2 = document.querySelector('#close-btn-2');
const signup = document.querySelector('#signup');

const container = document.querySelector('.container');

login.addEventListener('click', ()=> {
  loginContainer.classList.add('display');
  container.classList.add('blur');
  document.body.style.overflow = 'hidden';
})

closeButton1.addEventListener('click', ()=> {
  loginContainer.classList.remove('display');
  container.classList.remove('blur');
  document.body.style.overflow = 'visible';
})

signup.addEventListener('click', ()=> {
  signupContainer.classList.add('display');
  container.classList.add('blur');
  document.body.style.overflow = 'hidden';
})

closeButton2.addEventListener('click', ()=> {
  signupContainer.classList.remove('display');
  container.classList.remove('blur');
  document.body.style.overflow = 'visible';
})