import { crud } from '../src/firebase/funcionesGenerales.js';

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

describe.only('Agregar post', () => {
  it.only('should add post', (done) => {
    const data = {
      comentario: 'comentario',
      displayName: 'name',
      photoURL: 'http://',
    }
    // en firestore  no existe un post con el comentario `comentario`
    firebase.firestore().collection('posts').get()
      .then((result) => {
        console.log(result.data);
        expect(Object.values(result.data).filter((p) => p.comentario === data.comentario).length).toBe(0);
        return crud.addPost(data)      
      })
      .then((docRef) => {
        // en firestore existe un post con el comentario `comentario`
        return firebase.firestore().collection('posts').get()
      })
      .then((result2) => {
        expect(Object.values(result2.data).filter((p) => p.comentario === data.comentario).length).toBe(1);
        done();
      });
  });
});
