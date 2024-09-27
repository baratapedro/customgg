import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'
import { faCoins, faFistRaised } from '@fortawesome/free-solid-svg-icons'

export function Player() {
  return (
    <li className={styles.playerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.summonerInfo}>
          <img className={styles.champIcon} src="http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Shaco.png" alt="" />
          <div className={styles.spellsContainer}>
            <img src="http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerFlash.png" alt="" />
            <img src="http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerDot.png" alt="" />
          </div>
          <img className={styles.mainRune} src="http://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png" alt="" />
          <span className={styles.summonerName}>pdr</span>
        </div>
        <span>99/0/99</span>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.goldAndFarm}>
          53k
          <FontAwesomeIcon icon={faFistRaised} />
        </div>
        <div className={styles.goldAndFarm}>
          53k (222)
          <FontAwesomeIcon icon={faCoins} />
        </div>
        <div className={styles.build}>
          <img src="http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/3003.png" alt="" />
          <img src="http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/3003.png" alt="" />
          <img src="http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/3003.png" alt="" />
          <img src="http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/3003.png" alt="" />
          <img src="http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/3003.png" alt="" />
          <img src="http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/3003.png" alt="" />
        </div>
      </div>
    </li>
  )
}