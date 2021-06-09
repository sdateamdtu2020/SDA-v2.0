import React from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import logo from "../../assets/img/logo.webp";
import { setItemNavbarClick } from "../../app/slice/ui";

const Navbar = (props) => {
  const { handleExport } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOnClick = (id) => {
    const action = setItemNavbarClick(id);
    dispatch(action);
  };

  return (
    <div className={classes.navbar}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.groupButton}>
        <div className={classes.dropdown}>
          <button
            className={classes.button}
            onClick={() => handleOnClick("about")}
          >
            ABOUT
          </button>
        </div>
        <div className={classes.dropdown}>
          <button
            className={classes.button}
            onClick={() => handleOnClick("clear")}
          >
            CLEAR
          </button>
        </div>
        <div className={classes.dropdown}>
          <button className={classes.button} onClick={() => handleExport()}>
            EXPORT
          </button>
        </div>
        <div className={classes.dropdown}>
          <button
            className={classes.button}
            onClick={() => handleOnClick("presentation")}
          >
            PRESENTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
