const form = document.querySelector('.login-form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (username === '' || password === '') {
    alert('Please enter a username and password.');
  } else {
    // send form data to server here
  }
});