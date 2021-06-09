import { BsBoxArrowDownRight } from "react-icons/bs";
import { AiOutlineLineChart, AiOutlineSetting } from "react-icons/ai";
import { BiCube } from "react-icons/bi";

export const sidebarItem = [
  {
    id: "input",
    name: "Input",
    icon: <BsBoxArrowDownRight />,
  },
  {
    id: "dataCubes",
    name: "Data Cubes",
    icon: <BiCube />,
  },
  {
    id: "operators",
    name: "Operators",
    icon: <AiOutlineSetting />,
  },
  {
    id: "visualizations",
    name: "Visualizations",
    icon: <AiOutlineLineChart />,
  },
];

export const lists = [
  {
    id: "input",
    name: "Input",
    children: [
      {
        id: "file",
        name: "File",
        description: "Handles csv, json, or xml files",
        input: "CSV, JSON, XML",
        output: "Dataset",
      },
      {
        id: "httpRequest",
        name: "HTTP Request",
        description: "Loads data via HTTP request.",
        input: "-",
        output: "Dataset, Object",
      },
    ],
  },
  {
    id: "dataCubes",
    name: "available data cubes",
    children: [
      {
        id: "climate",
        name: "Climate",
        description: "Climate statistic values from 2012 to 2019",
        input: "-",
        output: "Dataset",
      },
      {
        id: "atmosphere",
        name: "Atmosphere",
        description: "Atmosphere statistic values from 2012 to 2019",
        input: "-",
        output: "Dataset",
      },
      {
        id: "population",
        name: "Population",
        description: "Population statistic values from 2012 to 2019",
        input: "-",
        output: "Dataset",
      },
      {
        id: "industry",
        name: "Industry",
        description: "Industry statistic values from 2012 to 2019",
        input: "-",
        output: "Dataset",
      },
      {
        id: "forest",
        name: "Forest",
        description: "Forest statistic values from 2012 to 2019",
        input: "-",
        output: "Dataset",
      },
    ],
  },
  {
    id: "operators",
    name: "Operators",
    children: [
      {
        id: "statisticMerge",
        name: "Statistic Merge",
        description: "Merges multi data sets based on the given column names.",
        input: "Dataset",
        output: "Dataset",
      },
      {
        id: "statisticVisualization",
        name: "Statistic Visualization",
        description:
          "Visualizations multi data sets based on the given column names.",
        input: "Dataset",
        output: "Dataset",
      },
      {
        id: "sort",
        name: "Sort",
        description: "Sorts data based on a given column.",
        input: "Dataset",
        output: "Dataset",
      },
      {
        id: "filter",
        name: "Filter",
        description: "Groups a data set based on a given column name.",
        input: "Dataset",
        output: "Dataset",
      },
    ],
  },
  {
    id: "visualizations",
    name: "Visualizations",
    children: [
      {
        id: "table",
        name: "Table",
        description: "Merges multi data sets based on the given column names.",
        input: "Dataset",
        output: "Table",
      },
      {
        id: "columnChart",
        name: "Column Chart",
        description: "Displays a column chart of given x and y column names.",
        input: "Dataset",
        output: "Column Chart",
      },
      {
        id: "lineChart",
        name: "Line Chart",
        description: "Displays a line chart of given x and y column names.",
        input: "Dataset",
        output: "Line Chart",
      },
      {
        id: "multiAxesChart",
        name: "Multi Axes Chart",
        description:
          "Displays a multi Axes chart of given x and multi y column names.",
        input: "Dataset",
        output: "Multi Axes Chart",
      },
      {
        id: "pieChart",
        name: "Pie Chart",
        description: "Displays a pie chart of given x and y column names.",
        input: "Dataset",
        output: "Pie Chart",
      },
      {
        id: "maps",
        name: "Maps",
        description: "Displays a maps of given data maps",
        input: "Dataset",
        output: "Maps",
      },
    ],
  },
];
