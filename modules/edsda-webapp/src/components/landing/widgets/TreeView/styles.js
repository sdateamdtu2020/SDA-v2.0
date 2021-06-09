import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  output: {
    width: "148px",
    backgroundColor: "var(--background-color)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-color)",
    position: "relative",
  },
  header: {
    borderBottom: "1px solid var(--border-color)",
    padding: "5px 10px",

    display: "flex",
    justifyContent: "space-between",

    "& p": {
      fontSize: "12px",
    },
  },
  icon: {
    color: "#555466",
    cursor: "pointer",
  },
}));
