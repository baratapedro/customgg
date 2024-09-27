import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/matches">Partidas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}