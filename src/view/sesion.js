export default () => {
  const viewSesion = `
    <div id="inicio-sesion">
        <div class="cabecera"><img src="images/mochilerosqueda.svg"></div>
        <div class="logotipo"><img src="images/logo-RedSocial.png"></div>
        <h2 class="styleH2">¡Bienvenido mochilero!</h2>
        <div class="form">
        <input type="text" placeholder="Correo electrónico" id="usuarioSignIn">
        <input type="text" placeholder="Contraseña" id="contraseñaSignIn">
        <button type="submit" id="buttonSignIn">Iniciar sesión</button>
        </div>
        <p class="textoSignIn">Iniciar sesión con Google o Facebook</p>
        <div class="signInRS">
            <img src="images/faceb.png">
            <img src="images/google.png">
        </div>
        <div class="registrate"><p>¿No tienes una cuenta?</p><a href="#/registro">Regístrate</a></div>
    </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewSesion;
  return divElem;
};
