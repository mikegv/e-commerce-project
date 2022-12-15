import { useState } from "react";
import classes from "./login.module.css";
import useLogin from "./useLogin";
import { ScaleLoader } from 'react-spinners'
const Login = () => {

  let {
    email,
    reemail,
    password,
    emailChangeHandler,
    reemailChangeHandler,
    passwordChangeHandler,
    error,
    loading,
    setLoadingState,
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
        {!login &&
        <label>
          <span>Re-Enter Email:</span>
          <input
            type="text"
            value={reemail}
            onChange={(e) => reemailChangeHandler(e)}
          />
        </label>
        }
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

      {loading && 
      <ScaleLoader 
        color={'black'}
        loading={loading}
        />
      }

        {!loading &&
          <button type="submit">{login ? "Login" : "Register"}</button>
        }
      </form>
    </div>
  );
};

export default Login;
