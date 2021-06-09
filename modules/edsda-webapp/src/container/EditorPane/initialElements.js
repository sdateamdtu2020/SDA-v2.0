export const initialElements = [
  {
    id: "info-1",
    type: "info",
    data: {
      title: "1. Welcome to EDSDA!",
      description: [
        "This is a demo flow to show you how EDSDA works.",
        "You can click on the add block button (+block) on the left side to add block to the editor pane or to get a description of what they can do.",
        "At the bottom you can see the output of a selected block and export it as CSV, JSON or XML",
      ],
    },
    position: { x: 15, y: 70 },
  },
  {
    id: "info-2",
    type: "info",
    data: {
      title: "2. Measures",
      description: ["Measure is the integrity value that need to analyze"],
    },
    position: { x: 45, y: 280 },
  },
  {
    id: "info-3",
    type: "info",
    data: {
      title: "3. Connections",
      description: [
        "You can connect blocks while dragging a connection line from an output of a block (right side) to an input of another block (left side).",
      ],
    },
    position: { x: 222, y: 437 },
  },
  {
    id: "info-4",
    type: "info",
    data: {
      title: "4. Dimensions",
      description: [
        "Dimension contain descriptive attributes, and these dimension tables used as a query constraining, and filtering.",
      ],
    },
    position: { x: 580, y: 145 },
  },
  {
    id: "info-5",
    type: "info",
    data: {
      title: "5. Operators",
      description: ["Tools for integrating and data visualization."],
    },
    position: { x: 900, y: 50 },
  },
  {
    id: "info-6",
    type: "info",
    data: {
      title: "6. Visualization",
      description: [""],
    },
    position: { x: 1380, y: 60 },
  },
  {
    id: "climate-1-year-1",
    source: "climate-1",
    target: "year-1",
    animated: true,
  },
  {
    id: "climate-1-city-1",
    source: "climate-1",
    target: "city-1",
    animated: true,
  },
  {
    id: "climate-1-jsonview-1",
    source: "climate-1",
    target: "jsonview-1",
    animated: true,
  },
  {
    id: "city-1-operators-1",
    source: "city-1",
    target: "operators-1",
    animated: true,
  },
  {
    id: "year-1-operators-1",
    source: "year-1",
    target: "operators-1",
    animated: true,
  },
  {
    id: "operators-1-columnChart-1",
    source: "operators-1",
    target: "columnChart-1",
    animated: true,
  },
  {
    id: "operators-1-lineChart-1",
    source: "operators-1",
    target: "lineChart-1",
    animated: true,
  },
];
