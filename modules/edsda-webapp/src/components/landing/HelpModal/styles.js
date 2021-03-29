import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    top: "40%",
    left: "30%",
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
}));
