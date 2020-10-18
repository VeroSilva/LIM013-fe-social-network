import { logOutEvent } from "../firebase/firebasecontroller.js";
import { crud } from "../firebase/funcionesGenerales.js";
import { user } from "../firebase/auth.js";

export default () => {
  const divElem = document.createElement("div");
  const contenidoTimeline = `
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
    <div id="tabla">
    </div>
  </div>`;
  divElem.innerHTML = contenidoTimeline;

  const buttonLogout = divElem.querySelector("#buttonLogout");
  const postUser = divElem.querySelector("#postUser");
  const sendPost = divElem.querySelector("#sendPost");
  const tabla = divElem.querySelector("#tabla");
  const firestoreDb = firebase.firestore();

  buttonLogout.addEventListener("click", logOutEvent);
  console.log(user().displayName);
  sendPost.addEventListener("click", () => {
    const messagePost = postUser.value;
    const data = {
      comentario: messagePost,
      displayName: user().displayName,
      photoURL: user().photoURL,
    };
    crud.addPost(data, firestoreDb);
    postUser.value = "";
  });

  firestoreDb.collection("posts").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(doc);
      const div = document.createElement("div");
      div.id = `db_${doc.id}`;
      div.innerHTML = `
      <div class="userData">
      <img src="${doc.data().photoURL}">
      <label>${doc.data().displayName}</label>
      </div>
      <input value="${doc.data().comentario}" disabled class="postedMessage">
      <div class="buttonsData">
        <button>Eliminar</button>
        <button>Editar</button>
      </div>
      `;
      const buttonEliminar = div.querySelectorAll("button")[0];
      const buttonEditar = div.querySelectorAll("button")[1];
      const input = div.querySelector("input");
      buttonEliminar.addEventListener("click", (button) => {
        crud.eliminar(doc.id, firestoreDb);
      });

      buttonEditar.addEventListener("click", (button) => {
        if (input.disabled) {
          input.disabled = false;
          buttonEditar.innerText = "Guardar";
        } else {
          input.disabled = true;
          const data = {
            comentario: input.value,
          };
          crud.editar(doc.id, data, firestoreDb);
        }
      });

      tabla.appendChild(div);
    });
  });
  // console.log(user.email);
  return divElem;
};
