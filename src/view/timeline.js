import { logOutEvent } from "../firebase/firebasecontroller.js";
import { crud } from "../firebase/funcionesGenerales.js";
import { user } from "../firebase/auth.js";

export default () => {
  const divElem = document.createElement("div");
  const contenidoTimeline = `
    <div id="Pantalla">
        <button type="submit" id="buttonLogout">Cerrar sesión</button>
        <input type="text" placeholder="¿Como te sientes hoy?" id="postUser">
        <button  id="sendPost">Publicar</button>
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

  sendPost.addEventListener("click", () => {
    const messagePost = postUser.value;
    let data = {
      cometario: messagePost,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    crud.addPost(data, firestoreDb);
    postUser.value = "";
  });

  firestoreDb.collection("posts").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let div = document.createElement("div");
      div.id = `db_${doc.id}`;
      div.innerHTML = `
      <label>${doc.data().displayName}</label>
      <img src="${doc.data().photoURL}"> 
      <input value="${doc.data().cometario}" disabled>
      <button>Eliminar</button>
      <button>Editar</button>
      `;
      let buttonEliminar = div.querySelectorAll("button")[0];
      let buttonEditar = div.querySelectorAll("button")[1];
      let input = div.querySelector("input");
      buttonEliminar.addEventListener("click", (button) => {
        crud.eliminar(doc.id, firestoreDb);
      });

      buttonEditar.addEventListener("click", (button) => {
        if (input.disabled) {
          input.disabled = false;
          buttonEditar.innerText = "Guardar";
        } else {
          input.disabled = true;
          let data = {
            cometario: input.value,
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
