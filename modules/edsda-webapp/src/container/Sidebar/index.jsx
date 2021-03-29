import React from "react";
import { useStyles } from "./styles";
import logo from "../../assets/img/logo.webp";

import { List } from "../../components/landing";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <div className={classes.logoWrapper}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.dropdown}>
        <List />
      </div>
    </div>
  );
};

export default Sidebar;
