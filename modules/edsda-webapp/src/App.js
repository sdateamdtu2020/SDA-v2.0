import React, { Suspense } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { GlobalStyles } from "./components/theme";
import { Spinner } from "./components/common";
import { Dashboard } from "./container";
const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyles />
        <Dashboard />
      </DndProvider>
    </Suspense>
  );
};

export default App;
