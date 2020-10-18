export const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC5FldKTETVm2C3VywGvyXp9QtFWlVUl8g",
    authDomain: "mochileros-82a02.firebaseapp.com",
    databaseURL: "https://mochileros-82a02.firebaseio.com",
    projectId: "mochileros-82a02",
    storageBucket: "mochileros-82a02.appspot.com",
    messagingSenderId: "619963773256",
    appId: "1:619963773256:web:9f82ee37ac46d7775d437d",
    storageBucket: "gs://mochileros-82a02.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};
