import { logOut, loginGoogle, user } from './auth.js';

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
