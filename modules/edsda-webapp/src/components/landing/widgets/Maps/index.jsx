import React, { memo, useCallback, useState } from "react";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { useGlobalStyles } from "../../../theme/GlobalStyles";
import { Button } from "@material-ui/core";

import { Connector, Maps } from "../../../common";
import { RiCloseLine } from "react-icons/ri";
import riceFieldData from "../../../../utils/riceField.json";
import { vn } from "../../../../utils/vnId";

export default memo(({ children, data }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  // eslint-disable-next-line
  const [disable, setDisable] = React.useState(false);
  const [series, setSeries] = React.useState([]);
  const [title, setTitle] = useState("");

  const factTableSelect = useSelector((state) => state.ui.factTableSelect);
  const dimYearSelect = useSelector((state) => state.ui.dimYearSelect);

  const handleRunButton = useCallback(() => {
    if (factTableSelect === "Rice Yield") {
      const series1 = [];

      riceFieldData.forEach((city) => {
        let cityName = city.city;
        const cityId = vn.find((cityObject) => {
          return cityName === cityObject.name;
        }).id;
        const value = Number(city[dimYearSelect[0]]).toPrecision();
        const object = {
          "hc-key": cityId,
          value: value,
        };
        series1.push(object);
      });
      setSeries(series1);
      setTitle(`Rice Field Vietnam in ${dimYearSelect[0]}`);
    }
  }, [factTableSelect, dimYearSelect]);

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

        <Maps series={series} title={title} />
      </div>
    </div>
  );
});
