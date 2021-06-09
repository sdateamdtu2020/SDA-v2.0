import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  connector: {
    position: "absolute",

    border: "none",

    backgroundColor: "var(--border-color)",

    width: "20px",
    height: "100%",
  },

  connectorRight: {
    top: "50%",
    right: "-20px",
    borderRadius: "0 20px 20px 0",
  },

  connectorLeft: {
    top: "50%",
    left: "-20px",
    borderRadius: "20px 0 0 20px",
  },
}));
