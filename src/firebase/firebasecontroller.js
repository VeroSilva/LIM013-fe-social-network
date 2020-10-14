import { logOut, loginGoogle } from "../firebase/auth.js";

export const logOutEvent = () => {
  logOut().then(() => {
    window.location.assign("#/");
    console.log("¡Se cerró, lo logramos!");
  });
};

// export const loginGoogleEvent = () => {
//   loginGoogle()
//     .then((result) => {
//       console.log(result.user);
//       user = result.user;
//       window.location.assign("#/timeline");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
