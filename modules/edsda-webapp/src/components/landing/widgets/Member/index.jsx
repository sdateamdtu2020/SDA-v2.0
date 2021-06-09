import React, { memo } from "react";
import { useStyles } from "./styles";

export default memo(({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <div className={classes.left}>
        <h2>Name: {data.fullName}</h2>
        <h2>Role: {data.role}</h2>
        <h2>Email: {data.email}</h2>
        <h2>{data.className}</h2>
        <h2>{data.working}</h2>
      </div>
      <div className={classes.right}>
        <img src={data.url} alt="logo" />
      </div>
    </div>
  );
});
