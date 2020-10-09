import { logOut } from '../firebase/auth.js';

export const logOutEvent = () => {
logOut()
      .then(() => {
        window.location.assign('#/');
        console.log('¡Se cerró, lo logramos!');
});
};
