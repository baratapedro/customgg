import { useEffect, useState } from "react"
import { MatchCard } from "./components/MatchCard"
import styles from "./styles.module.scss"
import axios from "axios"

export interface IParticipant {
  champion: {
    key: string
    name: string
    image: {
      full: string
      sprite: string
    }
  },
  playerTag: string
  teamSide: string
  stats: {
    kills: number
    deaths: number
    assists: number
    goldEarned: number
    totalDamageDealtToChampions: number
    totalMinionsKilled: number
  }
  player_spells: {
    primary: {
      image: string
      key: string
      name: string
    }
    secondary: {
      image: string
      key: string
      name: string
    }
  }
  runes: {
    primary: {
      icon: string
      id: number
      key: string
      name: string
    }
    secondary: {
      icon: string
      id: number
      key: string
      name: string
    }
  }
  items: string[]
}

export interface IMatch {
  gameCreationDate: string
  gameDuration: number
  gameId: number
  participants: IParticipant[]
}

export function Matches() {
  const [matches, setMatches] = useState<IMatch[]>([])

  async function getMatches() {
    try {
      // setIsLoading(true)

      // const storedRanking = localStorage.getItem('ranking');
      // if (storedRanking) {
      //   setPlayers(JSON.parse(storedRanking));
      //   return
      // }
      const result = await axios.get('https://rankingcustom.onrender.com/history')
      setMatches(result.data)
      // localStorage.setItem('ranking', JSON.stringify(result.data));
    } catch (error) {
      console.error(error)
    } finally {
      // setIsLoading(false)
    }
  }

  useEffect(() => {
    getMatches()
  }, [])

  console.log(matches)

  return(
    <div className={styles.matchContainer}>
      {
        matches.map(match => {
          return <MatchCard match={match} />
        })
      }
    </div>
  )
}