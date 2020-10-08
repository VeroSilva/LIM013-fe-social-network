// configurando firebase mock
// importamos la funcion que vamos a testear
import { loginUser, createUserAccount, loginGoogle } from '../src/firebase/auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  //  use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

describe('loginUser', () => {
  it('debería ser una función', () => expect(typeof loginUser).toBe('function'));
  it('debería poder iniciar sesion con loginUser, hola123456', (done) => {
    loginUser('veronicasilva@gmail.com', 'hola123456').then((user) => {
      expect(user.email).toBe('veronicasilva@gmail.com');
      done();
    });
  });
});
describe('createUserAccount', () => {
  it('deberia ser una función', () => expect(typeof loginUser).toBe('function'));
  it('Debería crear usuario', () => {
    createUserAccount('verosilva@gmail.com', 'hola123456')
      .then((user) => {
        expect(user.email).toBe('veronicasilva@gmail.com');
        expect(user.password).toBe('hola123456');
        expect(user.isAnonymous).toBe(false);
      });
  });
});
describe('login with gmail', () => {
  it('should be a function', () => expect(typeof loginGoogle).toBe('function'));
  it('should login with google', (done) => {
    loginGoogle().then((user) => {
      expect(user.isAnonymous).toBe(false);
      expect(user.providerData[0].providerId).toBe('google.com');
      done();
    });
  });
});
