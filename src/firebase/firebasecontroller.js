import { logOut, loginGoogle } from './auth.js';

export const logOutEvent = () => {
  logOut()
    .then(() => {
      window.location.assign('#/');
      console.log('¡Se cerró, lo logramos!');
    });
};

export const loginGoogleEvent = () => {
  loginGoogle()
    .then(() => {
      console.log('entroo');
      // user = result.user;
      window.location.hash = '#/timeline';
    })
    .catch((err) => {
      console.log(err);
    });
};
