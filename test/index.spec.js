/* global.firebase = MockFirebase(); */
// configurando firebase mock

// importamos la funcion que vamos a testear


/* const firebasemock = require('firebase-mock'); */

const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

import { loginUser } from '../src/firebase/auth.js';

describe('loginUser', () => {
  it('debería poder iniciar sesion con loginUser, hola123456', () => {
    return loginUser('veronicasilva@gmail.com', 'hola123456').then((user) =>{
      expect(user.email).toBe('veronicasilva@gmail.com');
    });
  });
});
