export default () => {
  const viewRegistro = `
    <div id="Registro">
        <div class="logotipo"><img src="images/logo-RedSocial.png"></div>
        <h2 class="styleH2">¡Se parte de esta comunidad!</h2>
        <div class="form">
        <input type="text" placeholder="Correo electrónico" id="usuarioSignUp">
        <input type="text" placeholder="Contraseña" id="contraseñaSignUp">
        <button type="submit" id="buttonSignUp">Registrate</button>
        </div>
        <div class="iniciaSesion"><p>¿Ya tienes una cuenta?</p><a href="#/">Inicia Sesión</a></div>
    </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegistro;
  const buttonSignUp = divElem.querySelector('#buttonSignUp');
  buttonSignUp.addEventListener('click', () => {
    const usuarioSignUp = divElem.querySelector('#usuarioSignUp').value;
    const passwordSignUp = divElem.querySelector('#contraseñaSignUp').value;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(usuarioSignUp, passwordSignUp)
      .then((userCredential) => {
        if (userCredential) {
          console.log('Ha logrado registrarse');
        } else {
          console.log('Ha ingresado algún dato inválido');
        }
      });
  });

  return divElem;
};
