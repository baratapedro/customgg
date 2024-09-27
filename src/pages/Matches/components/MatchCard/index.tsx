import styles from "./styles.module.scss"
import toby from "../../../../assets/toby.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { DetailsCard } from "../DetailsCard";
import { useState } from "react";

export function MatchCard() {
  const [isOpenDetails, setIsOpenDetails] = useState(false)
  return (
    <div className={styles.matchCardContainer}>
      <div className={styles.matchContainer}>
        <div className={styles.mvpContainer}>
          <h3>MVP</h3>
          <img src={toby} alt="" />
          <div>osmumu</div>
        </div>
        <div className={styles.playersContainer}>
          <div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
          </div>

          <div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
            <div>
              <img src={toby} alt="" />
              <div className={styles.summonerName}>osmumu</div>
              <div className={styles.kda}>99/0/99</div>
            </div>
          </div>
        </div>
        <div className={styles.arrowContainer} onClick={() => setIsOpenDetails(!isOpenDetails)}>
          <FontAwesomeIcon icon={faChevronDown} style={{ color: 'white' }} />
        </div>
      </div>
      {
        <DetailsCard isOpenDetails={isOpenDetails}/>
      }
    </div>
  )
}