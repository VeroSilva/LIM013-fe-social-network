export const createUserAccount = (usuarioSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp);

export const user = () => firebase.firestore.auth().currenUser;

export const loginUser = (usuarioSignIn, passwordSignIn) => firebase
  .auth()
  .signInWithEmailAndPassword(usuarioSignIn, passwordSignIn)
  .then(() => {
    window.location.assign('#/timeline');
  });

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
  // .then((result) => {
  //   user = result.user;
  //   window.location.assign('#/timeline');
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
};

export const logOut = () => firebase.auth().signOut();
