import React, { memo } from "react";
import { useStyles } from "./styles";
import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <img src={data.url} alt="logo" />
    </div>
  );
});
