import { useDispatch } from "react-redux";
import sha256 from "crypto-js/sha256";

import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import Button from "./UI/Button";
import background from "../assets/background.jpg";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    const key = sha256(
      event.target.username.value + event.target.password.value
    );
    dispatch(authActions.setKey(key.toString()));
    //Submit login details to authorise
    dispatch(authActions.login());
  };

  return (
    <main className={classes.main} style={{backgroundImage: `url(${background})`,backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <section className={classes.auth}>
        
      <h1>The Big Read Challenge</h1>
      <p>Read all 100 books in your life time</p>
      <p>In April 2003 the BBC's Big Read began the search for the nation's best-loved novel</p>

        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="username"
              value="1"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value="1"
            />
          </div>
          <Button>Login or Register</Button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
