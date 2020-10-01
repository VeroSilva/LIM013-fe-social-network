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
  return divElem;
};

// const usuarioSignUp = document.querySelector('#usuarioSignUp');
// console.log(usuarioSignUp)
