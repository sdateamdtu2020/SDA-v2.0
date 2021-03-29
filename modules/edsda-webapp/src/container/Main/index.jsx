import React from "react";
import { useStyles } from "./styles";
const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h2>Main</h2>
    </div>
  );
};

export default Main;
