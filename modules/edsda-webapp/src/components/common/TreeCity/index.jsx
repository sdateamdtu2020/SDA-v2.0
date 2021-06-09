import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import { useStyles } from "./styles";
import { setDimCitySelect, setItemSuggest } from "../../../app/slice/ui";

const Tree = ({ items, height }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState(["Đà Nang"]);
  const [expanded, setExpanded] = React.useState(["Nam Trung Bộ"]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    if (nodeIds[0] === "Huyện Chiêm Hóa") {
      const action = setItemSuggest(["Forest Cover Area", "Atmosphere"]);
      dispatch(action);
    } else if (nodeIds[0] === "Dong Bang Song Hong") {
      const action = setItemSuggest(["Industry", "Temperature"]);
      dispatch(action);
    }
  };

  React.useEffect(() => {
    if (selected !== []) {
      const action = setDimCitySelect(selected);
      dispatch(action);
    }
  }, [selected, dispatch]);
  return (
    <TreeView
      className={classes.tree}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      style={{ height: height }}
      multiSelect
    >
      {items.map((item, index) => {
        return (
          <TreeItem
            nodeId={item.data.area}
            label={item.data.area}
            key={item.data.area}
            classes={{
              label: classes.treeItem,
              iconContainer: classes.iconContainer,
              selected: classes.selected,
            }}
          >
            {item.data.cities
              ? item.data.cities.map((city) => (
                  <TreeItem
                    nodeId={city.city}
                    label={city.city}
                    key={city.city}
                    classes={{
                      label: classes.treeItem,
                      iconContainer: classes.iconContainer,
                      selected: classes.selected,
                    }}
                  >
                    {city.districts
                      ? city.districts.map((district) => (
                          <TreeItem
                            nodeId={district.district}
                            label={district.district}
                            key={district.district}
                            classes={{
                              label: classes.treeItem,
                              iconContainer: classes.iconContainer,
                              selected: classes.selected,
                            }}
                          ></TreeItem>
                        ))
                      : ""}
                  </TreeItem>
                ))
              : ""}
          </TreeItem>
        );
      })}
    </TreeView>
  );
};

export default Tree;
