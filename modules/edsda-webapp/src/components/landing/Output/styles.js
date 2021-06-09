import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  output: {
    width: "75%",
    borderRight: "1px solid var(--border-color)",
  },
  header: {
    padding: "10px 10px",
    borderBottom: "1px solid var(--border-color)",
    fontSize: "11px",
    fontWeight: "bold",
    lineHeight: "14px",
  },
}));
