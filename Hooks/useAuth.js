import React, { Fragment, useState, useEffect } from "react";

import { firebase } from "../firebase";

function firebase_authenticate() {
  try {
    return {
      is_authenticated: true,
      //firebase,
      firebase_auth: firebase.auth(),
      currentUser: firebase.auth().currentUser,
      uid: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email
    };
  } catch (err) {
    return { firebase_auth: undefined, currentUser: undefined, uid: undefined, email: undefined };
  }
}

export function firebase_sign_out(callback) {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("callback");
      callback();
    })
    .catch(err => {
      console.log({ err });
    });
}

export function firebase_sign_in_anonymous(callback) {
  return firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      callback();
    })
    .catch(err => {
      console.log({ err });
    });
}

export function firebase_sign_up_anonymous({ callback, signUpState, updateSignUpState }) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(signUpState.email, signUpState.password)
    .then(() => callback())
    .catch(error => updateSignUpState({ ...signUpState, errorMessage: error.message }));
}

export function firebase_sign_in({ callback, signUpState, updateSignUpState }) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(signUpState.email, signUpState.password)
    .then(() => callback())
    .catch(error => updateSignUpState({ ...signUpState, errorMessage: error.message }));
}











export function firebase_sign_in_omar( username, password, navigate) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .then(() => navigate("Main"))
    // .catch(error => updateSignUpState({ ...signUpState, errorMessage: error.message }));
}











const useAuth = () => {
  const [firebase_auth, updateFirebaseAuth] = useState({});
  function firebase_check_update() {
    updateFirebaseAuth(firebase_authenticate());
  }
  useEffect(() => {
    if (firebase_auth.is_authenticated == undefined) {
      firebase_check_update();
    }
  }, [firebase_auth]);

  return { firebase_auth, firebase_check_update };
};

export default useAuth;

