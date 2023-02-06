import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <div className={classes.headercontainer}>
        <a
          href="https://main.d399grsiasrqse.amplifyapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h1>Big Read Tracker</h1>
        </a>
        {isAuth && (
          <div onClick={logoutHandler} className={classes.logout}>
            Logout
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
