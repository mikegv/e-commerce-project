import React, { FormEvent, useState } from "react";
import axios from "axios";
// import { firebaseConfig } from "../../firebase-config"; //contains api key for firebase endpoints
import { authActions } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//mong username: admin
// mongo pw: ni17SBgsChvQX8T8



const useLogin = () => {
  const [email, setEmail] = useState("");
  const [reemail, setReemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function emailChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if(error !== ""){
      setError("")
    }
    setEmail(e.target.value);
  }
  function reemailChangeHandler(e: React.ChangeEvent<HTMLInputElement>){
    if(error !== ""){
      setError("")
    }
    setReemail(e.target.value);
  }
  function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function submitHandler(e: FormEvent, login: boolean) {
    e.preventDefault();
    let url: string;
    if(email !== reemail){
      setError('Email doesnt match')
      return
    }
    if (login) {
      //sign in with existing account endpoint
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    } else {
      //register new account endpoint
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }
    axios
      .post(`${url}${process.env.REACT_APP_API_KEY}`, {
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
      })
      .catch(err => {
        setError(err.response.data.error.message)
        setEmail('')
        setPassword('')
      }
      );
  }

  return {
    email,
    reemail,
    password,
    emailChangeHandler,
    reemailChangeHandler,
    passwordChangeHandler,
    error,
    submitHandler
  };
};

export default useLogin;
