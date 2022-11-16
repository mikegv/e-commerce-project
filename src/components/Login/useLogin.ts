import React, { FormEvent, useState } from "react";
import axios from "axios";
import { firebaseConfig } from "../../firebase-config"; //contains api key for firebase endpoints
import { authActions } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        localStorage.setItem('token', res.data.idToken);
        dispatch(authActions.login());
        setEmail('')
        setPassword('')
        navigate('/profile');
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
