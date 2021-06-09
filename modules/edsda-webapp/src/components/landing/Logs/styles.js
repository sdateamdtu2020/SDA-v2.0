import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  logs: {
    width: "25%",
  },
  header: {
    padding: "10px 10px",
    borderBottom: "1px solid var(--border-color)",
    fontSize: "11px",
    fontWeight: "bold",
    lineHeight: "14px",
  },
  logsOutput: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  output: {
    overflowY: "auto",
    height: "calc(320px - 35px - 35px)",
  },

  input: {
    width: "100%",
    backgroundColor: "transparent",
    border: "0",
    outline: "none",
    padding: "8px",
    borderTop: "1px solid var(--border-color)",
    color: "var(--text-primary)",
    appearance: "none",
  },
}));
