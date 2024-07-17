import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const HomePage = React.lazy(() => import("./views/pages/HomePage.tsx"));

const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

  return <RouterProvider router={router} />;
};

export default App;
