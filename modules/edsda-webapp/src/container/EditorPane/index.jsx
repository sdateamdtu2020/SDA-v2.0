import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "./styles";

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  removeElements,
  Background,
} from "react-flow-renderer";
import { initialElements } from "./initialElements";

import {
  Info,
  TreeView,
  TreeViewCity,
  TreeViewYear,
  Operators,
  ColumnChart,
  LineChart,
  JsonView,
  Title,
  SubTitle,
  Image,
  Member,
  Description,
  City,
  Year,
  Maps,
  MultiAxesChart,
} from "../../components/landing/widgets";
import { AddBlock } from "../../components/landing";

import {
  setItemToolboxClick,
  setItemNavbarClick,
  setDimCitySelect,
  setDimYearSelect,
  setFactTableSelect,
} from "../../app/slice/ui";
import { getRandomNumber, listSidebar, year } from "../../utils";
import dimCity from "../../utils/dimentions.json";

const initBgColor = "#1A192B";

const nodeTypes = {
  info: Info,
  treeView: TreeView,
  treeViewCity: TreeViewCity,
  treeViewYear: TreeViewYear,
  operators: Operators,
  columnChart: ColumnChart,
  lineChart: LineChart,
  jsonView: JsonView,
  title: Title,
  subtitle: SubTitle,
  image: Image,
  member: Member,
  description: Description,
  city: City,
  year: Year,
  multiAxes: MultiAxesChart,
  maps: Maps,
};

