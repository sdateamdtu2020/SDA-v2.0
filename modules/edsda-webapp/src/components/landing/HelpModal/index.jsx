import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { AiOutlineCloseCircle } from "react-icons/ai";
const HelpModal = ({ setShowModalHelp }) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.header}>
        <Typography variant="h6">Help</Typography>
        <div
          className={classes.closeButton}
          onClick={() => setShowModalHelp(false)}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
      <div className={classes.body}>
        <Typography variant="subtitle1">
          This application shows how enviroment expert can be used in an
          innovative way. <br />
          <b>Drag and drop widgets </b>from the widget list on the left to the
          working layer in the middle and connect them.
          <br />
          You can click the Example Buttons above to get an idea... <br />
          Close this dialog to test the{" "}
          <b>Expert-driven Smart Dashboard Application</b>
          <br />
          Feedback is welcome via our Github (@sdateamdtu2020):{" "}
          <a
            href="https://github.com/sdateamdtu2020/SDA-v2.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default HelpModal;
