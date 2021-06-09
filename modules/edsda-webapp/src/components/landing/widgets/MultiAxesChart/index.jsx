import React, { memo, useState, useCallback } from "react";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { useGlobalStyles } from "../../../theme/GlobalStyles";
import { Button } from "@material-ui/core";

import { Connector, MultiAxesChart } from "../../../common";
import { RiCloseLine } from "react-icons/ri";

export default memo(({ children, data }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [series, setSeries] = React.useState([]);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [unit, setUnit] = useState([]);

  const factTableSelect = useSelector((state) => state.ui.factTableSelect);
  const dimYearSelect = useSelector((state) => state.ui.dimYearSelect);
  const dimCitySelect = useSelector((state) => state.ui.dimCitySelect);

  const handleRunButton = useCallback(() => {
    if (
      factTableSelect === "Rainfall" &&
      (dimYearSelect[0] === "2015" || dimYearSelect[7] === "2015") &&
      (dimYearSelect[0] === "2008" || dimYearSelect[7] === "2008") &&
      dimCitySelect[0] === "Huyện Chiêm Hóa"
    ) {
      const categories1 = [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
      ];
      setCategories(categories1);
      const series1 = [
        {
          name: "Rainfall",
          type: "column",
          yAxis: 1,
          data: [2679, 1284.3, 1403, 1582, 1620, 1648.7, 1499.2, 2297.2],
          tooltip: {
            valueSuffix: " mm",
          },
        },
        {
          name: "Forest Cover Area",
          type: "spline",
          data: [69, 59, 61, 64.2, 65, 65.2, 64, 68],
          tooltip: {
            valueSuffix: " %",
          },
        },
      ];
      const unit1 = [
        {
          labels: "{value} mm",
          title: "Rainfall",
        },
        {
          labels: "{value} %",
          title: "Forest Cover Area",
        },
      ];
      setUnit(unit1);
      setSeries(series1);
      setTitle(
        "Rainfall and Forest Cover Area of Huyện Chiêm Hóa from 2008 to 2015"
      );
    } else if (
      factTableSelect === "Die Young Under 5 Age" &&
      (dimYearSelect[0] === "2018" || dimYearSelect[6] === "2018") &&
      (dimYearSelect[0] === "2012" || dimYearSelect[6] === "2012") &&
      dimCitySelect[0] === "Dong Bang Song Hong"
    ) {
      const categories1 = [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
      ];
      setCategories(categories1);
      const series1 = [
        {
          name: "Die Young Under 5 Age",
          type: "spline",
          yAxis: 1,
          data: [18.4, 17.7, 17.5, 17.1, 16.9, 16.8, 16.5],
          tooltip: {
            valueSuffix: " person / 1000 persons",
          },
        },
        {
          name: "Industry",
          type: "spline",
          data: [69, 59, 61, 64.2, 65, 65.2, 64],
          tooltip: {
            valueSuffix: " %",
          },
        },
      ];
      const unit1 = [
        {
          labels: "{value} person / 1000 persons",
          title: "Die Young Under 5 Age",
        },
        {
          labels: "{value} %",
          title: "Industry",
        },
      ];
      setSeries(series1);
      setTitle(
        "Die Young Under 5 Age and Industry of Đồng Bằng Sông Hồng from 2012 to 2018"
      );
      setUnit(unit1);
    } else {
      console.log("Error");
    }
  }, [factTableSelect, dimYearSelect, dimCitySelect]);

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
        >
          Run
        </Button>
        <MultiAxesChart
          series={series}
          categories={categories}
          title={title}
          unit={unit}
        />
      </div>
    </div>
  );
});
