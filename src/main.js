// Este es el punto de entrada de tu aplicacion
import { firebaseInit } from './firebase/firebase-init.js';
import { changeView } from './view-controler/router.js';

// Funcionalidad para las vistas

const init = () => {
  firebaseInit();
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

console.log('Estoy probando mi nueva rama', init);

window.addEventListener('load', init);
