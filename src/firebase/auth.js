export const auth = firebase.auth;

export const createUserAccount = (usuarioSignUp, passwordSignUp) => auth()
  .createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp);

export const loginUser = (usuarioSignIn, passwordSignIn) => auth()
  .signInWithEmailAndPassword(usuarioSignIn, passwordSignIn);

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth().signInWithPopup(provider)
    .then((result) => {
      console.log('Loggin with google');
      window.location.assign('#/timeline');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logOut = () => auth().signOut();
