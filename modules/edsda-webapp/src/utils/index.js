export const listSidebar = [
  {
    id: "climate",
    name: "Climate",
    input: false,
    output: true,
  },
  {
    id: "atmosphere",
    name: "Atmosphere",
    input: false,
    output: true,
  },
  {
    id: "population",
    name: "Population",
    input: false,
    output: true,
  },
  {
    id: "industry",
    name: "Industry",
    input: false,
    output: true,
  },
  {
    id: "forest",
    name: "Forest",
    input: false,
    output: true,
  },
  {
    id: "operators",
    name: "Operators",
    children: [
      {
        id: "statisticVisualization",
        name: "Statistic Visualization",
        input: true,
        output: true,
      },
      {
        id: "statisticMerge",
        name: "Statistic Merge",
        input: true,
        output: true,
      },
    ],
  },
  {
    id: "visualization",
    name: "Visualization",
    children: [
      {
        id: "table",
        name: "Table",
        input: true,
        output: true,
      },
      {
        id: "maps",
        name: "Maps",
        input: true,
        output: true,
      },
      {
        id: "columnChart",
        name: "Column Chart",
        input: true,
        output: true,
      },
      {
        id: "lineChart",
        name: "Line Chart",
        input: true,
        output: true,
      },
      {
        id: "pieChart",
        name: "Pie Chart",
        input: true,
        output: true,
      },
      {
        id: "multipleAxes",
        name: "Multiple Axes",
        input: true,
        output: true,
      },
    ],
  },
];
