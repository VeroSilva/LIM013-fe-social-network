export const createUserAccount = (usuarioSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp);

export const loginUser = (usuarioSignIn, passwordSignIn) => firebase.auth()
  .signInWithEmailAndPassword(usuarioSignIn, passwordSignIn);

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
  /* .then((result) => {
    console.log(result);
    window.location.assign('#/timeline');
  })
  .catch((err) => {
    console.log(err);
  });  */
};

export const logOut = () => firebase.auth().signOut();
