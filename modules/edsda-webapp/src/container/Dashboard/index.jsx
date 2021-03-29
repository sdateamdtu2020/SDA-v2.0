import React from "react";
import { Main, Navbar, Sidebar } from "../index";
import { useStyles } from "./styles";
const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
