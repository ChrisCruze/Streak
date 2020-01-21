import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyD0RdHCra6P6639Ho_1FuxEq3MGQyxV0Lw",
//   authDomain: "taskrrrr.firebaseapp.com",
//   databaseURL: "https://taskrrrr.firebaseio.com",
//   projectId: "taskrrrr",
//   storageBucket: "taskrrrr.appspot.com",
//   messagingSenderId: "717116545352"
// });
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDXMl7F3wScMfNTw0hJRH6Qf_XKSFFUqEU",
  authDomain: "cruz-7aa89.firebaseapp.com",
  databaseURL: "https://cruz-7aa89.firebaseio.com",
  projectId: "cruz-7aa89",
  storageBucket: "cruz-7aa89.appspot.com",
  messagingSenderId: "13092587340",
  appId: "1:13092587340:web:f93d7a2b23e9f299f1b1e9"
});
export { firebaseConfig as firebase };