export default () => {
  const viewTimeline = `
    <div id="Pantalla">
        <button type="submit" id="buttonLogout">Cerrar sesión</button>
    </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewTimeline;
  const buttonLogout = divElem.querySelector('#buttonLogout');
  buttonLogout.addEventListener('click', () => {
    const auth = firebase.auth();
    auth.signOut()
      .then(() => {
        console.log('¡Se cerró, lo logramos!');
      });
  });

  return divElem;
};