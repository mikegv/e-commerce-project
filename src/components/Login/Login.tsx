import { useState } from "react";
import classes from "./login.module.css";

const Login = () => {
    const [login, setLogin] = useState(false)
  return (
    <div className={classes.loginContainer}>
      <div>
        <div onClick={()=>setLogin(!login)} className={login ? `${classes.tab} ${classes.active}` : classes.tab }>login</div>
        <div onClick={()=>setLogin(!login)} className={!login ? `${classes.tab} ${classes.active}` : classes.tab}>register</div>
      </div>
      <form className={classes.form}>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button>{login? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Login;
