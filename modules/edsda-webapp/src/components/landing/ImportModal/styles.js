import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    top: "40%",
    left: "40%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #AAAAAA",
    boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    outline: "none",
  },
  header: {
    backgroundColor: "#EDF5F8",
    padding: "5px 10px",
    position: "relative",
    borderRadius: "10px 10px 0 0",
  },
  closeButton: {
    position: "absolute",
    fontSize: "30px",
    top: "-10px",
    right: "-14px",

    "& svg": {
      backgroundColor: "#EDF5F8",
      borderRadius: "50%",
    },
  },
  body: {
    padding: "10px",
  },
  step: {
    width: "100%",
    backgroundColor: "transparent !important",
    padding: "0",
    marginBottom: "10px",
  },
  input: {
    marginTop: "10px !important",
    fontSize: "16px",
    outline: "none",
  },
  groupButton: {
    marginTop: "10px",
  },
  buttonUpload: {
    marginLeft: "0px !important",
  },
  buttonClear: {
    marginLeft: "0px !important",
  },
  typoStep3: {
    marginTop: "10px",
  },
  textField: {
    width: "100%",
  },
}));
