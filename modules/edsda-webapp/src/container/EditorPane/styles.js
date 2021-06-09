import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  editorPane: {
    minHeight: "150px",
    height: "calc(100vh - 51px)",
    borderBottom: "2px solid var(--border-color)",

    boxSizing: "border-box",
    position: "relative",
  },
  button: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: "99",
    backgroundColor: "var(--background-color)",
    color: "var(--text-primary)",
    padding: "8px 16px",
    border: "1px solid var(--border-color)",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "var(--border-color)",
    },
  },
}));
