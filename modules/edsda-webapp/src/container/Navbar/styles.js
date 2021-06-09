import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "50px",
    width: "100%",
    padding: "0px 10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--background-color)",
    borderBottom: "1px solid var(--border-color)",
  },
  logo: {
    width: "30px",
    objectFit: "cover",
    marginRight: "15px",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",

    "&:hover $dropdownContent": {
      display: "block",
    },
  },

  dropdownContent: {
    display: "none",
    backgroundColor: "#222138",
    border: "1px solid var(--border-color)",
    width: "130px",

    zIndex: "1",
    position: "absolute",
    left: "0px",
    top: "40px",
  },

  dropdownButton: {
    fontSize: "11px",
    padding: "4px 16px",
    lineHeight: "20px",

    backgroundColor: "transparent",
    color: "var(--text-primary)",
    userSelect: "none",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "var(--border-color)",
    },
  },

  groupButton: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    fontSize: "11px",
    padding: "16px 10px",
    backgroundColor: "transparent",
    color: "var(--text-primary)",
    border: "0px",
    outline: "none",

    "&:hover": {
      color: "var(--hover-color)",
      cursor: "pointer",
    },
  },
}));
