import React from 'react'
import styles from './About.module.css'

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>ℹ️ 关于 Wiki Racer</h1>
        <p>探索维基百科的奇妙连接</p>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>🎯 游戏介绍</h2>
          <p>
            Wiki Racer 是一个有趣的游戏，挑战你在两个维基百科页面之间找到最短的点击路径。
            通过仅点击页面中的内部链接，看看你能多快从一个主题到达另一个主题！
          </p>
        </div>

        <div className={styles.section}>
          <h2>⚡ 技术特性</h2>
          <ul>
            <li><strong>双向BFS算法</strong> - 快速找到最短路径</li>
            <li><strong>实时缓存</strong> - 使用 Redis 缓存页面链接</li>
            <li><strong>异步处理</strong> - Celery 处理长时间搜索任务</li>
            <li><strong>响应式设计</strong> - 适配各种设备屏幕</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>🛠️ 技术栈</h2>
          <div className={styles.techStack}>
            <div className={styles.techItem}>
              <h3>前端</h3>
              <ul>
                <li>React 18 + TypeScript</li>
                <li>Vite - 构建工具</li>
                <li>React Router - 路由管理</li>
                <li>CSS Modules - 样式方案</li>
              </ul>
            </div>
            <div className={styles.techItem}>
              <h3>后端</h3>
              <ul>
                <li>FastAPI - Web 框架</li>
                <li>Celery - 异步任务队列</li>
                <li>Redis - 缓存和消息代理</li>
                <li>BeautifulSoup - 网页解析</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>🎮 如何游戏</h2>
          <ol>
            <li>在游戏页面输入起始和目标页面标题</li>
            <li>点击"开始搜索"按钮</li>
            <li>系统会使用智能算法寻找最短路径</li>
            <li>根据路径长度和速度获得分数</li>
            <li>解锁成就，提升排名！</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default About