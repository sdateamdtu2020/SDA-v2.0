import React, { Suspense } from "react";

import { GlobalStyles } from "./components/theme";
import { Spinner } from "./components/common";
import { Dashboard } from "./container";
const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Dashboard />
    </Suspense>
  );
};

export default App;
