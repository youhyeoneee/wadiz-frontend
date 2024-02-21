import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/pages/page";
import Layout from "~/pages/layout";

export const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <MainPage />, index: true }],
  },
];

const mainRouter = createBrowserRouter(mainRoutes);
export default mainRouter;
