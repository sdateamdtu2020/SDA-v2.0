import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  tree: {
    padding: "10px",
    overflowY: "scroll",
  },

  iconContainer: {
    display: "none",
  },

  maps: {
    backgroundColor: "transparent",
    width: "400px",
    height: "100%",
  },
}));
