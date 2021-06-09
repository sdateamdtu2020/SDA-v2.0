import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MultiAxesChart = ({ series, categories, title, unit }) => {
  const classes = useStyles();
  const [data, setData] = useState({
    chart: {
      zoomType: "xy",
      backgroundColor: "transparent",
      color: "#fff",
    },
    title: {
      text: "",
      style: {
        color: "#fff",
      },
    },

    xAxis: [
      {
        categories: [
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
        ],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        labels: {
          format: "{value} mm",
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        title: {
          text: "Rainfall",
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
      },
      {
        labels: {
          format: "{value} %",
          style: {
            color: Highcharts.getOptions().colors[2],
          },
        },
        title: {
          text: "Forest Cover Area",
          style: {
            color: Highcharts.getOptions().colors[2],
          },
        },
        opposite: true,
      },
    ],
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
    if (categories !== [] && series !== [] && title !== "" && unit !== []) {
      setData({
        ...data,
        xAxis: [
          {
            ...data.xAxis,
            categories: categories,
          },
        ],
        series: series,
        title: {
          ...data.title,
          text: title,
        },
        yAxis: [
          {
            labels: {
              ...data.yAxis[0].labels,
              format: unit[0].labels,
            },
            title: {
              ...data.yAxis[0].title,
              text: unit[0].title,
            },
          },
          {
            labels: {
              ...data.yAxis[1].labels,
              format: unit[1].labels,
            },
            title: {
              ...data.yAxis[1].title,
              text: unit[1].title,
            },
          },
        ],
      });
    }
  }, [categories, series, title, unit]);

  return (
    <div className={classes.chart}>
      <HighchartsReact highcharts={Highcharts} options={data} />
    </div>
  );
};

export default MultiAxesChart;
