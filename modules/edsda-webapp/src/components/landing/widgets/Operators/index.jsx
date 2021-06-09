import React, { memo } from "react";
import { useStyles } from "./styles";
import { useGlobalStyles } from "../../../theme/GlobalStyles";
import { Button } from "@material-ui/core";

import { Connector } from "../../../common";
import { RiCloseLine } from "react-icons/ri";

export default memo(({ children, data }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [pending, setPending] = React.useState("");
  const [disable, setDisable] = React.useState(false);

  React.useEffect(() => {
    setTimeout(handleRunButton, 3000);
  }, []);

  const handleRunButton = () => {
    setPending("Loading...");
    setDisable(true);
    setTimeout(() => {
      setPending("Data is ready to visualize");
      setDisable(false);
    }, 1500);
  };

  const stopEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className={classes.output} style={{ width: data.width }}>
      <Connector targetPosition={data.targetPosition} />
      <div className={classes.header}>
        <p>{data.title}</p>
        <RiCloseLine className={classes.icon} />
      </div>
      <div className={classes.body} onMouseDownCapture={stopEvent}>
        <Button
          variant="contained"
          color="secondary"
          className={globalClasses.buttonSecondary}
          onClick={() => handleRunButton()}
          disabled={disable}
        >
          Run
        </Button>
        <p>{pending}</p>
      </div>
    </div>
  );
});
