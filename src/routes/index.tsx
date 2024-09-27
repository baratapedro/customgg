import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Matches } from "../pages/Matches";
import { Header } from "../components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/matches",
        element: <Matches />,
      },
    ]
  },
]);