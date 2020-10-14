const crud = {
  eliminar(id, firestoreDb) {
    firestoreDb
      .collection('posts')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Document successfuly deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  },

  editar(id, data, firestoreDb) {
    firestoreDb
      .collection('posts')
      .doc(id)
      .set(data)
      .then(() => {
        console.log('Document successfuly edited!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  },

  addPost(data, firestoreDb) {
    firestoreDb
      .collection('posts')
      .add(data)
      .then((docRef) => {
        console.log('post guardado');
      })
      .catch((error) => {});
  },
  leerPosts() {},
};

export { crud };
