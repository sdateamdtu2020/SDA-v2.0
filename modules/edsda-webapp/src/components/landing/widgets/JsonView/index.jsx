import React, { memo } from "react";
import { useStyles } from "./styles";
import { useGlobalStyles } from "../../../theme/GlobalStyles";
import { Button, Typography } from "@material-ui/core";

import { Connector, JsonViewComponent } from "../../../common";
import { RiCloseLine } from "react-icons/ri";

export default memo(({ children, data }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [pending, setPending] = React.useState("");
  const [disable, setDisable] = React.useState(false);

  const handleRunButton = () => {
    setPending("Loading...");
    setDisable(true);
    setTimeout(() => {
      setPending("Ready to Run");
      setDisable(false);
    }, 1500);
  };

  return (
    <div className={classes.output} style={{ width: data.width }}>
      <Connector targetPosition={data.targetPosition} />
      <div className={classes.header}>
        <p>{data.title}</p>
        <RiCloseLine className={classes.icon} />
      </div>
      <div className={classes.body} style={{ height: data.height }}>
        <Button
          variant="contained"
          color="secondary"
          className={globalClasses.buttonSecondary}
          onClick={() => handleRunButton()}
          disabled={disable}
        >
          Run
        </Button>
        <JsonViewComponent></JsonViewComponent>
      </div>
    </div>
  );
});
