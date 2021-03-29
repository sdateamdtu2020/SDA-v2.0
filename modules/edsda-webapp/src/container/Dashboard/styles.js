import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  sidebar: {
    width: "200px",
    height: "calc(100vh - 5px)",

    marginRight: "10px",
    borderRadius: "0 0 10px 0",
    boxShadow: "0px 6px 10px -1px rgba(0,0,0,0.58)",
    backgroundColor: "#06163A",
  },
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginRight: "5px",
  },
}));
