import { logOutEvent } from '../firebase/firebasecontroller.js';
import { crud, getDataSnapshot } from '../firebase/funcionesGenerales.js';
import { user } from '../firebase/auth.js';

export default () => {
  const contenidoTimeline = `
  <div id="Pantalla">
    <div id="cabecera">
      <img id="imageProfile" src='../images/user.png'/>
      <div class="logotipoTimeline"><img src="images/logo-RedSocial.png"></div>
      <button type="submit" id="buttonLogout">Cerrar sesión</button>
    </div>
    <div class="hide" id="modalProfile">
      <div class="modal">
        <h2>Profile</h2>
        <div class="updateData">
          <input type="text" placeholder="Update name" name="name" id="nameUser">
          <input type="file" id="fotoUser" class="hide" />
          <label for="fotoUser" id="selector" class="labelUpdatePhoto"> 
            <span class="material-icons">add_photo_alternate</span>
            Choose a photo 
          </label>
        </div>
        <button id="updateButton">Update</button>
        <span id="modalClose" class="modalClose">x</span>
      </div>
    </div>
    <div class="prepost">
      <input type="text" placeholder="¿Como te sientes hoy?" id="postUser">
      <button type="submit" id="sendPost">Publicar</button>
    </div>
    <div id="tabla">
    </div>
  </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = contenidoTimeline;

  const modalProfile = divElem.querySelector('#modalProfile');
  const modalClose = divElem.querySelector('#modalClose');
  const imageProfile = divElem.querySelector('#imageProfile');
  const fotoUser = divElem.querySelector('#fotoUser');
  const buttonLogout = divElem.querySelector('#buttonLogout');
  const postUser = divElem.querySelector('#postUser');
  const sendPost = divElem.querySelector('#sendPost');
  const tabla = divElem.querySelector('#tabla');
  const updateButton = divElem.querySelector('#updateButton');
  const currentUser = firebase.auth().currentUser;

  const loaderUpdate = (e) => {
    const file = e.target.files;
    const show = `<span class="fileSelected">Selected file: </span> ${file[0].name}`;
    const output = divElem.querySelector('#selector');
    output.innerHTML = show;
  };

  const fileInput = divElem.querySelector('#fotoUser');
  fileInput.addEventListener('change', loaderUpdate);

  modalClose.addEventListener('click', () => {
    modalProfile.classList.add('hide');
    modalProfile.classList.remove('display');
    modalProfile.classList.remove('modalProfile');
  });
  imageProfile.addEventListener('click', () => {
    modalProfile.classList.add('display');
    modalProfile.classList.add('modalProfile');
    modalProfile.classList.remove('hide');
  });
  updateButton.addEventListener('click', () => {
    const imagesUpload = fotoUser.files[0];
    const nameUser = divElem.querySelector('#nameUser').value;
    crud.updateImage(imagesUpload, nameUser);

    modalProfile.classList.add('hide');
    modalProfile.classList.remove('display');
    modalProfile.classList.remove('modalProfile');
  });
  buttonLogout.addEventListener('click', logOutEvent);
  sendPost.addEventListener('click', () => {
    const messagePost = postUser.value;
    const data = {
      comentario: messagePost,
      displayName: user().displayName,
      photoURL: user().photoURL,
      userid: user().uid,
      date: new Date(),
    };
    crud.addPost(data);
    postUser.value = '';
  });
  getDataSnapshot('posts', (querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const div = document.createElement('div');
      div.id = `db_${doc.id}`;
      div.innerHTML = `
      <div class="userData">
      <img src="${doc.data().photoURL}">
      <label>${doc.data().displayName}</label>
      </div>
      <input value="${doc.data().comentario}" disabled class="postedMessage">
      <div class="buttonsData">
        <button>Editar</button>
        <button>Eliminar</button>
      </div>
      `;
      const buttonEliminar = div.querySelectorAll('button')[1];
      const buttonEditar = div.querySelectorAll('button')[0];
      const input = div.querySelector('input');
      if (!(doc.data().userid === currentUser.uid)) {
        buttonEliminar.classList.add('hide');
        buttonEditar.classList.add('hide');
      }
      buttonEliminar.addEventListener('click', () => {
        crud.eliminar(doc.id);
      });
      buttonEditar.addEventListener('click', () => {
        if (input.disabled) {
          input.disabled = false;
          buttonEditar.innerText = 'Guardar';
        } else {
          input.disabled = true;
          const data = {
            comentario: input.value,
          };
          crud.editar(doc.id, data);
        }
      });
      tabla.appendChild(div);
    });
  });
  return divElem;
};
