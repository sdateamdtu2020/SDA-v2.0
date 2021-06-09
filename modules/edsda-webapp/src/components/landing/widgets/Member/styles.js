import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  info: {
    width: "450px",
    // backgroundColor: "var(--background-color)",
    color: "var(--text-primary)",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& h2": {
      fontSize: "15px",
      marginBottom: "8px",
    },

    "& p": {
      fontSize: "12px",
      lineHeight: "16px",
      margin: "8px",
    },
  },
}));
