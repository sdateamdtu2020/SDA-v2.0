import React, { memo } from "react";
import { useStyles } from "./styles";

export default memo(({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <h2>{data.title}</h2>
    </div>
  );
});
