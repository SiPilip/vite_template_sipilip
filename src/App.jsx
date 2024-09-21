import { useMemo } from "react";

import "./App.css";
import RouterBuilder from "./App.router";
import { RouterProvider } from "react-router-dom";

function App() {
  const routes = useMemo(() => RouterBuilder(), []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
