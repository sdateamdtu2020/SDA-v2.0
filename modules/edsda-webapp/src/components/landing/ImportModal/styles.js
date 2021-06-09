import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    width: "960px",
    height: "720px",
    backgroundColor: "var(--background-color)",
    borderRadius: "20px",
    position: "absolute",
    top: "12%",
    left: "25%",
    padding: "50px",
    outline: "none",
    color: "var(--text-primary)",
    display: "flex",
    fontSize: "12px",
  },
  input: {
    width: "100%",
    backgroundColor: "transparent",
    outline: "none",
    padding: "8px",
    color: "var(--text-primary)",
    appearance: "none",
    marginBottom: "16px",
    marginTop: "16px",
  },

  step2: {
    display: "flex",
    flexDirection: "column",
  },
  step2header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  step3: {
    width: "100%",
  },
  step3header: {
    display: "flex",
    justifyContent: "space-between",
  },
  formLabel: {
    color: "#fff !important",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
  },
  buttonGroup: {
    clear: "both",
    position: "relative",
  },
  button: {
    minHeight: "10px",
    // flex: "0 0 calc(33.333% - 30px)",
    transition: "all .2s ease-in-out",
    backgroundColor: "var(--border-color)",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "10px",
    margin: "7px",
    // display: "grid",
    // gridGap: "16px",
    // gridTemplateColumns: "repeat(1,1fr)",
    color: "white",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "var(--border-color)",
    },

    "& h2": {
      fontSize: "16px",
    },

    "& p": {
      color: "#C5CBD2",
    },

    "& div": {
      "& p": {},
    },
  },
}));
