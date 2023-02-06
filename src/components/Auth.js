import { useDispatch } from "react-redux";
import sha256 from 'crypto-js/sha256';

import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import Button from "./UI/Button";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    const key = sha256(event.target.username.value + event.target.password.value );
    dispatch(authActions.setKey(key.toString()));
    //Submit login details to authorise
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" value="1"/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" value="1"/>
          </div>
          <Button>Login</Button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
