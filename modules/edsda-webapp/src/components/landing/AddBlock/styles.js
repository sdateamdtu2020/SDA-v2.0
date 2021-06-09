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
    border: "1px solid var(--border-color)",
    color: "var(--text-primary)",
    appearance: "none",
    marginBottom: "16px",
  },
  sidebar: {
    width: "170px",
    paddingRight: "10px",

    "& h2": {
      fontSize: "21px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
  },
  sidebarMenu: {
    position: "sticky",
    top: "90px",
    left: "0px",

    minHeight: "1px",
  },
  sidebarItem: {
    textTransform: "uppercase",
    display: "flex",
    padding: "10px 10px",
    fontSize: "11px",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
    letterSpacing: "2px",

    "&:hover": {
      backgroundColor: "var(--border-color)",
    },
  },
  icon: {
    fontSize: "14px",
    marginRight: "5px",
    color: "var(--text-primary)",
  },
  lists: {
    paddingLeft: "32px",
    overflowY: "scroll",
    position: "relative",
    marginRight: "20px",
  },
  closeIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
    cursor: "pointer",
  },
  close: {
    fontSize: "35px",
    color: "#555466",
  },
  category: {
    marginBlock: "32px",
    "&:last-child": {
      marginBottom: 0,
    },

    "& > h2": {
      marginBottom: "16px",
      textTransform: "uppercase",
      letterSpacing: "3px",
      userSelect: "none",
    },
  },
  blocks: {
    display: "flex",
    flexWrap: "wrap",
  },
  block: {
    minHeight: "140px",
    flex: "0 0 calc(33.333% - 30px)",
    transition: "all .2s ease-in-out",
    backgroundColor: "var(--border-color)",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "10px",
    margin: "10px",
    display: "grid",
    gridGap: "16px",
    gridTemplateColumns: "repeat(1,1fr)",

    "&:hover": {
      transform: "scale(1.05)",
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

