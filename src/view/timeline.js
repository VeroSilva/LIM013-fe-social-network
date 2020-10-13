import { logOutEvent } from '../firebase/firebasecontroller.js';

export default () => {
  const viewTimeline = `
  <div id="Pantalla">
    <div id="cabecera">
      <img src="https://img.icons8.com/color/48/000000/user-female-circle.png"/>
      <div class="logotipoTimeline"><img src="images/logo-RedSocial.png"></div>
      <button type="submit" id="buttonLogout">Cerrar sesión</button>
    </div>
    <div class="prepost">
      <input type="text" placeholder="¿Como te sientes hoy?" id="postUser">
      <button type="submit" id="sendPost">Publicar</button>
    </div>
      <div id="posted">
      </div>
  </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewTimeline;
  const buttonLogout = divElem.querySelector('#buttonLogout');
  buttonLogout.addEventListener('click', logOutEvent);
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
