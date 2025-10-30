import React from 'react'
import styles from './Achievements.module.css'

const Achievements: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🎖️ 成就系统</h1>
        <p>解锁成就，证明你的实力！</p>
      </div>
      
      <div className={styles.comingSoon}>
        <div className={styles.comingSoonIcon}>🛠️</div>
        <h2>功能开发中</h2>
        <p>成就系统正在开发中...</p>
        <p>很快就能展示你的荣誉了！</p>
      </div>
    </div>
  )
}

export default Achievements