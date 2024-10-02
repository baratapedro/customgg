import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Matches } from "../pages/Matches";
import { Header } from "../components/Header";
import { Player } from "../pages/Player";

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
      {
        path: "/players/:playerName",
        element: <Player />
      }
    ]
  },
]);