import styles from "./styles.module.scss"
import { Player } from "../Player";
import {  IParticipant } from "../..";

interface DetailsCardProps {
  isOpenDetails: boolean
  blueTeam: IParticipant[]
  redTeam: IParticipant[]
}

export function DetailsCard({ isOpenDetails, redTeam, blueTeam }: DetailsCardProps ) {
  return (
    <div className={`${styles.detailsContainer} ${isOpenDetails ? styles.animation : ''}`}>
      <div className={styles.teamStatus}>Vitória</div>
      <ul>
        {
          blueTeam.map(member => {
            return <Player member={member} />
          })
        }
      </ul>

      <div className={styles.teamStatus}>Derrota</div>
      <ul>
        {
          redTeam.map(member => {
            return <Player member={member} />
          })
        }
      </ul>
    </div>
  )
}