import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/matches">Partidas</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}