import styles from "./styles.module.scss"
import toby from "../../../../assets/toby.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { DetailsCard } from "../DetailsCard";
import { useEffect, useState } from "react";
import { IMatch, IParticipant } from "../..";

interface IMatchCardProps {
  match: IMatch
}

export function MatchCard({ match }: IMatchCardProps) {
  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const [blueTeam, setBlueTeam] = useState<IParticipant[]>([])
  const [redTeam, setRedTeam] = useState<IParticipant[]>([])

  useEffect(() => {
    if (!match) return

    const blue: IParticipant[] = []
    const red: IParticipant[] = []
    match.participants.map(participant => {
      if (participant.teamSide === "blue") {
        blue.push(participant)
      }

      if (participant.teamSide === "red") {
        red.push(participant)
      }
    })

    setBlueTeam(blue)
    setRedTeam(red)
  }, [match])

  if(!blueTeam || !redTeam) return null

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
            {
              blueTeam.map(member => (
                <div>
                  <img src={member.champion.image.full} alt="" />
                  <div className={styles.summonerName}>{member.playerTag}</div>
                  <div className={styles.kda}>
                    {member.stats.kills}/{member.stats.deaths}/{member.stats.assists}
                  </div>
                </div>
              ))
            }
          </div>

          <div>
            {
              redTeam.map(member => (
                <div>
                  <img src={member.champion.image.full} alt="" />
                  <div className={styles.summonerName}>{member.playerTag}</div>
                  <div className={styles.kda}>
                    {member.stats.kills}/{member.stats.deaths}/{member.stats.assists}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.arrowContainer} onClick={() => setIsOpenDetails(!isOpenDetails)}>
          <FontAwesomeIcon icon={faChevronDown} style={{ color: 'white' }} />
        </div>
      </div>
      {
        <DetailsCard isOpenDetails={isOpenDetails} redTeam={redTeam} blueTeam={blueTeam} />
      }
    </div>
  )
}