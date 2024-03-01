// ----------- import external dependencies -------------
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// -------------- import internal dependencies ----------------
const Home = lazy(() => import("../views/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
