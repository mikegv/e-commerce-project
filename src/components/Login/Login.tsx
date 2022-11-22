import { useState } from "react";
import classes from "./login.module.css";
import useLogin from "./useLogin";

const Login = () => {

  let {
    email,
    password,
    emailChangeHandler,
    passwordChangeHandler,
    error,
    submitHandler,
  } = useLogin();

  const [login, setLogin] = useState(true);

  return (
    <div className={classes.loginContainer}>
      <div>
        <div
          onClick={() => setLogin(!login)}
          className={login ? `${classes.tab} ${classes.active}` : classes.tab}
        >
          login
        </div>
        <div
          onClick={() => setLogin(!login)}
          className={!login ? `${classes.tab} ${classes.active}` : classes.tab}
        >
          register
        </div>
      </div>
      <form className={classes.form} onSubmit={(e) => submitHandler(e, login)}>
        <label>
          <span>Email:</span>
          <input
            type="text"
            value={email}
            onChange={(e) => emailChangeHandler(e)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => passwordChangeHandler(e)}
          />
        </label>
        <span className={classes.error}>
          {error}
        </span>
        <button type="submit">{login ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};

export default Login;
