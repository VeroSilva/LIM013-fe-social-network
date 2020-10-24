import { logOut, loginGoogle, loginUser } from './auth.js';

export const logOutEvent = () => {
  logOut().then(() => {
    window.location.assign('#/');
  });
};

export const loginGoogleEvent = () => {
  loginGoogle()
    .then(() => {
      window.location.hash = '#/timeline';
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUserEvent = (user, password, divElem) => {
  loginUser(user, password)
    .then((userCredential) => {
      console.log(`estas son mis credenciales${userCredential}`);
      window.location.assign('#/timeline');
    })
    .catch((err) => {
      const errorContainer = divElem.querySelector('#errorMessage');
      const templateError = `<div class="modal-error"><p>Hubo un problema: ${err.message}</p></div>`;
      errorContainer.innerHTML = templateError;
    });
};
