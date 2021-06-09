import React from "react";
import { useStyles } from "./styles";
const Output = () => {
  const classes = useStyles();
  return (
    <div className={classes.output}>
      <div className={classes.header}>OUTPUT</div>
    </div>
  );
};

export default Output;
