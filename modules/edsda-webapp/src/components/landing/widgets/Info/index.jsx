import React, { memo } from "react";
import { useStyles } from "./styles";
import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <h2>{data.title}</h2>
      {data.description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
});
