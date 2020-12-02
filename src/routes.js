import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
import MainLayout from "src/layouts/MainLayout";
import NotFoundView from "src/utils/NotFoundView";
import Voting from "src/views/Voting";
import UniversityList from "src/views/UniversityList";
import VoteHistory from "src/views/VoteHistory";

const routes = [
  {
    path: "bgd",
    element: <DashboardLayout />,
    children: [
      { path: "bo-phieu", element: <Voting /> },
      { path: "lich-su-bo-phieu", element: <VoteHistory /> },
      { path: "ds-tdh", element: <UniversityList /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Navigate to="/bgd/bo-phieu" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
