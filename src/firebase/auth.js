export const createUserAccount = (usuarioSignUp, passwordSignUp) => firebase.auth()
  .createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp);

export const user = () => firebase.auth().currentUser;

export const loginUser = (usuarioSignIn, passwordSignIn) => firebase
  .auth()
  .signInWithEmailAndPassword(usuarioSignIn, passwordSignIn);

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const logOut = () => firebase.auth().signOut();
