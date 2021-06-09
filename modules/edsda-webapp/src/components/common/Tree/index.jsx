import React from "react";
import { useDispatch } from "react-redux";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import { useStyles } from "./styles";
import { setFactTableSelect } from "../../../app/slice/ui";

const Tree = ({ items, height }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(["Rainfall"]);
  const [expanded, setExpanded] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  React.useEffect(() => {
    if (selected !== []) {
      const action = setFactTableSelect(selected);
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
    >
      {items.map((item, index) => {
        return (
          <TreeItem
            nodeId={item.name}
            label={item.name}
            key={item.name}
            classes={{
              label: classes.treeItem,
              iconContainer: classes.iconContainer,
              selected: classes.selected,
            }}
          >
            {item.children
              ? item.children.map((parent) => (
                  <TreeItem
                    nodeId={parent.name}
                    label={parent.name}
                    key={parent.name}
                    classes={{
                      label: classes.treeItem,
                      iconContainer: classes.iconContainer,
                      selected: classes.selected,
                    }}
                  >
                    {parent.children
                      ? parent.children.map((children) => (
                          <TreeItem
                            nodeId={children.name}
                            label={children.name}
                            key={children.name}
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
