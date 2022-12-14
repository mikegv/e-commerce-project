import React, { FormEvent, useState } from "react";
import axios from "axios";
// import { firebaseConfig } from "../../firebase-config"; //contains api key for firebase endpoints
import { authActions } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../redux/cart";



const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [reemail, setReemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setLoadingState(){
    setLoading(prev => !prev);
  }
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
    if(!login && email !== reemail){ //check re-entered email if registering only not on regular login
      setError('Email doesnt match')
      return
    }
    

    if (login) {
      //sign in with existing account endpoint
      // url = 'http://localhost:3000/auth/login'
      url ='https://ulayuk23e4.execute-api.us-west-1.amazonaws.com/dev/auth/login'
        // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    } else {
      //register new account endpoint
      // url = 'http://localhost:3000/auth/register'
      url = 'https://ulayuk23e4.execute-api.us-west-1.amazonaws.com/dev/auth/register'
      // url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }
    setLoadingState();
    axios
      .post(`${url}`, {
        userName: email,
        password,
        // returnSecureToken: true,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        setEmail('')
        setPassword('')
      
        let token = localStorage.getItem("token");
        if(token){
          axios.get('https://ulayuk23e4.execute-api.us-west-1.amazonaws.com/dev/auth/cart',
           {
            headers: {
              'Authorization': `Bearer ${token}` 
            }})
          .then(res => {
            // console.log('axios cart GET response', res)
            dispatch(cartActions.replaceCart(res.data.cart));
            dispatch(authActions.login());
            navigate('/profile');
          })
          .catch(err => console.log(err))
          }
        
      })
      .catch(err => {
        setError(err.response.data.error.message);
        setEmail('');
        setReemail('');
        setPassword('');
        setLoadingState();
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
    loading,
    setLoadingState,
    submitHandler
  };
};

export default useLogin;
