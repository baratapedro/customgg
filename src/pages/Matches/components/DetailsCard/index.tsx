import styles from "./styles.module.scss"
import { Player } from "../Player";

interface DetailsCardProps {
  isOpenDetails: boolean
}

export function DetailsCard({ isOpenDetails }: DetailsCardProps ) {
  return (
    <div className={`${styles.detailsContainer} ${isOpenDetails ? styles.animation : ''}`}>
      <div className={styles.teamStatus}>Vitória</div>
      <ul>
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
      </ul>

      <div className={styles.teamStatus}>Derrota</div>
      <ul>
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
      </ul>
    </div>
  )
}