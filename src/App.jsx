import { useState } from "react";

import { RouterProvider } from "react-router-dom";
import router from "~/routers/main-router";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
