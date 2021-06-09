import React from "react";
import { useStyles } from "./styles";
const Logs = () => {
  const classes = useStyles();
  return (
    <div className={classes.logs}>
      <div className={classes.header}>LOGS</div>
      <div className={classes.logsOutput}>
        <div className={classes.output}></div>
        <input
          type="text"
          className={classes.input}
          placeholder="type '/help' to see the commands"
        />
      </div>
    </div>
  );
};

export default Logs;
