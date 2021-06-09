import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";

import { Connector, TreeYear } from "../../../common";
import { RiCloseLine } from "react-icons/ri";
import {
  dataExample1,
  treeYearRiceField,
  dataExample2,
} from "../../../../utils";
export default memo(({ children, data }) => {
  const classes = useStyles();
  const dimCitySelect = useSelector((state) => state.ui.dimCitySelect);
  const factTableSelect = useSelector((state) => state.ui.factTableSelect);
  const [tree, setTree] = useState([]);

  useEffect(() => {
    if (factTableSelect === "Rice Yield") {
      setTree(treeYearRiceField);
    } else if (
      (dimCitySelect[0] === "Huyện Chiêm Hóa") &
      (factTableSelect === "Rainfall")
    ) {
      const newTree = [];
      dataExample1[0].cities[0].districts[0].years.forEach((year) => {
        newTree.push({ id: year.year, name: `${year.year}` });
      });
      setTree(newTree);
    } else if (
      (factTableSelect === "Die Young Under 5 Age") &
      (dimCitySelect[0] === "Dong Bang Song Hong")
    ) {
      const newTree = [];
      dataExample2[0].years.forEach((year) => {
        newTree.push({ id: year.year, name: `${year.year}` });
      });
      setTree(newTree);
    }
    // eslint-disable-next-line
  }, [dimCitySelect, factTableSelect]);

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
        {(dimCitySelect[0] === "Huyện Chiêm Hóa") &
          (factTableSelect === "Rainfall") ||
        factTableSelect === "Rice Yield" ||
        (dimCitySelect[0] === "Dong Bang Song Hong") &
          (factTableSelect === "Die Young Under 5 Age") ? (
          <TreeYear items={tree} height={data.height} />
        ) : (
          <p>
            OOpps... Something went wrong. Please select another city/district{" "}
          </p>
        )}
      </div>
    </div>
  );
});
