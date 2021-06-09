import React, { memo } from "react";
import { useStyles } from "./styles";

import { Connector, TreeCity } from "../../../common";
import { RiCloseLine } from "react-icons/ri";

export default memo(({ children, data }) => {
  const classes = useStyles();
  return (
    <div className={classes.output} style={{ width: data.width }}>
      <Connector targetPosition={data.targetPosition} />
      <div className={classes.header}>
        <p>{data.title}</p>
        <RiCloseLine className={classes.icon} />
      </div>
      <TreeCity items={data.items} height={data.height} />
    </div>
  );
});
