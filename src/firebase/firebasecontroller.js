import {
  logOut, loginGoogle, user, loginUser,
} from './auth.js';

export const logOutEvent = () => {
  logOut().then(() => {
    window.location.assign('#/');
    console.log('¡Se cerró, lo logramos!');
  });
};
export const loginGoogleEvent = () => {
  loginGoogle()
    .then((result) => {
      console.log('entroo');
      const usuario = result;
      console.log(usuario);
      window.location.hash = '#/timeline';
      console.log(user());
    })
    .catch((err) => {
      console.log(err);
    });
};
export const loginUserEvent = (user, password, errorContainer) => {
  loginUser(user, password)
    .then(() => {
      window.location.assign('#/timeline');
    })
    .catch((error) => {
      const templateError = `<div class="modal-error"><p>Hubo un problema: ${error.message}</p></div>`;
      errorContainer.innerHTML = templateError;
    });
};
