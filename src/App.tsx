// ----------- import external dependencies ------------
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

// ------------ import internal dependencies -------------
import { router } from "./routes";
import "./css/main.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