const EditorPane = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const itemToolboxClick = useSelector((state) => state.ui.itemToolboxClick);
  const itemNavbarClick = useSelector((state) => state.ui.itemNavbarClick);
  const itemSuggest = useSelector((state) => state.ui.itemSuggest);
  const dimCitySelect = useSelector((state) => state.ui.dimCitySelect);

  const [elements, setElements] = useState(initialElements);
  // eslint-disable-next-line
  const [bgColor, setBgColor] = useState(initBgColor);
  // eslint-disable-next-line
  const [rfInstance, setRfInstance] = useState(null);
  // eslint-disable-next-line
  const [elementClick, setElementClick] = useState({});
  const [addBlockModal, setAddBlockModal] = useState(false);
  // eslint-disable-next-line
  const [presentationMode, setPresentationMode] = useState(false);
  // eslint-disable-next-line
  const [isMergeAble, setIsMergeAble] = useState(false);

  const onElementClick = (event, element) => {
    setElementClick(element);
  };

  const onAddTreeView = useCallback(
    (id, type, x, y, targetPosition, width, height, title, items) => {
      const newNode = {
        id: id,
        type: type,
        data: {
          id: id,
          title: title,
          items: items,
          targetPosition: targetPosition,
          width: width,
          height: height,
        },
        position: {
          x: x,
          y: y,
        },
        animated: true,
      };
      setElements((els) => els.concat(newNode));
    },
    []
  );

  const onAddConnector = useCallback((id, source, target) => {
    const newNode = {
      id: id,
      source: source,
      target: target,
      animated: true,
    };
    setElements((els) => els.concat(newNode));
  }, []);

  const onAddTitle = useCallback((id, type, x, y, title) => {
    const newNode = {
      id: id,
      type: type,
      data: {
        id: id,
        title: title,
      },
      position: {
        x: x,
        y: y,
      },
      animated: true,
      draggable: false,
    };
    setElements((els) => els.concat(newNode));
  }, []);

  useEffect(() => {
    if (itemNavbarClick !== "") {
      let action;
      let newElements = [];

      switch (itemNavbarClick) {
        case "clear":
          // if (window.confirm("Are you sure")) {
          newElements = [...elements];
          onElementsRemove(newElements);
          action = setDimCitySelect("");
          dispatch(action);
          action = setDimYearSelect("");
          dispatch(action);
          action = setFactTableSelect("");
          dispatch(action);
          // }
          break;
        case "presentation":
          newElements = [...elements];
          onElementsRemove(newElements);
          action = setDimCitySelect("");
          dispatch(action);
          action = setDimYearSelect("");
          dispatch(action);
          action = setFactTableSelect("");
          dispatch(action);
          setPresentationMode(true);
          break;

        default:
          break;
      }
      action = setItemNavbarClick("");
      dispatch(action);
    }
    // eslint-disable-next-line
  }, [itemNavbarClick]);

  useEffect(() => {
    // id, type, x, y, targetPosition, width, height, title, items
    onAddTreeView(
      "climate-1",
      "treeView",
      "45",
      "340",
      "right",
      "148px",
      "80px",
      "Climate",
      listSidebar[0].children
    );
    // onAddTreeView(
    //   "jsonview-1",
    //   "jsonView",
    //   "355",
    //   "716",
    //   "left",
    //   "300px",
    //   "300px",
    //   "Json Viewer",
    //   []
    // );
    onAddTreeView(
      "year-1",
      "treeViewYear",
      "606",
      "235",
      "",
      "148px",
      "100px",
      "Year",
      year
    );
    onAddTreeView(
      "city-1",
      "treeViewCity",
      "606",
      "435",
      "",
      "180px",
      "200px",
      "City",
      dimCity
    );
    onAddTreeView(
      "operators-1",
      "operators",
      "930",
      "100",
      "",
      "180px",
      "200px",
      "Statistic Visualization",
      []
    );
    onAddTreeView(
      "columnChart-1",
      "columnChart",
      "1400",
      "100",
      "left",
      "320px",
      "440px",
      "Column Chart",
      []
    );
    onAddTreeView(
      "lineChart-1",
      "lineChart",
      "1000",
      "400",
      "left",
      "320px",
      "440px",
      "Line Chart",
      []
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (itemToolboxClick !== "") {
      let yAxis = 340;
      const idItemToolboxClick = `${itemToolboxClick}-${getRandomNumber(
        0,
        99
      )}`;
      const idCity = `city-${getRandomNumber(0, 99)}`;
      const idYear = `year-${getRandomNumber(0, 99)}`;
      const itemsTree = listSidebar.find(
        (item) => item.id === itemToolboxClick
      );

      const itemClimate = elements.find((item) => {
        const idSplit = item.id.split("-").shift();
        if (idSplit === "climate") {
          return item;
        }
        return null;
      });

      const itemDieYoungUnder5Age = elements.find((item) => {
        const idSplit = item.id.split("-").shift();
        if (idSplit === "dieYoungUnder5Age") {
          return item;
        }
        return null;
      });

      if (
        itemToolboxClick === "forest" &&
        itemClimate.length !== 0 &&
        dimCitySelect[0] === "Huyện Chiêm Hóa"
      ) {
        onAddTreeView(
          idItemToolboxClick,
          "treeView",
          "45",
          "500",
          "right",
          "148px",
          "80px",
          `${itemToolboxClick}`,
          itemsTree.children
        );
      } else if (itemToolboxClick === "climate") {
        onAddTreeView(
          idItemToolboxClick,
          "treeView",
          "45",
          yAxis,
          "right",
          "148px",
          "80px",
          `${itemToolboxClick}`,
          itemsTree.children
        );

        onAddTreeView(
          idCity,
          "city",
          "406",
          "235",
          "",
          "180px",
          "160px",
          "City",
          []
        );

        onAddTreeView(
          idYear,
          "year",
          "706",
          "235",
          "",
          "148px",
          "160px",
          "Year",
          []
        );

        onAddConnector(
          `${idItemToolboxClick}-${idCity}`,
          idItemToolboxClick,
          idCity
        );
        onAddConnector(`${idCity}-${idYear}`, idCity, idYear);

        const action = setItemToolboxClick("");
        dispatch(action);
        yAxis += 60;
      } else if (
        itemToolboxClick === "industry" &&
        itemDieYoungUnder5Age.length !== 0 &&
        dimCitySelect[0] === "Dong Bang Song Hong"
      ) {
        onAddTreeView(
          idItemToolboxClick,
          "treeView",
          "90",
          "500",
          "right",
          "148px",
          "80px",
          `${itemToolboxClick}`,
          itemsTree.children
        );
      } else if (itemToolboxClick === "dieYoungUnder5Age") {
        onAddTreeView(
          idItemToolboxClick,
          "treeView",
          "45",
          yAxis,
          "right",
          "180px",
          "80px",
          `${itemToolboxClick}`,
          itemsTree.children
        );

        onAddTreeView(
          idCity,
          "city",
          "406",
          "235",
          "",
          "180px",
          "160px",
          "Area",
          []
        );

        onAddTreeView(
          idYear,
          "year",
          "706",
          "235",
          "",
          "148px",
          "160px",
          "Year",
          []
        );

        onAddConnector(
          `${idItemToolboxClick}-${idCity}`,
          idItemToolboxClick,
          idCity
        );
        onAddConnector(`${idCity}-${idYear}`, idCity, idYear);

        const action = setItemToolboxClick("");
        dispatch(action);
        yAxis += 60;
      } else if (itemToolboxClick === "columnChart") {
        onAddTreeView(
          "columnChart-1",
          "columnChart",
          "1400",
          "100",
          "left",
          "320px",
          "440px",
          "Column Chart",
          []
        );
      } else if (itemToolboxClick === "multiAxesChart") {
        onAddTreeView(
          "multiAxesChart-1",
          "multiAxes",
          "1400",
          "100",
          "left",
          "320px",
          "440px",
          "Multi Axes Chart",
          []
        );
      } else if (itemToolboxClick === "riceYield") {
        onAddTreeView(
          idItemToolboxClick,
          "treeView",
          "45",
          yAxis,
          "right",
          "148px",
          "80px",
          `${itemToolboxClick}`,
          itemsTree.children
        );

        onAddTreeView(
          idYear,
          "year",
          "406",
          "235",
          "",
          "148px",
          "160px",
          "Year",
          []
        );

        onAddConnector(
          `${idItemToolboxClick}-${idYear}`,
          idItemToolboxClick,
          idYear
        );
      } else if (itemToolboxClick === "maps") {
        onAddTreeView(
          "maps-1",
          "maps",
          "700",
          "235",
          "left",
          "400px",
          "440px",
          "Maps",
          []
        );
      } else {
        onAddTreeView(
          `${itemToolboxClick}-1`,
          "operators",
          "930",
          "100",
          "",
          "180px",
          "200px",
          `${itemToolboxClick}`,
          []
        );
      }
      const action = setItemToolboxClick("");
      dispatch(action);
      yAxis += 60;
    }
    // eslint-disable-next-line
  }, [itemToolboxClick, dispatch, onAddTreeView]);

  useEffect(() => {
    if (itemSuggest.length !== 0) {
      let yAxis = 130;
      setIsMergeAble(true);
      onAddTitle("mergeable-1", "description", 50, 100, "Mergeable data cubes");
      itemSuggest.forEach((item, index) => {
        onAddTitle(`mergeable-${yAxis}`, "description", 80, yAxis, `${item}`);
        yAxis += 30;
      });
      yAxis = 130;
    }
    // eslint-disable-next-line
  }, [itemSuggest]);

  // useEffect(() => {
  //   if (dimCitySelect[0] !== "Huyện Chiêm Hóa" && isMergeAble === true) {
  //     const newElements = [...elements];
  //     const isMergeable = (id) => {
  //       const idSplit = id.split("-").shift();
  //       if (idSplit === "mergeable") {
  //         return true;
  //       }
  //       return false;
  //     };
  //     let itemsMergeable = newElements.filter((item) => isMergeable(item.id));
  //     if (itemsMergeable) {
  //       onElementsRemove(itemsMergeable);
  //       setIsMergeAble(false);
  //     }
  //   } else if (
  //     dimCitySelect[0] !== "Dong Bang Song Hong" &&
  //     isMergeAble === true
  //   ) {
  //     const newElements = [...elements];
  //     const isMergeable = (id) => {
  //       const idSplit = id.split("-").shift();
  //       if (idSplit === "mergeable") {
  //         return true;
  //       }
  //       return false;
  //     };
  //     let itemsMergeable = newElements.filter((item) => isMergeable(item.id));
  //     if (itemsMergeable) {
  //       onElementsRemove(itemsMergeable);
  //       setIsMergeAble(false);
  //     }
  //   }
  // }, [dimCitySelect, isMergeAble, elements]);

  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const handleCloseAddBlockModal = () => {
    setAddBlockModal(false);
  };

  return (
    <div className={classes.editorPane}>
      <button className={classes.button} onClick={() => setAddBlockModal(true)}>
        + block
      </button>
      {addBlockModal && (
        <AddBlock
          open={addBlockModal}
          onClose={handleCloseAddBlockModal}
          setAddBlockModal={setAddBlockModal}
        />
      )}
      <ReactFlow
        elements={elements}
        onElementClick={onElementClick}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={setRfInstance}
        nodeTypes={nodeTypes}
        style={{ background: bgColor }}
        onContextMenu={(e) => {
          e.preventDefault();
          setAddBlockModal(true);
        }}
      >
        <MiniMap
          nodeColor={(n) => {
            return "#524f88";
          }}
          nodeBorderRadius={10}
          maskColor="#1A192B"
          style={{
            border: "5px solid rgba(34,33,56,0.7)",
            background: bgColor,
          }}
        />
        <Controls />
        <Background variant="dots" color="#524f88" />
      </ReactFlow>
    </div>
  );
};

export default EditorPane;
