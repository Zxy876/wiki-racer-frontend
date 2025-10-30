import React, { useState } from 'react'
import { generateRandomWikiTitle } from '@/utils/helpers'
import styles from './GameForm.module.css'

interface GameFormProps {
  onGameStart: (start: string, end: string) => void
  loading: boolean
}

export const GameForm: React.FC<GameFormProps> = ({ onGameStart, loading }) => {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (start.trim() && end.trim()) {
      onGameStart(start.trim(), end.trim())
    }
  }

  const handleRandomExample = () => {
    setStart(generateRandomWikiTitle())
    setEnd(generateRandomWikiTitle())
  }

  const handleSwap = () => {
    setStart(end)
    setEnd(start)
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="start">起始页面</label>
          <input
            id="start"
            type="text"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            placeholder="例如: Python_(programming_language)"
            disabled={loading}
            required
          />
        </div>

        <div className={styles.swapButton}>
          <button type="button" onClick={handleSwap} disabled={loading}>
            🔄 交换
          </button>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="end">目标页面</label>
          <input
            id="end"
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            placeholder="例如: Artificial_intelligence"
            disabled={loading}
            required
          />
        </div>

        <div className={styles.actions}>
          <button 
            type="submit" 
            className={styles.primaryButton}
            disabled={loading || !start.trim() || !end.trim()}
          >
            {loading ? '搜索中...' : '🎯 开始搜索'}
          </button>
          
          <button 
            type="button" 
            onClick={handleRandomExample}
            className={styles.secondaryButton}
            disabled={loading}
          >
            🎲 随机示例
          </button>
        </div>
      </form>

      <div className={styles.examples}>
        <h3>💡 示例路径：</h3>
        <ul>
          <li>Python → Artificial_intelligence</li>
          <li>Mathematics → Computer_science</li>
          <li>Physics → Quantum_mechanics</li>
          <li>Biology → Genetics</li>
        </ul>
      </div>
    </div>
  )
}

export default GameForm