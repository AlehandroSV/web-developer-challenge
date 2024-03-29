import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return router;
}
