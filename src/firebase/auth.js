export const auth = firebase.auth; 

export const createUserAccount = (usuarioSignUp, passwordSignUp) => 
  auth().createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp);

export const loginUser = (usuarioSignIn, passwordSignIn) =>
  auth().signInWithEmailAndPassword(usuarioSignIn, passwordSignIn);

export const logOut = () => auth().signOut();