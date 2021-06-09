import React from "react";
import { useDispatch } from "react-redux";

import { useStyles } from "./styles";

const JsonView = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return <h2>Json View</h2>;
};

export default JsonView;
