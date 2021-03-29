import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "60px",
    width: "100%",
    borderRadius: "0 0 10px 10px",
    boxShadow: "0px 6px 10px -1px rgba(0,0,0,0.58)",
    padding: "5px 10px 10px 10px",
    alignItems: "center",
  },
  button: {
    margin: "0 10px !important",
    borderRadius: "10px !important",
    color: "#CFD8F0",
  },
}));
