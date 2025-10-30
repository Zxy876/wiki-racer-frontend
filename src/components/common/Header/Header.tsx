import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const Header: React.FC = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          🎯 Wiki Racer
        </Link>
        
        <nav className={styles.nav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            首页
          </Link>
          <Link 
            to="/game" 
            className={`${styles.navLink} ${location.pathname === '/game' ? styles.active : ''}`}
          >
            开始游戏
          </Link>
          <Link 
            to="/leaderboard" 
            className={`${styles.navLink} ${location.pathname === '/leaderboard' ? styles.active : ''}`}
          >
            排行榜
          </Link>
          <Link 
            to="/achievements" 
            className={`${styles.navLink} ${location.pathname === '/achievements' ? styles.active : ''}`}
          >
            成就
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
          >
            关于
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header