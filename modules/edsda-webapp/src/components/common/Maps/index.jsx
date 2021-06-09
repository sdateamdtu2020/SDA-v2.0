import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useStyles } from "./styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import { vnAll } from "../../../utils/vnAll";

highchartsMap(Highcharts); // Initialize the map module

const ColumnChart = ({ series, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [mapsOptions, setMapsOptions] = useState({
    title: {
      text: ``,
      color: "#FFFFFF",
    },
    chart: {
      backgroundColor: "transparent",
      color: "#FFFFFF",
    },

    tooltip: {
      headerFormat: "{point.name}",
      pointFormat: `{point.name}, {point.value}`,
    },
    plotOptions: {
      map: {
        states: {
          hover: {
            color: "#EEDD66",
          },
        },
        dataLabels: {
          enabled: true,
          color: "#FFFFFF",
          style: {
            fontWeight: "bold",
          },
        },
      },
    },
    colorAxis: {
      min: 0,
      minColor: "rgb(197, 197, 115)",
      maxColor: "rgb(247, 2, 2)",
      dataClasses: [
        {
          to: 200,
        },
        { from: 200, to: 400 },
        { from: 400, to: 800 },
        { from: 800, to: 1600 },
        { from: 1600, to: 2000 },
        { from: 2000 },
      ],
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "bottom",
      margin: 5,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.5)",
      borderRadius: 5,
    },
    subtitle: {
      text: "",
      floating: true,
      align: "right",
      y: 50,
      style: {
        fontSize: "16px",
      },
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    series: [
      {
        mapData: vnAll,
        data: [],
        name: "VN",
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });

  useEffect(() => {
    if (series.legend !== 0 && title !== "") {
      setMapsOptions({
        ...mapsOptions,
        title: {
          ...mapsOptions.title,
          text: title,
        },
        series: [
          {
            ...mapsOptions.series[0],
            data: series,
          },
        ],
      });
    }
  }, [series, title]);

  return (
    <div className={classes.maps}>
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapsOptions}
      />
    </div>
  );
};

export default ColumnChart;
