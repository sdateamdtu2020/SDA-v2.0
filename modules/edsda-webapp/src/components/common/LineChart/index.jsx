import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useStyles } from "./styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { setFactTableSelect } from "../../../app/slice/ui";

const LineChart = ({ series, categories, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    chart: {
      type: "line",
      backgroundColor: "transparent",
      color: "#fff",
    },
    title: {
      text: "",
      style: {
        color: "#fff",
      },
    },

    xAxis: {
      categories: [],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [],
  });

  useEffect(() => {
    if (categories !== [] && series !== [] && title !== "") {
      setData({
        ...data,
        xAxis: {
          ...data.xAxis,
          categories: categories,
        },
        series: series,
        yAxis: {
          ...data.yAxis,
          title: {
            text: "Rainfall (mm)",
          },
        },
        title: {
          text: title,
        },
      });
    }
  }, [categories, series, title]);

  return (
    <div className={classes.chart}>
      <HighchartsReact highcharts={Highcharts} options={data} />
    </div>
  );
};

export default LineChart;
