import React, { useState } from "react";

import { useStyles } from "./styles";
import { useGlobalStyles } from "../../components/theme/GlobalStyles";

const Navbar = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return <div className={classes.navbar}></div>;
};

export default Navbar;
