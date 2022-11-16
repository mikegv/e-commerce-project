import React, { FormEvent, useState } from "react";
import axios from "axios";
import { firebaseConfig } from "../../firebase-config"; //contains api key for firebase endpoints

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function emailChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function submitHandler(e: FormEvent, login: boolean) {
    e.preventDefault();
    let url: string;
    if (login) {
      //sign in with existing account endpoint
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    } else {
      //register new account endpoint
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }
    axios
      .post(`${url}${firebaseConfig.apiKey}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .then((res) => {
        console.log(res.data.idToken);
        setEmail('')
        setPassword('')
      });
  }

  return {
    email,
    password,
    emailChangeHandler,
    passwordChangeHandler,
    submitHandler
  };
};

export default useLogin;
