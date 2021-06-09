import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  tree: {
    padding: "10px",
    overflowY: "scroll",
  },

  iconContainer: {
    display: "none",
  },

  treeItem: {
    fontFamily: `"IBM Plex Sans", "Source Sans Pro", sans-serif `,
    fontSize: "12px",
    paddingLeft: 0,
  },

  selected: {
    color: "var(--hover-color)",
  },
  group: {
    color: "var(--text-primary)",
  },
}));
