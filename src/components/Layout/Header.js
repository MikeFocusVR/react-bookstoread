import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../UI/Button";
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
      <h1>Big Read Tracker</h1>
      {isAuth && <Button onClick={logoutHandler}>Logout</Button>}
    </header>
  );
};

export default Header;
