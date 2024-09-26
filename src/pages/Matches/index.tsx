import { MatchCard } from "./components/MatchCard"
import styles from "./styles.module.scss"

export function Matches() {
  return(
    <div className={styles.matchContainer}>
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
    </div>
  )
}