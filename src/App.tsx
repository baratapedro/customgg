import styles from "./app.module.scss"
import { Header } from './components/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Matches } from "./pages/Matches";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/matches",
    element: <Matches />,
  },
]);

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <RouterProvider router={router} />
      </main>
    </>
  )
}
