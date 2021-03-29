import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    padding: "10px 0 10px 0",
    color: "#CFD8F0",
  },
  logoWrapper: {
    width: "60px",
    textAlign: "center",
    margin: "0 auto",

    "& img": {
      width: "45px",
      objectFit: "cover",
    },
  },
  dropdown: {
    marginTop: "10px",
  },
}));
