export const createUserAccount = (usuarioSignUp, passwordSignUp) =>
  firebase.auth().createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp);

export const loginUser = (usuarioSignIn, passwordSignIn) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(usuarioSignIn, passwordSignIn)
    .then((userCredential) => {
      console.log(userCredential);
      user = userCredential.user;
      window.location.assign("#/timeline");
    });

export let user = null;

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const auth = firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
      user = result.user;
      window.location.assign("#/timeline");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logOut = () => firebase.auth().signOut();
