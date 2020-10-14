/*import { logOutEvent } from "../firebase/firebasecontroller.js";

export default () => {
  const viewTimeline = `
    <div id="Pantalla">
    <div id="cabecera">
        <button type="submit" id="buttonLogout">Cerrar sesión</button>
    </div>
    <div class="prepost">
        <input type="text" placeholder="¿Como te sientes hoy?" id="postUser">
        <button type="submit" id="sendPost">Publicar</button>
    </div>         
      <div id="posted"> 
      </div>            
    </div>`;

  const divElem = document.createElement("div");
  divElem.innerHTML = viewTimeline;
  const buttonLogout = divElem.querySelector("#buttonLogout");
  buttonLogout.addEventListener("click", logOutEvent);
  const firestoreDb = firebase.firestore();
  const sendPost = divElem.querySelector("#sendPost");
  sendPost.addEventListener("click", () => {
    const messagePost = divElem.querySelector("#postUser").value;
    firestoreDb
      .collection("posts")
      .add({
        cometario: messagePost,
      })
      .then((docRef) => {
        alert(messagePost);
      })
      .catch((error) => {});
  });

  return divElem;
};



import { logOutEvent } from "../firebase/firebasecontroller.js";
import { funciones } from "../firebase/funcionesGenerales.js";
console.log(funciones.eliminar);
export default () => {
  const viewTimeline = `
    <div id="Pantalla">
     </div id="modalUser">
        <a><img id="imgUserProfile" src'/public/img/user.pmg' style= "width:30%
        <section id="sectionUser">
        <label><b>Nombre Completo</b></label>
        <imput id="userNameImput" type="text" placeholder="Nombre completo">
        <label><b>Email</b></label>
        <imput id="userEmailImput" type="text" placeholder="Email">
        <label><b>Password</b></label>
        <imput id="userPaswordImput" type="text" placeholder="Password">
        <button type="submit" id="buttonLogout">Cerrar sesión</button>
        <input type="text" placeholder="¿Como te sientes hoy?" id="postUser">
        <button type="submit" id="sendPost">Publicar</button>
        <div id="tabla">
        </div>
      </div>         
    </div>`;
  const divElem = document.createElement("div");
  divElem.innerHTML = viewTimeline;
  const firestoreDb = firebase.firestore();
  const tabla = divElem.querySelector("#tabla");

  const setearBotones = (buttonEliminar, buttonEditar, div) => {
    buttonEliminar.addEventListener("click", (button) => {
      let div = button.target.parentElement;
      console.log(button.target, div);
      let id = div.id.split("db_")[1];
      funciones.eliminar(id);
      div.innerHTML = "";
    });
    buttonEditar.addEventListener("click", (button) => {
      let div = button.target.parentElement;
      let input = div.querySelector("input");
      let editar = button.target;
      if (input.disabled) {
        input.disabled = false;
        editar.innerText = "Guardar";
      } else {
        input.disabled = true;
        console.log(button.target, div);
        let data = {
          cometario: input.value,
        };
        let id = div.id.split("db_")[1];
        funciones.editar(id, data);
      }
    });
  };
  firestoreDb.collection("posts").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().cometario}`);
      let div = document.createElement("div");
      div.id = `db_${doc.id}`;
      div.innerHTML = `
      <input value="${doc.data().cometario}" disabled>
      <button>Eliminar</button>
      <button>Editar</button>
      `;
      tabla.appendChild(div);
      let buttonEliminar = div.querySelectorAll("button")[0];
      let buttonEditar = div.querySelectorAll("button")[1];
      setearBotones(buttonEliminar, buttonEditar, div);
    });
  });

  const buttonLogout = divElem.querySelector("#buttonLogout");
  buttonLogout.addEventListener("click", logOutEvent);

  const sendPost = divElem.querySelector("#sendPost");
  sendPost.addEventListener("click", () => {
    const messagePost = divElem.querySelector("#postUser").value;
    firestoreDb
      .collection("posts")
      .add({
        cometario: messagePost,
      })
      .then((docRef) => {
        console.log("Document written with ID:", docRef.id);
        divElem.querySelector("#postUser").value = "";
        let div = document.createElement("div");
        div.id = `db_${docRef.id}`;
        `
        <div>${docRef.id}</div>
         <input value="${messagePost}" disabled>
         <button>Eliminar</button>
         <button>Editar</button>`;
        tabla.appendChild(div);
        let buttonEliminar = div.querySelectorAll("button")[0];
        let buttonEditar = div.querySelectorAll("button")[1];
        setearBotones(buttonEliminar, buttonEditar, div);
      })
      .catch((error) => {});
  });

  return divElem;
};

/*
firebase.auth().onAusthStateChanged(function (user) {
  if (user) {
    $("#userNameImput").val(user.displayName);
    $("#userEmailImput").val(user.email);
  } else {
    //no user is signed
  }
});

$scope.userLogout = function () {
  firebase
    .auth()
    .signOut()
    .then(function () {
      window.location = "login.html";
    })
    .catch(function (error) {});
};


//leer documentos
//
    firestoreDb
      .collection("posts")
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs);
      });
*/
