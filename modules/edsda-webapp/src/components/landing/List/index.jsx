import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./styles";

import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { listSidebar } from "../../../utils";
import { setListSidebarIsOpen } from "../../../app/slice/ui";

const ListSidebar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.ui.listSidebar.isOpen);

  const handleOnClickCollapse = (id) => {
    let action = setListSidebarIsOpen(id);
    dispatch(action);
  };

  return (
    <div className={classes.listSidebar}>
      <List
        component="nav"
        aria-labelledby="nested-list"
        subheader={
          <ListSubheader
            className={classes.subHeader}
            component="div"
            id="nested-list-subheader"
          >
            Widgets
          </ListSubheader>
        }
      >
        {listSidebar.map((dimension, indexDim) => (
          <div key={indexDim}>
            <ListItem
              onClick={
                dimension.children
                  ? () => handleOnClickCollapse(dimension.id)
                  : null
              }
              className={classes.listItem}
            >
              <ListItemText primary={dimension.name} />
              {dimension.children &&
                (isOpen[dimension.id] ? <MdExpandLess /> : <MdExpandMore />)}
            </ListItem>
            <Collapse
              className={classes.collapse}
              in={isOpen[dimension.id]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {dimension.children &&
                  dimension.children.map((collapseItem, indexCollapse) => (
                    <div key={indexCollapse}>
                      <ListItem
                        key={indexCollapse}
                        className={`${classes.listItem} ${classes.listItemCollapse}`}
                      >
                        <ListItemText primary={collapseItem.name} />
                      </ListItem>
                    </div>
                  ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
};

export default ListSidebar;
