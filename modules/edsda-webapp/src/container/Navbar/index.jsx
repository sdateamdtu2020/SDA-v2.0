import React, { useState } from "react";

import { useStyles } from "./styles";
import { useGlobalStyles } from "../../components/theme/GlobalStyles";

import { Button, IconButton, Modal } from "@material-ui/core";

import { FiMenu } from "react-icons/fi";
import {
  AiOutlineClose,
  AiOutlinePlusCircle,
  AiOutlineQuestionCircle,
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
} from "react-icons/ai";

import { HelpModal, ImportModal } from "../../components/landing";

const Navbar = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [showGroupButton, setShowGroupButton] = useState(true);
  const [showModalHelp, setShowModalHelp] = useState(false);
  const [showModalImport, setShowModalImport] = useState(false);

  return (
    <div className={classes.navbar}>
      <Modal
        open={
          showModalHelp
            ? showModalHelp
            : showModalImport
            ? showModalImport
            : null
        }
        onClose={() => {
          setShowModalHelp(false);
          setShowModalImport(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {showModalHelp ? (
          <HelpModal setShowModalHelp={setShowModalHelp} />
        ) : showModalImport ? (
          <ImportModal setShowModalImport={setShowModalImport} />
        ) : null}
      </Modal>
      <IconButton
        aria-label="delete"
        onClick={() => setShowGroupButton(!showGroupButton)}
      >
        {showGroupButton ? <AiOutlineClose /> : <FiMenu />}
      </IconButton>
      {showGroupButton ? (
        <>
          <Button
            variant="contained"
            color="primary"
            className={globalClasses.button}
            startIcon={<AiOutlinePlusCircle />}
          >
            NEW
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AiOutlineQuestionCircle />}
            onClick={() => setShowModalHelp(true)}
          >
            HELP
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AiOutlineCloudUpload />}
            onClick={() => setShowModalImport(true)}
          >
            IMPORT
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AiOutlineCloudDownload />}
          >
            EXPORT
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            EXAMPLE 1
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            EXAMPLE 2
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            EXAMPLE 3
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
