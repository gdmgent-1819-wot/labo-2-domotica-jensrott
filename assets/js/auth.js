firebase.initializeApp(config);

/* Buttons */
let login = document.querySelector('.login');
let signup = document.querySelector('.signup');
let logout = document.querySelector('.logout');
console.log(logout);

/* Text */
let message = document.querySelector('.message');

/* Containers */
let login_register_section = document.querySelector('.login-register-section');
let main_board_section = document.querySelector('.main-board-section');

console.log(login_register_section, main_board_section);

signup.addEventListener('submit', e => {
  e.preventDefault();
  let email = document.querySelector('.email-signup').value;
  let password = document.querySelector('.password-signup').value;

  if (email && password) {
    message.style.display = 'none';
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
    message.style.display = 'block';
    message.innerHTML = 'Please enter your credentials.';
  }
});

login.addEventListener('submit', e => {
  e.preventDefault();
  let email = document.querySelector('.email-login').value;
  let password = document.querySelector('.password-login').value;

  if (email && password) {
    message.style.display = 'none';
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
  } else {
    message.style.display = 'block';
    message.innerHTML = 'Please enter your credentials.';
  }
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    localStorage.setItem('user', JSON.stringify(user));
    message.style.display = 'block';
    message.innerHTML = `Welcome, logged in as : ${user.email}`;
    login_register_section.style.display = 'none';
    main_board_section.style.display = 'block';
  } else {
    // User is signed out.
    localStorage.clear();
    login_register_section.style.display = 'block';
    main_board_section.style.display = 'none';
  }
});

logout.addEventListener('click', e => {
  e.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(() => {
      message.style.display = 'none';
      main_board_section.style.display = 'none';
      login_register_section.style.display = 'block';
    })
    .catch(error => {
      console.log(error);
    });
});
