import { logOut } from '../firebase/auth.js';

export default () => {
  const viewTimeline = `
    <div id="Pantalla">
        <button type="submit" id="buttonLogout">Cerrar sesión</button>
        <input type="text" placeholder="¿Como te sientes hoy?" id="postUser">
        <button type="submit" id="sendPost">Publicar</button>
    </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewTimeline;
  const buttonLogout = divElem.querySelector('#buttonLogout');
  buttonLogout.addEventListener('click', () => {
    logOut()
      .then(() => {
        window.location.assign('#/');
        console.log('¡Se cerró, lo logramos!');
      });
  });
  const firestoreDb = firebase.firestore();
  const sendPost = divElem.querySelector('#sendPost');
  sendPost.addEventListener('click', () => {
    const messagePost = divElem.querySelector('#postUser').value;
    firestoreDb.collection('posts').add({
      cometario: messagePost,
    })
      .then((docRef) => {
        alert(messagePost);
      })
      .catch((error) => {
      });
  });

  return divElem;
};
