import React, { memo, useCallback, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { useGlobalStyles } from "../../../theme/GlobalStyles";
import { Button } from "@material-ui/core";

import { Connector, LineChart } from "../../../common";
import { RiCloseLine } from "react-icons/ri";
import { rainfallDanang } from "../../../../utils";

export default memo(({ children, data }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  // eslint-disable-next-line
  const [disable, setDisable] = React.useState(false);
  const [series, setSeries] = React.useState([]);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");

  const factTableSelect = useSelector((state) => state.ui.factTableSelect);
  const dimYearSelect = useSelector((state) => state.ui.dimYearSelect);
  const dimCitySelect = useSelector((state) => state.ui.dimCitySelect);

  const handleRunButton = useCallback(() => {
    if (
      factTableSelect[0] === "Rainfall" &&
      dimYearSelect[0] === "2013" &&
      dimYearSelect[1] === "2014" &&
      dimYearSelect[2] === "2015" &&
      dimYearSelect[4] === "2017" &&
      dimCitySelect[0] === "Đà Nang"
    ) {
      const categories1 = [];
      const series1 = [];
      let city1 = "";
      rainfallDanang.forEach((valueYear, index) => {
        categories1.push(valueYear.year);
        series1.push(valueYear.value);
        city1 = valueYear.city;
      });
      const object = {
        name: "Rainfall",
        data: series1,
      };
      setSeries(object);
      setCategories(categories1);
      setTitle(`Rainfall of ${city1} from 2013 to 2017`);
    }
  }, [factTableSelect, dimYearSelect, dimCitySelect]);

  useEffect(() => {
    setTimeout(handleRunButton, 2000);
  }, [handleRunButton]);
  const stopEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className={classes.output} style={{ width: data.width }}>
      <Connector targetPosition={data.targetPosition} />
      <div className={classes.header}>
        <p>{data.title}</p>
        <RiCloseLine className={classes.icon} />
      </div>
      <div
        className={classes.body}
        style={{ height: data.height }}
        onMouseDownCapture={stopEvent}
      >
        <Button
          variant="contained"
          color="secondary"
          className={globalClasses.buttonSecondary}
          onClick={() => handleRunButton()}
          disabled={disable}
        >
          Run
        </Button>
        <LineChart series={series} categories={categories} title={title} />
      </div>
    </div>
  );
});
