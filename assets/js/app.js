init = () => {
  const config = {
    apiKey: 'AIzaSyCrkaDhgZ2dQo1tRAX96SAKEQjhf4iYAOM',
    authDomain: 'wot1-domotica.firebaseapp.com',
    databaseURL: 'https://wot1-domotica.firebaseio.com',
    projectId: 'wot1-domotica',
    storageBucket: 'wot1-domotica.appspot.com',
    messagingSenderId: '745515152004'
  };
  firebase.initializeApp(config);
};

createPixels = () => {
  let container = document.querySelector('.grid-container');
  for (let i = 0; i < 64; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.innerHTML = `${i}`;
    container.appendChild(pixel);
  }
};

let message = document.querySelector('.message');

signUp = () => {
  let signup = document.querySelector('.signup');
  signup.addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('.email-signup').value;
    let password = document.querySelector('.password-signup').value;

    if (email && password) {
      message.innerHTML = '';
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(`${errorCode}: ${errorMessage}`);
        });
    } else {
      message.innerHTML = 'Please enter your credentials.';
    }
  });
};

login = () => {
  let login = document.querySelector('.login');
  login.addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('.email-login').value;
    let password = document.querySelector('.password-login').value;

    if (email && password) {
      message.innerHTML = '';
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(`${errorCode}: ${errorMessage}`);
        });
    } else {
      err.innerHTML = 'Please enter your credentials.';
    }
  });
};

/* TODO: Show page when logged in, manipulation of the grid */

init();

createPixels();

signUp();

login();
