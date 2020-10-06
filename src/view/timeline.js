import {logOut} from'../firebase/auth.js'
export default () => {
  const viewTimeline = `
    <div id="Pantalla">
        <button type="submit" id="buttonLogout">Cerrar sesión</button>
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

  return divElem;
};
