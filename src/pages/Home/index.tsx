import styles from "./styles.module.scss"
import fire from "../../assets/fire.svg"
import axios from "axios"
import { useEffect, useState } from "react"

interface IPlayers {
  summonerId: number
  playerTag: number
  totalMatches: number
  wins: number
  winStreak: number
  profileIcon: number
  mostPlayedCharacters: {
    name: string
    image: {
      full: string
      sprite: string
    }
  }[]
}

export function Home() {
  const [players, setPlayers] = useState<IPlayers[]>([])
  async function getPlayers() {
    const result = await axios.get('https://rankingcustom.onrender.com/players/ranking')
    console.log(result.data)
    setPlayers(result.data)
  }

  useEffect(() => {
    getPlayers()
  }, [])

  // console.log(players)

  return (
    <div className={styles.ranking_container}>
      <h2>Ranking</h2>
      <ul>
        {
          players.map((player, index) => (
            <li>
              <span>{index + 1}</span>
              <div className={styles.playerImg}>
                <img src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/profileicon/${player.profileIcon}.png`} alt="" />
                {
                  player.winStreak >= 3 && (
                    <img src={fire} alt="" className={styles.fire} />
                  )
                }
              </div>
              <span className={styles.playerTag}>{player.playerTag}</span>
              <progress value={player.wins} max={player.totalMatches} />
              <span>{player.wins} vitórias ({(player.wins / player.totalMatches * 100).toFixed(0)}%)</span>
              <div className={styles.most_played_champs}>
                {
                  player.mostPlayedCharacters.map(champ => (
                    <img src={`${champ.image.full}`} alt="" />
                  ))
                }
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}