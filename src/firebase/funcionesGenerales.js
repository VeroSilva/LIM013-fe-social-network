const crud = {
  eliminar: function (id, firestoreDb) {
    firestoreDb
      .collection("posts")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfuly deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  },

  editar: function (id, data, firestoreDb) {
    firestoreDb
      .collection("posts")
      .doc(id)
      .set(data)
      .then(function () {
        console.log("Document successfuly edited!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  },

  addPost: function (data, firestoreDb) {
    firestoreDb
      .collection("posts")
      .add(data)
      .then((docRef) => {
        console.log("post guardado");
      })
      .catch((error) => {});
  },
  leerPosts: function () {},
};

export { crud };
