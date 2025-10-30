import React, { useState } from 'react'
import { useGame } from '@/hooks/useGame'
import { GameForm } from '@/components/game/GameForm/GameForm'
import { GameResult } from '@/components/game/GameResult/GameResult'
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner'
import styles from './Game.module.css'

const Game: React.FC = () => {
  const [showResult, setShowResult] = useState(false)
  const { currentGame, loading, error, createGame, resetGame } = useGame()

  const handleGameStart = async (start: string, end: string) => {
    try {
      await createGame({ start, end })
      setShowResult(true)
    } catch (err) {
      // 错误通过 useGame 处理
    }
  }

  const handleNewGame = () => {
    setShowResult(false)
    resetGame()
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🎮 开始游戏</h1>
        <p>输入两个维基百科页面标题，找到它们之间的最短路径</p>
      </div>

      {error && (
        <div className={styles.error}>
          ❌ {error}
        </div>
      )}

      {loading && <LoadingSpinner message="正在搜索路径..." />}

      {!showResult && !loading && (
        <GameForm onGameStart={handleGameStart} loading={loading} />
      )}

      {showResult && currentGame && (
        <GameResult 
          game={currentGame} 
          onNewGame={handleNewGame}
        />
      )}
    </div>
  )
}

export default Game