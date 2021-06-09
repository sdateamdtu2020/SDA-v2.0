import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  info: {
    width: "340px",
    // backgroundColor: "var(--background-color)",
    color: "var(--text-primary)",

    "& h2": {
      fontSize: "18px",
      marginBottom: "8px",
    },

    "& p": {
      fontSize: "12px",
      lineHeight: "16px",
      margin: "8px",
    },
  },
}));
