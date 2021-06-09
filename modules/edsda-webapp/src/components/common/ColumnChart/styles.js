import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  tree: {
    padding: "10px",
    overflowY: "scroll",
  },

  iconContainer: {
    display: "none",
  },

  chart: {
    backgroundColor: "transparent",
  },
}));
