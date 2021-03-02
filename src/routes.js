import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
import MainLayout from "src/layouts/MainLayout";
import NotFoundView from "src/shared/utils/NotFoundView";
import Voting from "src/views/Voting";
import UniversityList from "src/views/UniversityList";
import VoteHistory from "src/views/VoteHistory";
import SignInView from "src/views/SignIn";
import { getToken } from "./utils/mng-token";
import Statistic from "./views/Statistic";
import Lookup from "./views/Lookup";

const routes = [
  {
    path: "bgd",
    element: <DashboardLayout />,
    children: [
      { path: "bo-phieu", element: <Voting /> },
      { path: "lich-su-bo-phieu", element: <VoteHistory /> },
      { path: "ds-tdh", element: <UniversityList /> },
      { path: "thong-ke", element: <Statistic /> },
      { path: "tra-cuu", element: <Lookup /> },
      { path: "*", element: <Navigate to="/404" replace={true} /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "dang-nhap", element: <SignInView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Redirector /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

function Redirector(props) {
  const token = getToken();
  if (!token) {
    return <Navigate to="/dang-nhap"></Navigate>;
  } else {
    return <Navigate to="/bgd/bo-phieu"></Navigate>;
  }
}

export default routes;
