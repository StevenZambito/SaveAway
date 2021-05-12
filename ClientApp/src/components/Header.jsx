import styles from '../styles/Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Save Away</h1>
        <button>Log Out</button>
      </div>
    </header>
  )
}
