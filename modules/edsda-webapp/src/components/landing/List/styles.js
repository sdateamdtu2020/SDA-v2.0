import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  listSidebar: {
    width: "100%",
    height: "100%",
  },
  subHeader: {
    color: "#CFD8F0 !important",
    fontWeight: "bold",
    borderBottom: "1px solid #514c4c",
    paddingLeft: "10px",
  },
  listItem: {
    borderBottom: "1px solid #514c4c",
    paddingLeft: "10px",
    paddingRight: "10px",
    userSelect: "none",

    "& span": {
      fontSize: "16px ",
    },

    "&:hover": {
      backgroundColor: "#0B2154",
    },
  },
  listItemCollapse: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));
