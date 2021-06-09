import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";

import { Connector, TreeCity } from "../../../common";
import { RiCloseLine } from "react-icons/ri";
import { dataExample1, dataExample2 } from "../../../../utils";
import riceFieldData from "../../../../utils/riceField.json";

export default memo(({ children, data }) => {
  const classes = useStyles();
  const factTableSelect = useSelector((state) => state.ui.factTableSelect);
  const [tree, setTree] = useState([]);

  useEffect(() => {
    if (factTableSelect[0] === "Rainfall") {
      const area = [];
      dataExample1.forEach((data) => {
        const areaName = data.area;
        const cities = [];
        data.cities.forEach((city) => {
          const cityName = city.city;
          const districts = [];
          city.districts.forEach((district) => {
            const districtName = district.district;
            districts.push({ district: districtName });
          });
          cities.push({
            city: cityName,
            districts: districts,
          });
        });
        area.push({ data: { area: areaName, cities: cities } });
      });
      setTree(area);
    } else if (factTableSelect === "Die Young Under 5 Age") {
      const area = [];
      dataExample2.forEach((data) => {
        area.push({ data: { area: data.area, cities: null } });
      });
      setTree(area);
    }
  }, [factTableSelect]);

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
      <div className={classes.body} onMouseDownCapture={stopEvent}>
        {factTableSelect === "Rainfall" ||
        factTableSelect === "Forest" ||
        factTableSelect === "Die Young Under 5 Age" ? (
          <TreeCity items={tree} height={data.height} />
        ) : (
          <p>
            OOpps... Something went wrong. Please select another data cubes{" "}
          </p>
        )}
      </div>
    </div>
  );
});
