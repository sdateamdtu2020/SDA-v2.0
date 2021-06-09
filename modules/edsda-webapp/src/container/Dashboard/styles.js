import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100vh - 1px)",
    overflow: "hidden",
  },
}));
