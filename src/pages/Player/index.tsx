import { useParams } from "react-router-dom"
import styles from "./styles.module.scss"

export function Player() {
  const { playerName } = useParams()
  return(
    <div className={styles.banner}>
      <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg" alt="" />
      <div className={styles.playerInfo}>
        <img src="http://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/4427.png" alt="" />
        {playerName}
      </div>
    </div>
  )
}