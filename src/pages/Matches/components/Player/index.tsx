import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'
import { faCoins, faFistRaised } from '@fortawesome/free-solid-svg-icons'
import { IParticipant } from '../..'

interface IPlayerProps {
  member: IParticipant
}

export function Player({ member }: IPlayerProps) {
  return (
    <li className={styles.playerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.summonerInfo}>
          <img className={styles.champIcon} src={member.champion.image.full} alt="" />
          <div className={styles.spellsContainer}>
            <img src={member.player_spells.primary.image} alt="" />
            <img src={member.player_spells.secondary.image} alt="" />
          </div>
          <img className={styles.mainRune} src={member.runes.primary.icon} alt="" />
          <span className={styles.summonerName}>{member.playerTag}</span>
        </div>
        <span className={styles.kda}>
          {member.stats.kills}/{member.stats.deaths}/{member.stats.assists}
        </span>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.goldAndFarm}>
          <span>{member.stats.totalDamageDealtToChampions}</span>
          <FontAwesomeIcon icon={faFistRaised} />
        </div>
        <div className={styles.goldAndFarm}>
          <span>{member.stats.goldEarned} ({member.stats.totalMinionsKilled})</span>
          <FontAwesomeIcon icon={faCoins} />
        </div>
        <div className={styles.build}>
          {
            member.items.map(item => {
              return <img src={item} alt="" />
            })
          }
        </div>
      </div>
    </li>
  )
}