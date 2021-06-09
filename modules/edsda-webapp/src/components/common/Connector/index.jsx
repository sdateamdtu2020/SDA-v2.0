import React from "react";
import { Handle } from "react-flow-renderer";
import { useStyles } from "./styles";
const Connector = ({ targetPosition }) => {
  const classes = useStyles();

  let connector;

  const connectorLeft = (
    <>
      <Handle
        type="target"
        position="left"
        className={`${classes.connectorLeft} ${classes.connector}`}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </>
  );

  const connectorRight = (
    <>
      <Handle
        type="source"
        position="right"
        className={`${classes.connectorRight} ${classes.connector}`}
      />
    </>
  );

  if (targetPosition === "left") {
    connector = connectorLeft;
  } else if (targetPosition === "right") {
    connector = connectorRight;
  } else {
    connector = (
      <>
        {connectorLeft}
        {connectorRight}
      </>
    );
  }
  return <div>{connector}</div>;
};

export default Connector;
