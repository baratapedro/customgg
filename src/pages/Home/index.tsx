import styles from "./styles.module.scss"
import fire from "../../assets/fire.svg"
import refresh from "../../assets/refresh.svg"
import axios from "axios"
import { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
  const [isLoading, setIsLoading] = useState(true)

  function handleUpdate() {
    localStorage.removeItem('ranking')
    getPlayers()
  }

  async function getPlayers() {
    try {
      setIsLoading(true)

      const storedRanking = localStorage.getItem('ranking');
      if (storedRanking) {
        setPlayers(JSON.parse(storedRanking));
        return
      }
      const result = await axios.get('https://rankingcustom.onrender.com/players/ranking')
      setPlayers(result.data)
      localStorage.setItem('ranking', JSON.stringify(result.data));
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPlayers()
  }, [])

  // console.log(players)

  return (
    <div className={styles.ranking_container}>
      <div className={styles.title_container}>
        <h2>Ranking</h2>
        <img src={refresh} alt="" onClick={handleUpdate}/>
      </div>
      {
        isLoading && (
          <SkeletonTheme baseColor="#202020" highlightColor="#333" height={48} width={700}>
            <p>
              <Skeleton count={12} />
            </p>
          </SkeletonTheme>
        )
      }
      {
        !isLoading && (
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
                  <span className={styles.win_rate}>{player.wins}/{player.totalMatches - player.wins}  ({(player.wins / player.totalMatches * 100).toFixed(0)}%)</span>
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
        )
      }
    </div>
  )
}